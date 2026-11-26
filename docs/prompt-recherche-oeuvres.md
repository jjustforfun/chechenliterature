# Prompt général — Recherche et ajout de nouvelles œuvres (pour agents IA)

> À lire **avant chaque recherche de nouvelles œuvres** à ajouter au portail.
> Complète `README.md`, `docs/prompt-palotchka.md` et les rapports `docs/ajout-*.md`.
> Dernière mise à jour : 2026-11-26 (lot 2).

Vous êtes un agent IA chargé de **trouver de vraies œuvres littéraires tchétchènes**
(poèmes, chants/иллеш, prose) déjà publiées en ligne, et de les ajouter au catalogue
(`src/data/*.json`). Ce document dit ce qui est attendu de vous et **où chercher**.

---

## 1. Ce qui est attendu de vous

1. **Aucune œuvre inventée.** Chaque fiche doit avoir une `source` précise (URL + référence
   bibliographique si disponible) et un `external_links` vers la page d'origine.
2. **Transcription fidèle.** Le corps du texte est copié **mot à mot** depuis la source ;
   on ne « corrige » pas l'orthographe de l'original. Seuls sont modifiés :
   - les **substituts de palotchka** (`1`, `I` latin, `l`, `|`, `11`/`II` internes) → **Ӏ** (U+04C0),
     uniquement collés à une lettre cyrillique — voir `docs/prompt-palotchka.md` ;
   - les **homoglyphes latins** mêlés à du cyrillique (ex. `a` latin dans `цхьaлхха`) ;
   - les **espaces parasites** de balisage HTML (retours internes aux vers, espaces superflus).
3. **Pas de traduction de corps de texte par l'assistant.** Le `text` ne contient que la
   langue originale. Seuls les **titres** peuvent être traduits (`ru`/`en`/`fr`), et ces
   traductions sont **non relues** — elles sont signalées dans le rapport du lot.
4. **Pas de doublons.** Avant d'écrire quoi que ce soit : comparer ids, `(auteur, titre ce)`,
   premier vers, similarité `SequenceMatcher` avec tout le catalogue (`poems.json` + `songs.json` +
   `prose.json`), et recouper avec les versions `ru`/`en`/`fr` des mêmes auteurs.
   **En cas de doute raisonnable sur un doublon : écarter l'œuvre et le dire dans le rapport.**
5. **Palotchka correcte.** Ӏ = U+04C0 (CYRILLIC LETTER PALOCHKA). Jamais U+04CF (`ӏ`, minuscule
   ukrainienne/géorgienne), jamais le chiffre `1` ou le `I` latin. Aucune palotchka hors champs `ce`
   (sauf le champ `source`, qui cite le recueil cyrillique — ex. « хӀоттийнарг » — comme les fiches existantes).
6. **Tags existants uniquement** (vocabulaire des 3 fichiers de données). Pour le folklore :
   `илли` + `халкъан` + un ou deux tags thématiques (`бала`, `лирика`, `сатира`, `забаре`, …).
   Ne pas créer de nouveaux tags sans validation.
7. **Format de fiche** identique aux fiches existantes : `id` slug latin en minuscules avec
   tirets ; `title`/`text`/`text_preview` en objets `{ce, ru, en, fr}` (clés absentes = `null`
   selon le type de fiche) ; `date_added` = date du jour (`YYYY-MM-DD`) ; `year_written` = `null`
   si inconnu ; `author_years` = comme pour les fiches du même auteur (`"Unknown"` pour le folklore).
8. **Nouvel auteur ?** Ajouter sa transcription EN/FR dans `src/utils/authorName.js`
   (`AUTHOR_NAMES`), comme le README l'exige.
9. **Régénérer l'index** (jamais à la main) : `npm run generate-index` ; bumper le total dans
   `src/data/catalog.test.js` (`expect(catalogWorks.length).toBe(N)`).
10. **Vérifications vertes avant de conclure** :
    `npm run validate-data` → `npm run check` → `npm run format:check` → `npm run build`
    → `python3 scripts/verify_data.py` (dry-run palotchka + doublons ; sortir avec 0 problème nouveau).
11. **Trace écrite obligatoire** : un rapport `docs/ajout-<type>-<date>[-lotN].md` décrivant
    sources, œuvres ajoutées, œuvres écartées (et pourquoi), normalisations, points à relire,
    résultats des vérifications, et commande de retour arrière (`git revert`).
12. **Sauvegarde/rollback** : le dépôt est sous git — `git revert <commit>` suffit ;
    ne pas committer de dossiers `src/data/backups/` (convention depuis 9f05332).

## 2. Workflow type

```bash
# 1. Lire README.md + docs/prompt-palotchka.md + ce fichier + les rapports existants
# 2. Dépouiller les sources (§ 4) ; pour chaque candidat : txt complet + URL
# 3. Script de déduplication maison (ids / (auteur, titre ce) / premier vers / SequenceMatcher)
# 4. Écrire les fiches (JSON, 2 espaces, fin de ligne), date_added = aujourd'hui
npm run generate-index          # régénère index.json + available_languages + text_preview
npm run validate-data           # cohérence full ↔ index
npm run check                   # validate-data + eslint + vitest
npm run format:check            # prettier (ou npm run format si besoin)
npm run build                   # build complet
python3 scripts/verify_data.py  # palotchka résiduels + doublons
# 5. Écrire docs/ajout-oeuvres-<date>.md (modèle : docs/ajout-oeuvres-2026-11-26-lot2.md)
# 6. git add + commit sur votre branche de session uniquement
```

## 3. Conventions de fiches (rappels)

- `text_preview.ce` : première(s) ligne(s) du texte, tronquée à ~160 caractères, `…` final si coupée.
- Strophes : séparées par `\n\n` ; `orga.narod.ru` balise chaque vers par `<p>` avec des sauts
  parasites internes → ressouder, garder les ruptures de locuteur et de refrain.
- Folklore (`Автор: Халкъан`) : `author_years: "Unknown"`, `year_written: null`, texte `ce` seul,
  titre `ce` + traductions de titres en `ru`/`en`/`fr` (littérales, « … » en fin de titre si
  premier vers tronqué), `external_links` pointant la section du recueil.
- Poèmes d'auteur (Маршо Радио, Стихи.ру…) : `author_years` identique aux fiches existantes ;
  `year_written: null` (la date publiée est celle de la mise en ligne, pas de la composition).
- `source` : « Auteur. Titre (Source, date de publication) » — suivre le style des fiches
  existantes, ex. `Сулейманов Ахьмад. Нене (Маршо Радио, онлайн-библиотека; охан-бутт 09, 2020)`.

## 4. OÙ CHERCHER — inventaire des sources (état au 2026-11-26)

Légende : ✅ exploitée sans doublon · 🔶 partiellement exploitée · ❌ écartée (OCR/doublons) · 🆕 utilisée récemment

### 4.1 Орга — «Нохчийн фольклор» (`https://orga.narod.ru/folklor/main.htm`)
Recueil : *Чеченский фольклор (Нохчийн фольклор)*, сост. **Ш. А. Джамбеков**, Грозный : «Книга», 1991.
Le texte utilise `1`/`I` comme palotchka ; vers balisés `<p>`. **Source la plus fiable et la plus dense.**

| Page | Section | État |
|---|---|---|
| `c435.htm` | Узамаш (lamentations) | ✅ 13/18 retenues (12 le 2026-11-26 lot 1 + № 14 lot 2). № 6 incomplet ; № 9, 11, 16 coquilles OCR ; № 18 écarté (variante du distique final de `folk-uzam-dakaza-ma-dala-malkh-kheta`). **Épuisée.** |
| `c454.htm` | Социале-политикан чулацам болу эшарш | ✅ 5/6 (№ 1–5, lot 1). № 6 « Бала бу сан коьртехь » : OCR cassé (`лекьар`, `гог1у`). **Épuisée.** |
| `c490.htm` | Сатиран эшарш | 🔶 № 3 (lot 1), № 1, 2, 4, 9, 10 (lot 2). **Restent : № 5** (« Сан самукъа долучу хенахь »), **№ 6–8** (cycle « зуда йолу кӀанат »), **№ 11–15** (cycle « Хьешана лекхна эшарш » — quatrains courts, à évaluer soigneusement). |
| `c498.htm` | Лирикан тийжамаш | 🔶 № 3 (lot 1), № 2, 4, 5, 6 (lot 2). № 1 écarté (`TIepa`, substituts latins). **Épuisée.** |
| `c488.htm` | Забаре эшарш | ✅ № 1–8 (2026-11-25) |
| `c493.htm` | Хелхаран эшарш | 🔶 № 1, 3, 10, 13 (2026-11-25). № 16 « XIe, месаш » : substituts latins ambigus (à relire sur l'imprimé) ; № 17, 25, 26 fragmentaires. **Autres numéros à vérifier.** |
| `c457.htm` | Ӏер-дахаран хьокъехь эшарш | 🔶 № 1, 15 (2026-11-25). **Autres numéros à vérifier.** |
| `c471.htm` | Безаман эшарш (chants d'amour) | 🔶 6 utilisés le 2026-11-11 (№s 1, 3, 4, 5, 9, 12…). **Autres numéros à vérifier.** |
| `c20.htm` | Къинхьегаман эшарш (chants de travail) | 🔶 № 18, 26 (2026-11-11). **Autres numéros à vérifier.** |
| `c141.htm` | Берийн фольклор (берийн / аганан / берийн эшарш) | 🔶 №s 1, 3, 4, 5 (аганан), 3, 4 (берийн), comptine XXXI № 6, хӀеттарш XXXIII № 2 (2026-11-11). **Autres numéros à vérifier.** |
| `c447.htm` | Халкъан новеллаш | ✅ № 4, 5, 7, 8 (2026-11-11 lot 2) |
| `c115.htm` | Contes d'animaux / fables | 🔶 « Эмкал » (Эмкал), « ХӀиллане цхьогал », « Сутаралла » (2026-11-11) |
| `c415.htm`, `c418.htm` | (autres sections) | ❌ coquilles OCR irrécupérables (`Юайчу`, `белахъ`) — 2026-11-26 |

### 4.2 Маршо Радио — онлайн-библиотека (`https://www.radiomarsho.com/`)
Bibliothèque audio de poèmes tchétchènes, avec texte intégral par page (`/a/<id>.html`).
Pages d'index par auteur : `/z/<id>` (ex. [`z/17581`](https://www.radiomarsho.com/z/17581) pour
Сулейманов Ахьмад). Publié en juin 2016 pour les lots classiques, nouvelles pièces en 2017–2020,
liste complète dans la rubrique **ОНЛАЙН БИБЛИОТЕКА** (`/z/17538`).

- ✅ Dépouillé le 2026-11-26 (lot 1) : œuvres de Ӏаьрби Мамакаев, Гадаев, Сулейманов, Дикаев,
  Сулаев, Саидов Билал, Сатуев, Хатуев, Абдулаев, Гайтукаева, Цуруев, Рашидов, Юсупов, Гацаев,
  Петирова (pages 17556, 17567, 17570, 19889, 20466, 20468 et sous-pages).
- 🆕 Dépouillé le 2026-11-26 (lot 2) : [`z/17581`](https://www.radiomarsho.com/z/17581) (Сулейманов)
  → « Дахаран генаш », « Нене », « Борз ю угӀуш », « Кхин цкъа а хьоьжур вац… » ajoutés ;
  « Шовда » déjà au catalogue ; « Шуьнехь Дош (Дагаев Валиде) » écarté (attribution ambiguë).
  [`30401849`](https://www.radiomarsho.com/a/30401849.html) (Гадаев) → « Суьйре, Ӏуьйре гӀийла йогӀу… ».
- **Restent à dépouiller** : les pages d'index des autres poètes de la bibliothèque
  (explorer `/z/17538`), notamment les sections 2019–2020 (« охан-бутт 09, 2020 »,
  « дечкен-бутт 28, 2020 ») qui ajoutent régulièrement de nouveaux textes.

### 4.3 Waynakh Online (`https://www.waynakh.com/`)
Blog édité par la diaspora tchétchène ; catégories `/fr/`, `/eng/` — poèmes avec traduction
EN ou FR (parfois ce+ru+en+fr), contes et paroles de chansons.
- Utilisé : 2026-08-29, 2026-10-13/14 (restauration), 2026-11-11, 2026-11-26 (lot 1 :
  `gecdelah-latta-suleyman-tokkaev`).
- Intéressant pour les **traductions EN/FR déjà publiées** d'œuvres tchétchènes ; vérifier
  systématiquement les doublons (`gatsaev-reviendrai` vs version tchétchène waynakh).
- Catégories à fouiller : `/fr/category/paroles-de-chansons/`, `/fr/category/poemes/`, `/eng/...`.

### 4.4 Нохчалла.com (`https://nohchalla.com/literatura/chechenskie-stihi/…`)
Site russe de littérature tchétchène ; texte intégral des poèmes (souvent **en russe** ou ce+ru).
- Utilisé : poèmes de **Руслан Ахтаханов** (14, lot 2026-11-25 — flux RSS `/category/literatura/chechenskie-stihi/ruslan-ahtahanov/feed` + API REST WordPress, très pratique),
  Муса Гешаев (Орга geshaev, pas ici), **Саид-Хамзат Нунуев**, **Бана Гайтукаева**, Хамзат Магомадов,
  Ибрагим Юсупов, Саид Гацаев…
- **Structure** : `/literatura/chechenskie-stihi/<prénom-nom>/<id>-<slug>` ; listes par rubrique
  `/category/literatura/chechenskie-stihi/<auteur>/` (+ `/feed` pour export complet).

### 4.5 Стихи.ру / Проза.ру
Sites de poésie amateur ; sources de poèmes **en tchétchène** d'auteurs contemporains.
- Utilisé 2026-11-10 (Вахит Хаджимурадов, Заурбек Хамерзаев, Исхан Матагов, Марем Нохчиева,
  Хасаин Идрисов, Фариза Цалдаева).
- Recherche efficace : `site:stihi.ru нохчийн мотт`, `site:stihi.ru Даймохк`, etc.

### 4.6 Autres sources déjà mobilisées (garder en tête)
- `umarlavina.narod.ru` — site perso d'**Умар Яричев** (poèmes ce/ru) — utilisé 2026-11-11.
- `groznycity.ru` — « Чеченская народная поэзия XIX–XX вв. » (илли en russe) — utilisé 2026-10-13.
- `maxima-library.org` — « Чеченская литература » (**Магомет Сулаев**, poèmes russes) — consulté 2026-11.
- `dahar.ucoz.net` — форум «Дахар» (Сулейманов « Шовда », suleimanov-shovda).
- `poemhunter.com` — traductions EN de poèmes tchétchènes (Ильман Юсупов, Искандер Керимов…).
- `infourok.ru` — pages isolées (ex. Мамакаев « Нана »).
- `daymohk-gazet.ru` — article sur « Шелара иллиалархо » (2026-11).

## 5. Pièges fréquents (retour d'expérience)

- **Pages OCR** : `1`↔`Ӏ`, `I`↔`Ӏ`, `Ɩ`, `|`, `11`, `II`, `І`/`і` ukrainien, `ӏ` U+04CF, `0`↔`О`,
  mélanges latin/cyrillique (`x`, `y`, `r`, `a`, `e`). Toujours passer un audit (`verify_data.py`)
  et corriger **uniquement** les substituts adjacents au cyrillique ; jamais les dates ni la ponctuation.
- **`ӏ` (U+04CF) ≠ `Ӏ` (U+04C0)** : invisible à l'œil, différent pour le navigateur et le tri.
- **Doublons masqués** : même texte sous source différente (`suleimanov-shovda` ajouté deux fois
  depuis deux sites) ; mêmes premiers vers (refrains de lamentations) ; même œuvre en traduction.
  → Toujours comparer le **texte complet** et pas seulement les titres.
- **Pages parasitées** : bannières uCoz, modales vidéo, « ДIасаяхьийта », rubriques — n'extraire
  que le poème ; ne pas recopier signatures ni notices biographiques hors poème.
- **Datation** : la date d'une page = mise en ligne, pas composition → `year_written: null`.
- **Titre > 160 caractères** : tronquer le titre `ce` (premier vers) avec `…` ; `ru/en/fr` idem.
- **Tags** : réutiliser le vocabulaire existant (`grep -oh '"[^"]*"'` sur les tags des 3 fichiers).
- **`catalog.test.js`** : bumper `toBe(N)` sinon les tests échouent.

## 6. Definition of Done (récapitulatif)

- [ ] Œuvres ajoutées dans `poems.json` / `songs.json` / `prose.json` (fins de fichier)
- [ ] Aucun doublon (ids, couples, premiers vers, textes quasi-identiques)
- [ ] Palotchka normalisée, 0 U+04CF, 0 latin/chiffre dans `ce`
- [ ] `index.json` régénéré ; `catalog.test.js` bumpé
- [ ] `npm run check && npm run format:check && npm run build` verts
- [ ] `python3 scripts/verify_data.py` — 0 problème nouveau (comparer à `main`)
- [ ] Nouvel auteur → `src/utils/authorName.js`
- [ ] Rapport `docs/ajout-*.md` écrit (sources, liste, exclusions, points à relire, rollback)
- [ ] README/`docs/prompt-recherche-oeuvres.md` mis à jour si de nouvelles sources ont été trouvées
