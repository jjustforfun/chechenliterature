#!/usr/bin/env python3
"""Audit des donnees du portail (a lancer apres chaque ajout de textes tchetchenes).

Implements the dry-run de `docs/prompt-palotchka.md` plus quelques controles
de coherence : substituts de palotchka, U+04CF, doublons, index <-> oeuvres.

    python3 scripts/verify_data.py

Le script ne modifie jamais les donnees : il affiche un rapport et sort avec
un code non nul si un probleme est detecte.
"""
import json
import re
import sys
import unicodedata
from difflib import SequenceMatcher
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "src" / "data"
FILES = ("poems", "songs", "prose", "index")
TEXT_FIELDS = ("title", "text", "text_preview", "author", "tags", "source")
PALOCHKA = "\u04c0"          # Ӏ (correct)
SMALL_PALOCHKA = "\u04cf"    # ӏ (interdit)
SUBSTITUTES = ("1", "I", "l", "|")
CYRILLIC = re.compile(r"[\u0400-\u04FF\u0500-\u052F]")
NON_CE_LANGS = ("ru", "en", "fr")


def is_cyrillic(char):
    return bool(char) and bool(CYRILLIC.fullmatch(char))


def excerpt(text, start, length=1):
    return text[max(0, start - 14):min(len(text), start + length + 14)].replace("\n", " ")


def find_substitutes(text):
    """Retourne (occurrences a corriger, cas ambigus ecartes)."""
    hits, ambiguous = [], []
    for i, char in enumerate(text):
        if char not in SUBSTITUTES:
            continue
        before = text[i - 1] if i else ""
        after = text[i + 1] if i + 1 < len(text) else ""
        if not (is_cyrillic(before) or is_cyrillic(after)):
            continue
        if before.isdigit() or after.isdigit():
            ambiguous.append((char, excerpt(text, i)))
        else:
            hits.append((char, excerpt(text, i)))
        # Doublons « 11 » internes : la seconde occurrence est aussi signalee ;
        # la regle de fusion du prompt s'applique lors d'une correction.
    return hits, ambiguous


def iter_values(work):
    """(chemin du champ, langue ou None, valeur) pour les champs textuels."""
    for field in TEXT_FIELDS:
        value = work.get(field)
        if isinstance(value, dict):
            for lang, text in value.items():
                if isinstance(text, str):
                    yield f"{field}.{lang}", (lang if lang in ("ce",) + NON_CE_LANGS else None), text
        elif isinstance(value, list):
            for text in value:
                if isinstance(text, str):
                    yield field, None, text
        elif isinstance(value, str):
            yield field, None, value


def norm(text):
    text = unicodedata.normalize("NFKC", text or "").lower()
    return re.sub(r"[^\w\u0400-\u04ff]+", " ", text, flags=re.UNICODE).strip()


def main():
    works = {name: json.loads((DATA / f"{name}.json").read_text(encoding="utf-8"))
             for name in FILES}

    problems = []
    hits_total = 0
    ambiguous_total = 0
    print("== Palotchka : dry-run (aucune modification) ==")
    print("fichier | id | champ | extrait avant | apres | nb")
    for name in FILES:
        file_hits = 0
        for work in works[name]:
            for field, lang, text in iter_values(work):
                hits, ambiguous = find_substitutes(text)
                for char, context in hits:
                    print(f"{name}.json | {work['id']} | {field} | {context} | {PALOCHKA} | {char}")
                    file_hits += 1
                for char, context in ambiguous:
                    print(f"# AMBIGU ecarte : {name}.json | {work['id']} | {field} | {char} | {context}")
                    ambiguous_total += 1
                if SMALL_PALOCHKA in text:
                    problems.append(f"U+04CF present : {name}.json {work['id']} {field}")
                if lang in NON_CE_LANGS and PALOCHKA in text:
                    problems.append(f"palotchka dans un texte {lang} : {name}.json {work['id']} {field}")
        hits_total += file_hits
        print(f"-- total {name}.json : {file_hits} substituts residuels")
    print(f"TOTAL substituts residuels : {hits_total} | cas ambigus ecartes : {ambiguous_total}")
    if hits_total:
        problems.append(f"{hits_total} substituts de palotchka a corriger")

    # ---- Doublons ---------------------------------------------------------
    print("\n== Doublons ==")
    all_works = [w for name in FILES for w in works[name]]
    duplicates = []
    for name in FILES:
        ids = [w["id"] for w in works[name]]
        duplicates += [f"{name}.json:{i}" for i in set(ids) if ids.count(i) > 1]
    duplicates.sort()
    print(f"ids dupliques (par fichier) : {duplicates or 'aucun'}")
    if duplicates:
        problems.append(f"ids dupliques : {duplicates}")

    titles = {}
    seen_ids = set()
    for w in all_works:
        if w["id"] in seen_ids:  # une oeuvre est presente dans l'index ET en complet
            continue
        seen_ids.add(w["id"])
        ce = (w.get("title") or {}).get("ce")
        if ce:
            key = (norm(w.get("author")), norm(ce))
            titles.setdefault(key, []).append(w["id"])
    same_titles = {k: v for k, v in titles.items() if len(v) > 1}
    print(f"memes (auteur, titre ce) : {same_titles or 'aucun'}")
    if same_titles:
        problems.append(f"titres dupliques : {same_titles}")

    first_lines = {}
    for w in all_works:
        for field in ("text", "text_preview"):
            ce = (w.get(field) or {}).get("ce")
            if isinstance(ce, str) and ce.strip():
                first = norm(ce.split("\n")[0].split("/")[0])
                if first:
                    first_lines.setdefault(first, set()).add(w["id"])
    same_firsts = {k: sorted(v) for k, v in first_lines.items() if len(v) > 1}
    print(f"premiers vers partages : {len(same_firsts)}")
    if same_firsts:
        for k, v in list(same_firsts.items())[:5]:
            print(f"  '{k[:50]}' -> {v}")

    ce_texts = []
    for w in works["poems"] + works["songs"] + works["prose"]:
        ce = (w.get("text") or {}).get("ce")
        if isinstance(ce, str) and ce.strip():
            ce_texts.append((w["id"], norm(ce)))
    exact, near = [], []
    for i, (id_a, a) in enumerate(ce_texts):
        for id_b, b in ce_texts[i + 1:]:
            if a == b:
                exact.append((id_a, id_b))
            elif 0.6 < min(len(a), len(b)) / max(len(a), len(b)) < 1.7 and \
                    SequenceMatcher(None, a[:400], b[:400]).ratio() > 0.92:
                near.append((id_a, id_b))
    print(f"textes ce strictement identiques : {exact or 'aucun'}")
    print(f"textes ce quasi-identiques (avertissement, peuvent etre des variantes) : {near or 'aucun'}")
    if exact:
        problems.append(f"textes dupliques : {exact}")

    # ---- Index <-> oeuvres completes --------------------------------------
    print("\n== Index <-> fichiers complets ==")
    full_ids = {w["id"] for w in works["poems"] + works["songs"] + works["prose"]}
    index_ids = {w["id"] for w in works["index"]}
    missing_index = sorted(full_ids - index_ids)
    index_only = sorted(index_ids - full_ids)
    print(f"oeuvres sans fiche index : {missing_index or 'aucune'}")
    print(f"fiches index sans oeuvre complete (historique) : {len(index_only)}")
    if missing_index:
        problems.append(f"oeuvres absentes de l'index : {missing_index}")

    print("\n== Resultat ==")
    if problems:
        for problem in problems:
            print("  ECHEC :", problem)
        return 1
    print("  OK : palotchka, doublons et index coherents.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
