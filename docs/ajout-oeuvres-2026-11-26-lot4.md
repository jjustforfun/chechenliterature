# Lot d'œuvres ajoutées le 2026-11-26 (lot 4) : 6 poèmes de Хьамзат Талхадов / ШаӀрани Хасаров + 10 chants folkloriques

> Date d'ajout (`date_added`) : `2026-11-26` · Branche `arena/1c8d053d-chechenliterature` · base `main` @ `edd4f67`
> **Lot 4 du 2026-11-26** — les lots 1 à 3 du même jour sont décrits dans
> `docs/ajout-oeuvres-2026-11-26.md`, `docs/ajout-oeuvres-2026-11-26-lot2.md` et
> `docs/ajout-oeuvres-2026-11-26-lot3.md`. Ce document décrit le quatrième lot.

Ajout de **16 œuvres** en tchétchène (`ce`), transcrites mot pour mot depuis des sources en
ligne vérifiées : **6 poèmes** d'auteurs contemporains (`src/data/poems.json`) et **10 chants
folkloriques / chants de travail / sardamash** (`src/data/songs.json`).

- `src/data/poems.json` : 401 → **407**
- `src/data/songs.json` : 97 → **107**
- `src/data/prose.json` : 20 → **20** (inchangé)
- `src/data/index.json` : 518 → **534** (régénéré par `npm run generate-index`, jamais édité à la main)
- `src/data/catalog.test.js` : total attendu 518 → **534**
- `src/utils/authorName.js` : **1** nouvelle transcription EN/FR (`Хьамзат Талхадов` →
  *Khamzat Talkhadov* / *Khamzat Talkhadov*), insérée à sa place alphabétique

Couverture des textes pleins : `ce` 378 → **394** (+16, tous les textes sont en tchétchène) ·
`ru` 136 · `en` 57 · `fr` 61 (inchangés).

**Tous les corps de texte viennent des sources, mot pour mot. Aucune traduction de corps de texte
n'a été produite par l'assistant.** Seuls les **titres** `ru`/`en`/`fr` sont des traductions
littérales non relues (voir « Points à relire »).

---

## 1. Sources dépouillées

1. **Маршо Радио — онлайн-библиотека** (<https://www.radiomarsho.com/z/17538>), pages
   nouvellement lues intégralement :
   - index `p=1` (publications 2021–2022) : `31759205`, `31759207`, `31520745`, `31495718`,
     `31495720`, `31495724`, `31495705` ;
   - index `p=2` : `31038876`, `31041951` ;
   - index `p=3` : `31041954`, `31041956`, `31041960`, `31038870`, `31038867`, `31034408`,
     `31034404`, `29472792`, `29470970`, `28010735`, `28980904`, `30401741`, `30409918`,
     `28125870`, `30875919`, `31759190`, `31759199`, `28362049`, `28125878`, `30362577`.
2. **Орга — «Нохчийн фольклор»** (<https://orga.narod.ru/folklor/main.htm>) :
   - [« Хелхаран эшарш » (`c493.htm`)](https://orga.narod.ru/folklor/c493.htm) — № 2, 14, 18, 21, 23 ;
   - [« Къинхьегаман эшарш » (`c20.htm`)](https://orga.narod.ru/folklor/c20.htm#p20_1) — № 1 ;
   - [« Безаман эшарш » (`c471.htm`)](https://orga.narod.ru/folklor/c471.htm) — № 3, 22, 29 ;
   - [« Сардамаш » (`c36.htm`)](https://orga.narod.ru/folklor/c36.htm) — № 7.
   Édition *Чеченский фольклор (Нохчийн фольклор)*, composée par **Ш. А. Джамбеков**,
   Grozny : « Книга », 1991.

### Étude de faisabilité des autres sections d'Орга (non retenues en l'état)

Ces pages ont été lues et **écartées** pour ce lot ; elles restent des pistes documentées.

| Page | Contenu | Raison de l'écart |
|---|---|---|
| `c401.htm` « Дади-юрт яккхаран илли » | Récit chanté de la destruction de Dadi-Yourt | **Texte corrompu par la mise en page uCoz** : l'initiale du premier mot de chaque vers est détachée sur la ligne précédente (« Ц1онтарой ва Дада » pour « ц1онтарой ва Дада », « Ма доккха де » pour « ам доккха де »…). Restitution impossible sans l'imprimé. |
| `c227.htm` « Г1ебартойн Курсолтин илли » (6 fragments) | Longue илли (des centaines de vers) | Même corruption de colonne + volume très important : à traiter dans un lot dédié, avec relecture. |
| `c251.htm`, `c260.htm`, `c270.htm`, `c284.htm`, `c290.htm`, `c295.htm`, `c303.htm`, `c307.htm`, `c317.htm`, `c329.htm`, `c336.htm`, `c339.htm`, `c346.htm`, `c356.htm`, `c368.htm`, `c378.htm`, `c385.htm`, `c389.htm`, `c394.htm`, `c398.htm`, `c403.htm`, `c405.htm`, `c410.htm`, `c421.htm` | Corpus des grandes иллеш héroïques | Non dépouillées : pages longues (3 à 9 fragments) à vérifier une par une ; priorité donnée dans ce lot à des textes courts et sûrs. |
| `c502.htm` « Сатира а, забаре а » | 37 histoires drôles / anecdotes (`дийцарш` en prose) | **Hors périmètre** « poèmes / chants » de ce lot (relèverait de `prose.json`, et il s'agit d'histoires et non de poèmes). |
| `c415.htm` (« Бос хазчу Тахун илли »), `c418.htm` (« Бежун илли ») | Deux илли | OCR irrécupérable (déjà signalé dans `docs/prompt-recherche-oeuvres.md`) — écart confirmé. |
| `c490.htm` № 8, 12–15 | Cycle « Хьешана лекхна эшарш » | Variantes resserrées de № 11 (déjà au catalogue) et de № 5/6/7 : refrains « кхин ма воьллахь тхоьга » répétés. Écart maintenu (cf. lot 3). |
| `c457.htm` № 3, 4, 5, 9, 10, 11, 12, 14, 17–34 | Chants « Ӏер-дахаран » | Non retenus dans ce lot : nb. 3 reprend le refrain de № 7 (déjà retenu au lot 3) ; les autres (longues Complaintes de la fille sans frère / de la mère) méritent une comparaison fine avec № 15 « Нанна » et № 16 déjà au catalogue. **Piste pour un prochain lot.** |
| `c471.htm` № 9, 11, 16, 17–21, 23–28, 30–37 | Chants d'amour | Restent à dépouiller ; les plus proches des № 1/2/6/7/8/13 déjà présents doivent être comparés avant ajout. |

---

## 2. Œuvres ajoutées

Toutes ont `source`, `external_links`, `text_preview.ce`, des tags du vocabulaire existant et
`date_added = 2026-11-26`. Les nouvelles fiches sont ajoutées **en fin de fichier**, sans modifier
les 518 fiches antérieures.

### A. Poèmes d'auteur (`src/data/poems.json`, 6 œuvres)

| # | `id` | Auteur | Titre (`ce` / `fr`) | Vers | Palotchkas | Source |
|---|---|---|---|---:|---:|---|
| 1 | `talkhadov-khamzat-veset` | **Хьамзат Талхадов** (nouveau) | Весет / Testament | 49 | 11 | [Маршо Радио `31759207`](https://www.radiomarsho.com/a/talhadov-hjamzat-veset/31759207.html) |
| 2 | `talkhadov-khamzat-dagtsa-kamel` | **Хьамзат Талхадов** | Дагца къамел / Entretien avec le cœur | 39 | 17 | [Маршо Радио `31759205`](https://www.radiomarsho.com/a/talhadov-hjamzat-dagtsa-kamel/31759205.html) |
| 3 | `khasarov-sharani-teman-mukamash` | ШаӀрани Хасаров | ТӀеман мукъамаш / Mélodies de la guerre | 13 | 4 | [Маршо Радио `31038876`](https://www.radiomarsho.com/a/31038876.html) |
| 4 | `khasarov-sharani-lulakhoyn-beshakh` | ШаӀрани Хасаров | Лулахойн бешахь / Dans le jardin des voisins | 19 | 11 | [Маршо Радио `31041951`](https://www.radiomarsho.com/a/31041951.html) |
| 5 | `khasarov-sharani-chirdiga-kerla-sho-dustar` | ШаӀрани Хасаров | ЧӀирдига керла шо дустар / Tchirdig fête le Nouvel An | 37 | 13 | [Маршо Радио `31495718`](https://www.radiomarsho.com/a/31495718.html) |
| 6 | `khasarov-sharani-gergarlonash` | ШаӀрани Хасаров | Гергарлонаш / Les liens de parenté | 12 | 8 | [Маршо Радио `31495724`](https://www.radiomarsho.com/a/31495724.html) |

`author_years = null` et `year_written = null` pour les six fiches (la date de la page est celle de
la mise en ligne). Quand le poème porte une date en fin de texte (« 1995 шо », « 1974 ш. »,
« 1998 ш. »), elle est **signalée dans `source`** mais n'est pas convertie en date de composition
vérifiée. Le titre conservé est celui de la source (« ЧӀирдига керла шо дустар », graphie
`ЧӀирдига` ; le corps du poème écrit `ЧӀирдиг`). Le tiret de la source a été rendu par une virgule
(« … тиллиг, ») car le trait d'union final suivi d'un retour à la ligne simule une césure, cf.
l'avertissement analogue du corps même du texte (« Тентиг ю. Ю йоккха тиллиг- »).

### B. Chants folkloriques (`src/data/songs.json`, 10 œuvres)

Auteur `Халкъан`, `author_years = "Unknown"`, `year_written = null`, texte `ce` seul.
Tags : `илли`, `халкъан` + un ou deux tags existants.

| # | `id` | Titre (`ce` / `fr`) | Section du recueil | Vers | Palotchkas |
|---|---|---|---|---:|---:|
| 7 | `folk-khelkharan-eshar-kuygash-mel-khaza-lelado` | Куьйгаш мел хаза леладо… / Comme tu fais danser tes mains… | Хелхаран, № 2 | 4 | 0 |
| 8 | `folk-khelkharan-eshar-ay-khettarg-malkh-bats` | Ӏай кхеттарг малх бац… / Ce qui se lève en hiver n'est pas le soleil… | Хелхаран, № 14 | 10 | 1 |
| 9 | `folk-khelkharan-eshar-as-sayna-tsen-karkhash` | Ас сайна цӀен кӀархаш оьцур бу… / Je m'achèterai des bottes propres… | Хелхаран, № 21 | 4 | 3 |
| 10 | `folk-khelkharan-eshar-lamanan-lecha` | Ламанан леча, ла-ла-ла… / Faucon des montagnes, la-la-la… | Хелхаран, № 23 | 4 | 0 |
| 11 | `folk-khelkharan-eshar-tsqa-khelkhavallats` | Цкъа хелхаваллалц… / Avant même d'avoir dansé une fois… | Хелхаран, № 18 | 8 | 0 |
| 12 | `folk-kinkhegaman-eshar-khovza-kakhar` | Хьовза, кахьар, хьовза, кахьар… / Tourne, kakhar, tourne, kakhar… | Къинхьегаман, Кахьар хьовзош локху эшарш, № 1 | 8 | 0 |
| 13 | `folk-eshar-akh-sohga-ladogal` | Ахь соьга ладогӀал… / Écoute-moi… | Безаман, № 3 | 16 | 5 |
| 14 | `folk-eshar-lekha-popanna-khoekkhu-mokh` | Лекхачу попанна хьоькху мох ца оьшу… / Le grand peuplier n'a que faire du vent… | Безаман, № 22 | 18 | 1 |
| 15 | `folk-eshar-yish-yalar-da-visarg` | Йиш ялар, да виссарг… / La chanson demeure, le père s'en va… | Безаман, № 29 | 22 | 2 |
| 16 | `folk-sardam-vadarkh-yal-yolush` | Вадарх ял йолуш… / Puisses-tu avoir charrue et bœuf… | Сардамаш, № 7 | 4 | 0 |

**Total : 119 vers d'auteur + 98 vers folkloriques, 68 occurrences de `Ӏ` dans les textes
(102 dans l'ensemble des nouvelles fiches avec titres, aperçus et sources).**

Notes de transcription :

- **`c493.htm` № 21** : la source écrit « Ас сайна ц1ен к1архаш оьцур бу » ; le premier mot est
  bien `Ас` (transcription fidèle, aucune correction).
- **`c493.htm` № 18** : poème déjà présent au catalogue ? Non — `folk-khelkharan-eshar-bettan-nur-dayna`
  est le № 1, `kuygash-ma-khaza` le № 3, `khakha-ezara-volga` le № 10 et `yoya-a-kanta-a` le № 13 ;
  № 2, 14, 18, 21, 23 sont nouveaux.
- **`c20.htm` № 1** et **`c20.htm` № 2** forment un seul chant (le № 1 est l'incipit, le № 2 la suite
  avec « Кахьар, кахьар, хьовзалахь… »). Ils sont ici réunis en **une seule fiche**
  (`folk-kinkhegaman-eshar-khovza-kakhar`), strophes séparées, conformément à la logique « une œuvre
  = un chant » du catalogue.
- Les retours à la ligne internes aux vers (justification de colonne HTML d'Орга) ont été ressoudés
  d'un espace ; aucune orthographe ni ponctuation n'a été modifiée (y compris `-ходу`, `Ӏай`, les
  points de suspension et les `***` de séparation, supprimés comme dans les fiches `folk-*` existantes).

---

## 3. Normalisation du palotchka

Conformément à `docs/prompt-palotchka.md` :

- Sources `1` (Орга) et `I` latin (Маршо Радио) convertis en **Ӏ (U+04C0)** dès la saisie, uniquement
  lorsqu'ils sont collés à une lettre cyrillique ; doubles `II`/`11` internes fusionnés.
- Aucun chiffre, date ni année converti (`1995 шо`, `1974 ш.`, `1998 ш.`, `2001`, numéros de page).
- **0** `1`/`I`/`l`/`|` résiduel collé au cyrillique, **0** `ӏ` (U+04CF), **0** lettre latine dans un
  champ `ce`, **0** palotchka dans un champ `ru`/`en`/`fr` pour les 16 fiches.
- `Аллах1` (texte russe, `Berzloev`) et les 3 résidus OCR de `mokhmad-mamakaev-hazachu-yoi-tulg`
  restent **inchangés** (préexistants, cf. `docs/relecture-tchetchene-cles.md`).

---

## 4. Déduplication et œuvres écartées

Contrôle effectué **avant écriture** sur les 16 candidats contre les 518 œuvres du catalogue
(`poems.json`, `songs.json`, `prose.json`, `index.json`) :

- identifiants ;
- couple `(auteur, titre ce)` normalisé ;
- premier vers normalisé (`text` et `text_preview`) ;
- similitude `SequenceMatcher` sur les 400 premiers caractères normalisés, seuil **0,88** ;
- recouvrement de séquences de 6 mots ;
- après écriture, `python3 scripts/verify_data.py` donne une sortie **strictement identique** à
  l'état d'avant le lot (`diff` vide : mêmes 10 substituts préexistants, mêmes 3 premiers vers
  partagés historiques, 0 nouveau doublon).

**Résultat : 0 doublon introduit.**

Écartés (et pourquoi) :

| Candidat | Raison |
|---|---|
| Юсупов Ильман, « Поэт » ([`31520745`](https://www.radiomarsho.com/a/31520745.html)) | **Prose** (nouvelle), pas un poème malgré le titre entre guillemets. |
| Хасаров ШаӀрани, « Стигла-гӀала* » ([`31495705`](https://www.radiomarsho.com/a/31495705.html)) | Poème exploitable, mais la page comporte des **notes lexicales de bas de page** (`СтигӀгӀала* — небоскрёб`, `Орлами — лифт`, `«40» — сорок`, `Соьлжа урам — Грозный-сити`) qui demandent une décision éditoriale sur leur conservation (renvois `*` dans le corps). **Reporté** pour ne pas tronquer le texte. |
| Хасаров ШаӀрани, « Дадин ан » | Déjà au catalogue (`khasarov-sharani-dadin-an`, lot 3). |
| Хасаров ШаӀрани, « Хьонке дахар », « Жа дажор », « ГӀура-Дада », « ХӀинца яц хьо хьалха санна… », « Самах, гӀенах… », « Лаьтте », « Юха а », « Соьлжа-гӀале », « Керла шо », « ХӀинца », « Нене » | Non retenus dans ce lot (volume) — pages lues, textes exploitables, **pistes prioritaires pour un lot 5**. |
| Гадаев Мохьмад-Салахь, « Ӏуьйре йогӀу, суьйре йоьду… » ([`30401741`](https://www.radiomarsho.com/a/gadaev-mohjmad-salahj-iujyre-yogiu-sujyre-yojdu/30401741.html)) | Variante du poème déjà présent (`gadaev-suyre-uyre-ghiyyla-yoghu`, lot 2). |
| Хатуев Ӏабдул-Хьамид, « Махкахошка » ([`29470970`](https://www.radiomarsho.com/a/29470970.html)) | Poème thématiquement très proche de « Нохчийчоь » et « Чекхъели сан йоца бӀаьсте » déjà au catalogue : à comparer avant ajout. |
| Бисултанов Апти, « Олхазаре », « Куьзганийн пардонех… », « Беттаса », « ӀиндагӀаш », « Ас хьан чӀабанех гӀайгӀа юцур ю… » | 5 pages lues : non retenues dans ce lot (volume) — **pistes pour un lot 5**. Écart de prudence : les 37 fiches Бисултанов doivent être recoupées avant ajout. |
| Нунуев Саид-Хамзат, « В дни безрассудства » ([`1623`](https://nohchalla.com/literatura/chechenskie-stihi/said-khamzat-nunuev/1623-v-dni-bezrassudstva)) | Poème long (≈ 120 vers) en russe, publié avec la date « 2002 г. ». Exploitable, mais écarté de ce lot : le fichier `poems.json` a déjà 12 fiches Нунуев et il faut vérifier qu'il ne s'agit pas d'une variante de `nunuev-v-tme-glukhikh` (même recueil, même période). **Piste documentée.** |
| `c401.htm`, `c227.htm`, `c415.htm`, `c418.htm`, `c502.htm`, `c490.htm` № 8/12–15 | Voir § 1 (corruption de colonne, OCR, hors périmètre, variantes). |

---

## 5. Points à relire par un locuteur natif

- **Titres traduits par l'assistant** (`ru`/`en`/`fr` des 16 fiches), non relus : « Дагца къамел »
  (rendu « Разговор с сердцем » / « Entretien avec le cœur »), « Гергарлонаш » (« Les liens de
  parenté »), « ЧӀирдига керла шо дустар » (« Tchirdig fête le Nouvel An »), « ТӀеман мукъамаш »
  (« Mélodies de la guerre »), et les titres de chants donnés d'après leur premier vers avec « … ».
- Graphies conservées telles quelles depuis les sources : `Тентиг ю. Ю йоккха тиллиг,`,
  `Хестийна Бабин и ЧӀирдиг.`, `Беснашна, аьзнашна`, `Церан ву шийтта кӀант воккха.`,
  `Хестийна`, `Даьккхи цо доккха гар сан дагах`, `Хиндолчу сан ирсан боккха поп`,
  `Воьрзура лулахойн бешахь`, `Мотталой хьуна суо веза`, `Ша хьелийн даьттанан мехча`,
  `Ю, аьлла, дӀахӀоьтти нехча`, `ЦӀеста к1удал` (mélange `1`/`Ӏ` de la source, rendu `кӀудал`
  — à confirmer sur l'imprimé), `Диц ма де, хьо хир ву сан деган ойла.`,
  `Йиш ялар, да виссарг` (deux orthographes dans la même page : `да виссарг` / `дависарг`,
  `Ӏуьйренин` / `Ӏуьйренан` — toutes conservées).
- La disposition en strophes des poèmes de Маршо Радио suit celle de la source ; celle des chants
  d'Орга (qui ne marque pas les strophes) est une restitution fondée sur les rimes et les refrains
  (méthode des lots précédents).

---

## 6. Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | 16 fiches ajoutées en fin d'index (518 → 534), 0 resynchronisée, 0 orpheline |
| `npm run validate-data` | ✅ données cohérentes (534/534) ; 1 avertissement **préexistant** sur `mokhmad-mamakaev-hazachu-yoi-tulg` |
| `npm run check` | ✅ `validate-data` + ESLint + Vitest **39/39** |
| `npm run format:check` | ✅ Prettier |
| `npm run build` | ✅ Vite 5.4.21, build OK (sitemap régénéré, `dist/` non committé) |
| `python3 scripts/verify_data.py` | Sortie **identique** à l'état d'avant le lot (`diff` vide) : 10 substituts préexistants, 0 nouveau ; aucun doublon |

Contrôle complémentaire : ordre des clés des fiches, présence de `text_preview.ce`, absence de
doubles espaces, de U+04CF et de caractères latins dans les champs `ce`, cohérence des langues
disponibles dans l'index — 0 écart sur les 16 fiches ajoutées.

---

## 7. Retour arrière

Aucune sauvegarde `src/data/backups/` n'est créée (convention depuis `9f05332`). Toutes les
modifications du lot tiennent dans un seul commit sur la branche courante :
`git revert <commit>` supprime les 16 fiches, la transcription de `authorName.js` et
rétablit `index.json` (534 → 518) et le total du test (534 → 518).

## Droits

Les chants folkloriques sont du domaine public dans leur langue d'origine ; ils sont cités d'après
le recueil de Ш. А. Джамбеков (1991). Les poèmes de Хьамзат Талхадов et ШаӀрани Хасаров restent la
propriété de leurs auteurs ou ayants droit ; ils sont repris avec attribution et lien vers la
source, selon la pratique du projet. À retirer sur simple demande d'un ayant droit.
