# Prompt général — Recherche et ajout de nouvelles œuvres (pour agents IA)

> À lire **avant chaque recherche de nouvelles œuvres** à ajouter au portail.
> Complète `README.md`, `docs/prompt-palotchka.md` et les rapports `docs/ajout-*.md`.
> Dernière mise à jour : 2026-11-27 (lot 5 — cf. `docs/ajout-oeuvres-2026-11-27-lot5.md` ; **652 œuvres**).

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

## 4. OÙ CHERCHER — inventaire des sources (état au 2026-11-27)

Légende : ✅ exploitée sans doublon · 🔶 partiellement exploitée · ❌ écartée (OCR/doublons) · 🆕 utilisée récemment

### 4.1 Орга — «Нохчийн фольклор» (`https://orga.narod.ru/folklor/main.htm`)
Recueil : *Чеченский фольклор (Нохчийн фольклор)*, сост. **Ш. А. Джамбеков**, Грозный : «Книга», 1991.
Le texte utilise `1`/`I` comme palotchka ; vers balisés `<p>`. **Source la plus fiable et la plus dense.**

> **Piège `source` :** plusieurs titres de section du livre commencent par le **chiffre 1**
> («1адатийн поэзи», «1аламан хийцамаш», «1ер-дахарехь… »). Ce `1` est un **numéro de
> chapitre**, pas une palotchka : il déclenche l'audit `verify_data.py`. Écrire
> «Адатийн поэзи» (глава I), «Аламан хийцамаш» (раздел 1), etc., en conservant la
> référence réelle. Même règle pour les champs `title.ce` (cf. `c209` § 1аламан).

| Page | Section | État |
|---|---|---|
| `c5.htm` | **1адатийн поэзи** (I. ДогӀа доьхуш локхуш йолу эшарш ; II. Зуда ялор-йигарца йоьзна эшарш ; III. Говр хьовзон йиш) | 🆕 Dépouillé le 2026-11-27 (lot folklore) : **4 retenus** (I-1, I-4, II-1, II-3). Restent I-2, I-3 (variantes de I-1), II-2, II-4, III (à relire). **Section peu fournie.** |
| `c27.htm` | **Тийжамаш** (ЙоӀ нанна / ЙоӀ дена / Зуда цӀийндена / Йиша вешина / Йиша йишина / Нана кӀантана / Вешин йоӀ девешина тийжар) | 🆕 Dépouillé le 2026-11-27 : **4 retenus** (14, 13, 20, 21). **Restent № 1–12, 15–19** (complaintes très proches, incipit «Нанас йинарг яла хьан »). |
| `c209.htm` | **Халкъан тидамаш** (1аламан хийцамаш, Г1ан, Адаман дегӀан меженаш, Некъ, Хьаша, 1ожалла, Рицкъа, Къоьлла, Т1ехьийза йоӀ, Амал, Нускал, ДегӀ даккхар, Сардамаш, Сий, Ирс, Кхиболу тидамаш) | 🆕 Dépouillé le 2026-11-27 : **2 retenus** (1аламан № 2 et № 8 — les seuls avec refrain binaire). **Reste très important :** le reste de «1аламан хийцамаш» (№ 1, 3–7, 9–25) et toutes les autres rubriques — ce sont des formules d'une à deux lignes (поговорки), à traiter comme sentences rimées, pas comme chants. |
| `c521.htm` | **Советан заманан фольклор** | 🆕 Dépouillé le 2026-11-27 : **3 retenus** (№ 1 «Шерипов Асланбек », № 2 «БӀаьстенан зезагаш хазделла ма доьлху », № 4 «Къинхьегамах йиш »). **Au catalogue lot 5** (`folk-soviet-era-*`, 12 retenus courts). **Restent № 3, 5–59 filtrés doublons** : corpus chants de guerre/parti soviétique. **Plusieurs pièces chantent Staline/Lénine (№ 24–31, 42…) — non retenues lot 5 ; arbitrage éditorial à trancher.** Filtre `сталин|ленин|комсомол|пионер|колхоз|парти`. |
| `c141.htm` | **Берийн фольклор** | 🔶 XXIX. «Берийн эшарш» : **1 retenu le 2026-11-27** (№ 1 «Цицко пондар лекхира ») ; № 4 «Со воьдура, воьдура» **doublon exact** de `folk-berijn-eshar-so-voedura-voedura` (écarté) ; № 2, 3 restent. **Sections I–XXVIII** (Чехкааларш, Дагардарш, Т1ехбеттам, Вовшийн хьовзош…) : devinettes et formules de jeu — **relèvent de `prose.json`**, pas des chants. |
| `c435.htm` | Узамаш (lamentations) | ✅ 13/18 retenues (12 le 2026-11-26 lot 1 + № 14 lot 2). № 6 incomplet ; № 9, 11, 16 coquilles OCR ; № 18 écarté (variante du distique final de `folk-uzam-dakaza-ma-dala-malkh-kheta`). **Épuisée.** |
| `c454.htm` | Социале-политикан чулацам болу эшарш | ✅ 5/6 (№ 1–5, lot 1). № 6 « Бала бу сан коьртехь » : OCR cassé (`лекьар`, `гог1у`). **Épuisée.** |
| `c490.htm` | Сатиран эшарш | 🔶 № 3 (lot 1), № 1, 2, 4, 9, 10 (lot 2), № 5, 6, 7, 11 (lot 3). **Restent : № 8** (cycle « зуда йолу кӀанат » — proche de № 7), **№ 12–15** *(read lot 5 ; non retenus doublons/filtrage)* (cycle « Хьешана лекхна эшарш » — quatrains courts, variantes à évaluer soigneusement). |
| `c498.htm` | Лирикан тийжамаш | 🔶 № 3 (lot 1), № 2, 4, 5, 6 (lot 2). № 1 écarté (`TIepa`, substituts latins). **Épuisée.** |
| `c488.htm` | Забаре эшарш | ✅ № 1–8 (2026-11-25) |
| `c493.htm` | Хелхаран эшарш | 🔶 № 1, 3, 10, 13 (2026-11-25), № 2, 14, 18, 21, 23 (lot 4). № 16 « XIe, месаш » : substituts latins ambigus (à relire sur l'imprimé) ; № 17, 25, 26 fragmentaires. **Au catalogue lot 4 : № 11, 15, 26** (`folk-khelkharan-kora-dulkhal-kor`, `folk-khelkharan-khovshiyn-dovlal`, `folk-khelkharan-tohal-tarash`). **Restent à vérifier : № 4–9, 12, 19, 20, 22, 24, 25** filtrés doublons (№ 11, 15, 22, 24, 26 déjà ; № 12 `folk-khelkharan-eshar-kain-basar`, № 22 `folk-khelkharan-eshar-bakkhiichu-nakha`…) (courts, souvent des distiques à refrain « ла-ла-ла »). |
| `c457.htm` | Ӏер-дахаран хьокъехь эшарш | 🔶 № 1, 15 (2026-11-25), № 2, 7, 8, 13, 16 (lot 3). Relu intégralement le lot 4 : № 3 reprend le refrain de № 7 ; restent **№ 4, 5, 6, 9, 10, 11, 12, 14, 17–34** (longues complaintes de la fille sans frère / de la mère — comparer à № 15 « Нанна » avant ajout). |
| `c471.htm` | Безаман эшарш (chants d'amour) | 🔶 **Au catalogue : № 1, 2, 6, 7, 8, 13** (2026-11-11) **+ № 3, 22, 29** (lot 4). Restent **№ 4, 5, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 30–37** (longues complaintes où alternent les couplets de la fille et de la mère ; comparer à `folk-ier-dakharan-eshar-nanna`). |
| `c20.htm` | Къинхьегаман эшарш (chants de travail) | 🔶 **Au catalogue : № 1–2** (réunis en une fiche, lot 4), **№ 4, 6–9, 12, 14–15, 22–23** (lot 5), **№ 18 et 26** (2026-11-11). **Restent : № 3, 5, 10–11, 13, 16–17, 19–21, 24–25, 27–31**. Dans la section finale « Къинхьегамах лаьцна эшарш », ajoutés **№ 1 et 4** (lot 6) ; restent **№ 2, 3 et 5**. Les textes très courts ne sont retenus que s'ils ont un contenu distinct des variantes déjà au catalogue. |
| `c141.htm` | Берийн фольклор (берийн / аганан / берийн эшарш) | 🔶 № 1, 3, 4, 5 (аганан эшарш), № 3, 4 (берийн эшарш), comptines XXXI № 3 (lot 6) et № 6 (2026-11-11), questions-réponses XXXIII № 2 (2026-11-11). **Autres numéros à vérifier** ; distinguer les comptines autonomes des formules de jeu. |
| `c36.htm` | Сардамаш (imprécations rituelles) | 🔶 № 7 (lot 4). № 5, 6, 9, 13, 14 sont des **anecdotes en prose** encadrant des formules ; № 1–4, 8, 10–12 sont des formules d'un à quatre vers (matière possible, à valider). |
| `c447.htm` | Халкъан новеллаш | ✅ № 1, 2, 3, 4, 5, 6, 7, 8, 9 (№ 1–3 lot 4 ; № 4, 5, 7, 8 lot 2 ; № 6, 9 lot 5) |
| `c115.htm` | Contes d'animaux / fables | 🔶 « Эмкал » (Эмкал), « ХӀиллане цхьогал », « Сутаралла » (2026-11-11) |
| `c415.htm`, `c418.htm` | (autres sections) | ❌ coquilles OCR irrécupérables (`Юайчу`, `белахъ`) — 2026-11-26 |
| `c502.htm` | Сатира а, забаре а (37 histoires drôles) | ❌ hors périmètre poèmes/chants : `дийцарш` en prose (relèverait de `prose.json`) — relu lot 4 |
| `c401.htm`, `c227.htm`, autres grandes иллеш | corpus héroïque `c251`–`c421` | ❌/⏸ **corruption de colonne uCoz** : l'initiale du premier mot de chaque vers est rejetée sur la ligne précédente (« Цlонтарой ва Дада » au lieu de « цlонтарой ва Дада »). Restitution impossible sans l'imprimé ; à traiter avec relecture — constat lot 4 |

**Sections d'Orga relevées le 2026-11-27 et écartées (prose, devinettes ou proverbes) :**

| Page | Section | État |
|---|---|---|
| `c3.htm` | Халкъан исбаьхьаллин хазна | ❌ prose — proverbes en development → `prose.json` |
| `c8.htm` | Мифаш (Акхаройн дай, Акхаройн Ӏу, Турс, Пхьармат, Г1амашкин аьлда, Хьуьнан йоӀ…) | 🔶 prose → `prose.json` ; **№ 2 `folk-myth-2-akkharoyn-u`, № 7 `folk-myth-7-khunan-yo` (lot 5)** ; reste |
| `c36.htm` | Сардамаш (imprécations rituelles) | 🔶 № 7 au catalogue (lot 4) ; № 1–4, 8, 10–12 = formules d'un à quatre vers (matière possible) ; № 5, 6, 9, 13, 14 = **anecdotes en prose** encadrant des formules |
| `c39.htm` | Наьрт-аьрстхойн дийцарш | ❌ prose — contes |
| `c83.htm` | Хьадисаш (легенды) | ❌ prose — récits |
| `c97.htm` | Туьйранаш (Инзаре тамашийначу х1умнех лаьцна) | ❌ prose — récits épiques |
| `c127.htm` | Ӏер-дахаран хьокъехь долу туьйранаш | ❌ prose — récits épiques |
| `c162.htm` | Шира дийцарш (преданеш) | ❌ prose — récits épiques |
| `c190.htm` | Кицанаш | ❌ **proverbes d'une seule ligne** avec références de collecte (НХК-14, АДШ-1224…) — hors périmètre « poèmes et chants » ; éventuellement `prose.json` |
| `c202.htm` | Х1етал-металш | ❌ **énigmes** (« Х1етал-метал хаийла хьуна: …? ») — hors périmètre ; la section « Халкъан тидамаш » recoupe `c209` |
| `c516.htm` | Аларш | ❌ proverbes en prose avec nota bene → `prose.json` |
| `c549.htm` | Билгалдаккхар | ❌ prose — essai detail anthropologique |

### 4.2 Маршо Радио — онлайн-библиотека (`https://www.radiomarsho.com/`)
Bibliothèque audio de poèmes tchétchènes, avec texte intégral par page (`/a/<id>.html`).
Pages d'index par auteur : `/z/<id>` (ex. [`z/17581`](https://www.radiomarsho.com/z/17581) pour
Сулейманов Ахьмад). Publié en juin 2016 pour les lots classiques, nouvelles pièces en 2017–2020,
liste complète dans la rubrique **ОНЛАЙН БИБЛИОТЕКА** (`/z/17538`).

- ✅ Dépouillé le 2026-11-26 (lot 1) : œuvres de Ӏаьрби Мамакаев, Гадаев, Сулейманов, Дикаев,
  Сулаев, Саидов Билал, Сатуев, Хатуев, Абдулаев, Гайтукаева, Цуруев, Рашидов, Юсупов, Гацаев,
  Петирова (pages 17556, 17567, 17570, 19889, 20466, 20468 et sous-pages).
- 🔶 Dépouillé le 2026-11-26 (lot 2) : [`z/17581`](https://www.radiomarsho.com/z/17581) (Сулейманов)
  → « Дахаран генаш », « Нене », « Борз ю угӀуш », « Кхин цкъа а хьоьжур вац… » ajoutés ;
  « Шовда » déjà au catalogue ; « Шуьнехь Дош (Дагаев Валиде) » écarté (attribution ambiguë).
  [`30401849`](https://www.radiomarsho.com/a/30401849.html) (Гадаев) → « Суьйре, Ӏуьйре гӀийла йогӀу… ».
- 🆕 Dépouillé le 2026-11-26 (lot 4) : pages `p=1`, `p=2` et `p=3` de
  [`z/17538`](https://www.radiomarsho.com/z/17538) (publications 2021–2022) et toutes les pages
  listées ci-dessus. Retenus : « Весет » et « Дагца къамел » de **Хьамзат Талхадов** (nouvel
  auteur → `AUTHOR_NAMES`), et 4 poèmes de **ШаӀрани Хасаров** (« ТӀеман мукъамаш », « Лулахойн
  бешахь », « ЧӀирдига керла шо дустар », « Гергарлонаш »). Écartés : « Поэт » d'Ильман Юсупов
  (prose), « Стигла-гӀала* » (notes lexicales de bas de page à arbitrer), « Ӏуьйре йогӀу, суьйре
  йоьду… » de Гадаев (variante de `gadaev-suyre-uyre-ghiyyla-yoghu`), « Махкахошка » de Хатуев
  (à comparer), 5 pages d'Апти Бисултанов (recoupement des 37 fiches à faire).
- 🆕 Dépouillé le 2026-11-26 (lot 6) : « Жа дажор » de ШаӀрани Хасаров (`31495709`) et « ЙоьӀан доӀа » de Хатуев (`29472792`) ajoutés après contrôle de doublons. « Хьонке дахар » (`31495720`) lu mais reporté : plusieurs graphies et coupures de la source demandent une relecture native.
- **Restent à dépouiller** : huit autres pages de ШаӀрани Хасаров (`31495705`, `31041954`, `31041956`, `31041960`, `31038870`, `31038867`, `31034408`), les pages d'Апти Бисултанов (`30662617`, `28980904`, `27387696`, `27368820`), « Юха а… » (`30451430`) de СаьӀид Гацаев. (Ajoutés lot 2 : Бадуев СаӀид « Ӏимран » `28362049`, Бексултанов Муса « Цхьа некъ » `31759190` et « Иэсан биста йисте » `31759199`, Оспанов Къосам « Йист » `28125878`, Айдамиров Абузар « Со хьуна йоьгӀна яц… » `28125870`, Сулейманов Юсуп « Нохчийчоьне » `30875919`, Хасаров ШаӀрани « Нене » `31034404`. Ajoutés lot 3 : Гацаев СаьӀид « Чурт (шира легенда) » `31804907`, Хасаров ШаӀрани « ГӀура-Дада » `31495714`, Юсупов Ильман « Поэт » `31520745` ; plus sur `abrek.org` Кагерманов Докка « Харачойн Зеламха » `2301`, et sur `nohchalla.com` Мусаев Зелимхан `540`, Дагаев Мансур `671`, Берийн фольклор `41` [4 эшарш], « Адамалла » `1821`, Нунуев « Поиск бессмертия » `1560` et « Сердце матери » `1585`.)
- 🆕 Dépouillé le 2026-11-26 (lot 3) : première page de [`z/17538`](https://www.radiomarsho.com/z/17538)
  ( publications 2022 ) — 3 poèmes d'Ильман Юсупов (`29243176`, `31759163`, `31759181`),
  « Дадин ан » de ШаӀрани Хасаров (`31495711`), « Сан нохчийн йоӀ » de Шаид Рашидов
  (`31804911`), « ГӀалаташ » de Юсуп Яралиев (`31804934`). Écartés : « ДӀаяла » de
  Мамакаев (`31804920`), doublon exact de `mokhmad-mamakaev-dyayala` ; « ДоӀа » de
  Мохьмад Сулаев (`31804926`), attribution ambiguë avec Магомет Сулаев (déjà au catalogue) ;
  `31804917` (***) et `31804931` (***), sans titre.
- **Restent à dépouiller** : les pages `p=4` et suivantes de `/z/17538`, et les pages d'index
  des autres poètes (ex. [`z/17581`](https://www.radiomarsho.com/z/17581) pour Сулейманов,
  dorénavant épuisée côté poèmes) ; les publications 2019–2020 non lues de la rubrique.

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

### 4.7 Ministère de l'éducation et des sciences de Tchétchénie — «Материалы на чеченском языке» (`https://mon95.ru/press-center/materialy-na-chechenskom-yazyke`)
Site `mon95.ru`. **Nouvelle source lot 4** : prose d'auteur tchétchène en tchétchène, essais.
- Utilisé : **Гайрбекова Маряьм «Нохчийн мотт – сан дозалла!»**
  (`.../gairbekova-m-nokhchiin-mott-san-dozalla`, → `gairbekova-nohchiyn-mott-san-dozalla`,
  **nouveau auteur** `Гайрбекова Маряьм` → `AUTHOR_NAMES`). `1`/`I`→`Ӏ`, `–`,`…`,`«»`, citations
  (`К.Паустовский`,`Л.Н.Толстой`,`Кунта-Хьажас`) conservées. `type=prose`.
- À explorer : autres pièces de la rubrique `Материалы на чеченском языке` (prose + poésie nommés).

### 4.6 Autres sources déjà mobilisées (garder en tête)
- `umarlavina.narod.ru` — site perso d'**Умар Яричев** (poèmes ce/ru) — utilisé 2026-11-11.
- `groznycity.ru` — « Чеченская народная поэзия XIX–XX вв. » (илли en russe) — utilisé 2026-10-13.
- `maxima-library.org` — « Чеченская литература » (**Магомет Сулаев**, poèmes russes) — consulté 2026-11.
- `dahar.ucoz.net` — форум «Дахар» (Сулейманов « Шовда », suleimanov-shovda).
- `poemhunter.com` — traductions EN de poèmes tchétchènes (Ильман Юсупов, Искандер Керимов…).
- `infourok.ru` — pages isolées (ex. Мамакаев « Нана »).
- `daymohk-gazet.ru` — article sur « Шелара иллиалархо » (2026-11).
- `chelibri.ru` — plateforme de lecture en tchétchène (`writings/1..14` : Хабаев Исмаил, Вахид Аюбов, Ибрагимов Лёма, Петимат Петирова, folklore ; exploité le 2026-11-27 lot 2 pour `1, 5, 7, 12, 13`).
- `checheninfo.ru` / `abrek.org` — « Зеламха (шира илли) » (exploité le 2026-11-27 lot 2).
- `nasha-shkola.info` — rubrique littéraire avec poèmes pour enfants de Румиса Мамакаева (`6185-mamakaeva-rumisa`, exploité partiellement le 2026-11-27 lot 2).
- `nohchalla.com` (catégorie `115` *Дух вайнахов в мифах и легендах*, post `41` *Берийн фольклор*, post `1821` *Вахи оьздингаллех лаьцна дийцарш*, poètes `Алла Дудаева`, `Зелимхан Мусаев`, `Мансур Дагаев`) — exploité partiellement le 2026-11-27 lot 2 ; il reste ~16 légendes et de nombreux poèmes.

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
