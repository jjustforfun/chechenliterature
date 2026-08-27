# Prompt — Normalisation de la palotchka (1 / I → Ӏ)

> À lire et à exécuter à chaque fois que de nouveaux textes tchétchènes ont été ajoutés
> aux fichiers de données du projet (`src/data/*.json`).
> Ce prompt corrige le chiffre `1` et le `I` latin (et `l`, `|`) en la vraie lettre
> palotchka **Ӏ** (U+04C0) dans les textes en cyrillique.

---

## Contexte

La base est un projet React (portail littéraire tchétchène) dont les textes vivent dans
des fichiers JSON :

- `src/data/poems.json` — poèmes complets
- `src/data/songs.json` — chants (иллеш)
- `src/data/prose.json` — prose
- `src/data/index.json` — fiches courtes (liste/recherche) pour chaque œuvre

Faute de clavier adapté, les auteurs ont souvent tapé la palotchka sous la forme d'un
**chiffre `1`** (ex. `к1ант`) ou d'un **`I` latin** (ex. `гIиллакх`) au lieu du vrai
caractère **`Ӏ` (U+04C0, Cyrillic Letter Palochka)**, visuellement similaire.

## Tâche

Parcourir les **champs texte** des enregistrements dans les 4 fichiers JSON
(`title`, `text`, `text_preview`, `author`, `tags`, `source`) et remplacer les
substituts de palotchka par `Ӏ`.

## Règles de remplacement

Remplacer **uniquement si le caractère est directement collé à au moins une lettre
cyrillique**, avant ou après, sans espace :

- `1` (chiffre) → `Ӏ`
- `I` (i majuscule latin) → `Ӏ`
- `l` (L minuscule latin) → `Ӏ`
- `|` (pipe) → `Ӏ`
- Doublon `11` **à l'intérieur d'un mot** (collé au cyrillique des deux côtés) → une
  seule palotchka `Ӏ` (ex. `маь11ехь` → `маьӀехь`)

Regex de référence (chiffre `1` ; adapter pour les autres caractères) :

```
(?<=\p{IsCyrillic})1|1(?=\p{IsCyrillic})
```

En Python (`re` standard, qui ne connaît pas `\p`), utiliser la classe de caractères
cyrillique : `[\u0400-\u04FF\u0500-\u052F]`.

**Ordre d'application** :
1. fusionner les doublons `11` internes aux mots → `Ӏ` ;
2. puis remplacer les `1` restants collés au cyrillique → `Ӏ` ;
3. puis `I` → `Ӏ`, `l` → `Ӏ`, `|` → `Ӏ` (même règle d'adjacence).

## Ne jamais toucher

- les chiffres isolés ou entourés d'espaces/ponctuation : `1.`, `– 1 –`, `(1)`, `1 ` ;
- les nombres à plusieurs chiffres, dates, années : `1944`, `21`, `1911чу` (le `1`
  d'une année suivi d'un suffixe cyrillique ne doit PAS être converti) ;
- la numérotation de strophes/vers ;
- les URLs, identifiants, balises HTML ;
- tout texte hors alphabet cyrillique (ru/en/fr ne doivent pas contenir de palotchka) ;
- les champs non-textuels : `id`, `type`, `author_years`, `year_written`, `date_added`,
  `external_links` (URLs).

### Cas ambigu à écarter et à signaler

Tout `1` / `I` / `l` / `|` dont le remplacement est incertain — notamment celui qui est
**adjacent à un autre chiffre** (année + suffixe, numéro…). Signaler ces cas dans le
rapport au lieu de les modifier.

## Procédure obligatoire

1. **Dry-run (aucune modification)** — produire :
   - un tableau `id | champ | extrait avant | extrait après | nb d'occurrences` ;
   - le total global par fichier ;
   - la liste des cas ambigus écartés.
2. **Attendre la validation explicite** de l'utilisateur.
3. **Sauvegarder les valeurs originales** : copier les 4 fichiers dans
   `src/data/backups/<date>-palotchka/`.
4. **Appliquer les remplacements** dans une transaction (en mémoire puis écriture des
   4 fichiers).
5. **Vérifier** :
   - plus aucune occurrence résiduelle de `1`/`I`/`l`/`|` collée au cyrillique ;
   - cohérence `index.json` ↔ fichiers complets (`poems.json`/`songs.json`/`prose.json`) ;
   - `npm run build` passe.
6. **Rapport final** + commande de rollback :
   `cp src/data/backups/<date>-palotchka/*.json src/data/`

## Exemples attendus

| Avant | Après |
|---|---|
| `к1ант` | `кӀант` |
| `1аьржа б1аьргаш` | `Ӏаьржа бӀаьргаш` |
| `т1екхаьчча` | `тӀекхаьчча` |
| `гIиллакх` / `доттагIалла` | `гlиллакх`… → `гlиллакх` → `ғиллакх` | `доттағалла` |
| `ЦIенна тIехь` (source) | `ЦӀенна тӀехь` |
| `цlера` / `тlулге` | `цӀера` / `тӀулге` |
| `маь11ехь` | `маьӀехь` |

> Note : la palotchka correcte est **`Ӏ` U+04C0** (CYRILLIC LETTER PALOCHKA) — ne pas
> utiliser le chiffre `1`, le `I` latin, ni la palotchka codée en U+04CF.