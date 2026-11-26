# Lot d'œuvres ajoutées le 2026-11-26 (lot 2) : 5 poèmes d'auteurs + 10 chants folkloriques

> Date d'ajout : 2026-11-26 · Branche `arena/199dfc3b-chechenliterature` · base `main` @ `c7f1235`
> **Lot 2 du 2026-11-26** — le rapport `docs/ajout-oeuvres-2026-11-26.md` décrit le premier lot
> du même jour (66 œuvres, déjà fusionné dans `main` via PR #14). Ce document décrit le second lot.

Ajout de **15 œuvres** d'auteurs tchétchènes et du folklore tchétchène :
**5 poèmes** (dans `src/data/poems.json`) et **10 chants folkloriques** (`src/data/songs.json`).

- `src/data/poems.json` : 390 → **395**
- `src/data/songs.json` : 78 → **88**
- `src/data/prose.json` : 20 → **20** (inchangé)
- `src/data/index.json` : 488 → **503** (régénéré par `npm run generate-index`, jamais édité à la main)
- `src/data/catalog.test.js` : total attendu 488 → **503**
- `src/utils/authorName.js` : **aucune nouvelle transcription** — Ахмад Сулейманов,
  Мохьмад-Салахь Гадаев et Халкъан sont déjà dans `AUTHOR_NAMES`

Couverture des textes pleins (`npm run validate-data`) :
`ce` 348 → **363** (+15, tous les textes sont en tchétchène) · `ru` 136 → 136 · `en` 57 → 57 · `fr` 61 → 61.

**Tous les corps de texte viennent des sources, mot pour mot. Aucune traduction de corps de texte
n'a été produite par l'assistant.** Seuls les **titres** `ru`/`en`/`fr` sont des traductions de
l'assistant (littérales ou descriptives), non relues — voir « Points à relire ».

---

## 1. Sources dépouillées

1. **Маршо Радио — онлайн-библиотека** (`https://www.radiomarsho.com/`), pages d'auteurs et
   pages d'œuvres :
   - [Сулейманов Ахьмад — index des œuvres](https://www.radiomarsho.com/z/17581) : 5 nouvelles
     pages dépouillées (`30544145`, `30544138`, `28152808`, `28152748`, `30544139`) ;
   - [Гадаев Мохьмад-Салахь. Суьйре, Ӏуьйре гӀийла йогӀу…](https://www.radiomarsho.com/a/30401849.html)
     (2026-01-28).
2. **Орга — «Нохчийн фольклор»** (`https://orga.narod.ru/folklor/main.htm`) :
   - [Узамаш (`c435.htm`)](https://orga.narod.ru/folklor/c435.htm) — № 14 ;
   - [Лирикан тийжамаш (`c498.htm`)](https://orga.narod.ru/folklor/c498.htm) — № 2, 4, 5, 6 ;
   - [Сатиран эшарш (`c490.htm`)](https://orga.narod.ru/folklor/c490.htm) — № 1, 2, 4, 9, 10.
   Édition *Чеченский фольклор (Нохчийн фольклор)*, compilée par **Ш. А. Джамбеков**,
   Grozny : «Книга», 1991.

---

## 2. Liste des 15 œuvres ajoutées

### A. Poèmes (`src/data/poems.json` — 5 œuvres)

| # | `id` | Auteur | Titre (`ce`) | Titre (`fr`) | Palotchkas |
|---|---|---|---|---|---|
| 1 | `suleimanov-daharan-genash` | Ахмад Сулейманов (1922–1995) | Дахаран генаш (поэма) | Les branches de la vie | 41 |
| 2 | `suleimanov-nene` | Ахмад Сулейманов (1922–1995) | Нене | À ma mère | 8 |
| 3 | `suleimanov-borz-yu-ugush` | Ахмад Сулейманов (1922–1995) | Борз ю угӀуш… | Le loup hurle… | 34 |
| 4 | `suleimanov-kkhin-tskha-a-khoezhur` | Ахмад Сулейманов (1922–1995) | Кхин цкъа а хьоьжур вац со бӀаьсте яре… | Je ne verrai plus jamais venir le printemps… | 17 |
| 5 | `gadaev-suyre-uyre-giyla-yogu` | Мохьмад-Салахь Гадаев (1909–1972) | Суьйре, Ӏуьйре гӀийла йогӀу… | Le soir, le matin vient lentement… | 27 |

Sources : Маршо Радио — `30544145.html` (охан-бутт 09, 2020), `30544138.html` (охан-бутт 09, 2020),
`28152808.html` (гӀуран-бутт 02, 2016), `28152748.html` (гӀуран-бутт 02, 2016), `30401849.html` (дечкен-бутт 28, 2020).
`author_years` identiques aux fiches existantes de ces auteurs ; `year_written` = `null`
(les pages donnent la date de mise en ligne, pas la date de composition).

### B. Chants folkloriques (`src/data/songs.json` — 10 œuvres)

Auteur : `Халкъан`, `author_years` = `Unknown`, `year_written` = `null`, texte tchétchène seul.

| # | `id` | Titre (`ce`) | Section du recueil | Titre (`fr`) | Palotchkas |
|---|---|---|---|---|---|
| 6 | `folk-uzam-khara-nazma-olu-sha` | ХӀара назма олу ша… | Узамаш, № 14 | Il récite cette nazm… | 18 |
| 7 | `folk-tiyzham-duene-dezash-khyo` | Дуьне дезаш хьоьх дисча… | Лирикан тийжамаш, № 2 | Quand le monde te reste cher… | 2 |
| 8 | `folk-tiyzham-san-ken-daka` | Сан къен дакъа… | Лирикан тийжамаш, № 4 | Mon pauvre lot… | 7 |
| 9 | `folk-tiyzham-suyranna-ma-yelkha` | Суьйранна ма елха… | Лирикан тийжамаш, № 5 | Ne pleure pas le soir… | 9 |
| 10 | `folk-tiyzham-kho-tsomgush-vuy` | Хьо цомгуш вуй тхайна хиънехь… | Лирикан тийжамаш, № 6 | Si nous apprenions que tu es malade… | 10 |
| 11 | `folk-satiran-eshar-tskha-miska-stag` | Цхьа миска стаг… | Сатиран эшарш, № 1 | Un pauvre homme… | 3 |
| 12 | `folk-satiran-eshar-gatan-khechin` | Гатан хечин маьӀгаш ю… | Сатиран эшарш, № 2 | Un pantalon de toile… | 4 |
| 13 | `folk-satiran-eshar-korekh-kor` | Корехь кор ма ца оьшу… | Сатиран эшарш, № 4 | Nul besoin de porte derrière une porte… | 11 |
| 14 | `folk-satiran-eshar-basaro-tsiyina` | Басаро цӀийина… | Сатиран эшарш, № 9 | S'étant fardée les yeux… | 10 |
| 15 | `folk-satiran-eshar-as-tsa-dinar` | Ас ца динарг хьан дер олий… | Сатиран эшарш, № 10 | Sur un vantard… | 6 |

**Total : 207 occurrences de `Ӏ` (U+04C0)** dans les 15 entrées (titres, textes, previews, tags).

---

## 3. Normalisation du palotchka et de l'encodage

Conformément à `docs/prompt-palotchka.md` et aux conventions du projet :

- Les substituts des sources (`1`, `I` latin) ont été convertis en **palotchka `Ӏ` (U+04C0)** dès
  la transcription ; doubles palotchkas internes fusionnés (ex. `НеIIий` → `НеӀий`, « Дахаран генаш »).
- **Aucun `1`/`I`/`l`/`|` résiduel collé au cyrillique** ; **aucun U+04CF** (`ӏ`) nulle part ;
  **aucun chiffre ni caractère latin** dans les champs `ce` (`title`, `text`, `text_preview`,
  `tags`, `author`) ; **aucune palotchka** dans les champs `ru`/`en`/`fr`.
  (`source` contient de la palotchka — ex. « хӀоттийнарг Ш. А. Джамбеков » — comme les 124 fiches
  déjà présentes : c'est la graphie du recueil, conservée.)
- Homoglyphes latins éventuels de l'OCR éliminés à la saisie (`цхьaлхха` « Борз ю угӀуш » écrit
  entièrement en cyrillique + `Ӏ`).
- Ponctuation et orthographe des sources conservées telles quelles (`...`, tirets, `бацалахь`,
  `хьоьжур`, `Оьшариг`, « дари-да-да-да »…). La ligne « Пислакх йолчу, цо кхайкхахь а , » (espace
  parasite avant la virgule dans la source) est restituée « а, » — espace seule corrigée.
- Sur `orga.narod.ru`, les vers sont balisés `<p>` avec des retours internes de justification :
  les coupures douces intra-vers ont été ressoudées, comme pour les lots précédents.
- Les lignes « ДАХАРАН ГЕНАШ », « (Поэма) », « Сулейманов Ахьмад » et les puces « * » / « *** »
  séparateurs de strophes de la page source : titre et nom d'auteur non repris dans le texte ;
  les sauts de strophe sont traduits en lignes vides (alternance strophes/refrains conservée).

## 4. Déduplication et œuvres écartées

Contrôle effectué **avant écriture** (ids, couple `(auteur, titre ce)` normalisé, premier vers,
similarité `SequenceMatcher` sur les textes `ce`, et recoupement sémantique avec les catalogues
`ru`/`en`/`fr` d'un même auteur) :

- **`suleimanov-shovda` — « Шовда » (Маршо Радио, 30544139.html)** : **écarté** — déjà présent dans
  le catalogue (`suleimanov-shovda`, 2026-08-29, texte identique à l'espace près, source
  `dahar.ucoz.net`). Confirmé par comparaison complète des deux textes.
- **Гадаев — «Суьйре, Ӏуьйре гӀийла йогӀу…»** : vérifié distinct de `gadaev-uyre-yogu-suyre-yodu`
  (« Ӏуьйре йогӀу, суьйре йоьду… », 2026-11-26) — textes entièrement différents.
- **Узамаш № 18 — «Да вала хьан дела1, малх кхета хьо дуьне…»** : **écarté** — partage son distique
  final (« Дагна дукха мел везнарг… Къахьделла хьо дуьне. ») avec `folk-uzam-dakaza-ma-dala-malkh-kheta`
  et la famille de refrains de `folk-uzam-davala-khan-dela` ; doublon de nature évident. № 14,
  tout autre, a été retenu.
- Homonymies vérifiées (œuvres distinctes) : `suleimanov-nene` ≠ `kasumov-nene-nazma` ≠
  `yandarbiev-nene` ; `folk-satiran-eshar-gatan-khechin` / `-basaro-tsiyina` ≠ `bisultanov-caevzarg`
  (faux positifs de la comparaison de premier vers : numéro « 1. » et ponctuation).
- Suites (`verify_data.py`) : aucun id dupliqué, aucun couple (auteur, titre `ce`) dupliqué,
  aucun texte `ce` identique ni quasi-identique impliquant une des 15 nouvelles fiches.

## 5. Points à relire par un locuteur natif

Conservé tel quel depuis les sources, signalé pour relecture éventuelle :

- `suleimanov-daharan-genash` : `НеӀий, Неккъий ца харжарна` (normalisation mécanique `II` → `Ӏ` ;
  lecture « portes et chemins » — à confirmer) ; `югӀу гӀаланаш` ; `Пислакх йолчу` ; `БӀе
  цхьоллагӀчо-м велхавой` ; `Аьрзо хьалагӀаьттира` (аорiste).
- `folk-uzam-khara-nazma-olu-sha` : `Оьшариг тӀетоьхна` (lecture incertaine dans la source) ;
  `Рузбана маьждиге(хь)` (2×) ; `Ша набахтехь ма виси` ; « салтин » (повелительно « опираясь » ?).
  Référence prisonnière / назма (poème religieux) : genre à confirmer par un bilingue.
- `folk-tiyzham-kho-tsomgush-vuy` : nom propre `Харван` (défunt ?) ; `Хьаннахех ка йитича ахьа?`.
- `folk-tiyzham-san-ken-daka` : `деца йинарг` / `яларг` (refrain d'origine conservés).
- `folk-satiran-eshar-korekh-kor` : `Корехь кор ма ца оьшу` (« кор » = porte ou fenêtre ? lecture littérale conservée).
- `folk-satiran-eshar-as-tsa-dinar` : `Кулакийн кӀорни делара хьо` (insulte d'époque soviétique, conservée).
- **Titres traduits par l'assistant** (`ru`/`en`/`fr`) — littéraux ou descriptifs, non relus :
  tous les 15 titres traduits, dont « Кхин цкъа а хьоьжур вац со бӀаьсте яре… » (ru « Больше ни разу
  не гляну я… », interprétation), « Нене » (ru « Матери », datif), « Басаро цӀийина… » (ru
  « Подкрасив глаза косметикой… »), « Ас ца динарг хьан дер олий… » (ru « О том, кто
  похваляется… », titre descriptif), « Корехь кор ма ца оьшу… » (ru « Дверь в двери не нужна… »).

## 6. Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | 15 fiches ajoutées en fin d'index (488 → 503), 0 resynchronisée |
| `npm run validate-data` | OK (503 œuvres ; 1 avertissement **préexistant** `mokhmad-mamakaev-hazachu-yoi-tulg`) |
| `npm run check` (validate-data + eslint + vitest) | OK — **39/39 tests** |
| `npm run format:check` | OK |
| `npm run build` | OK |
| `python3 scripts/verify_data.py` | **sortie identique à `main`** : 10 substituts résiduels **préexistants** (6 `berzloev-*` en `ru`, 3 `mokhmad-mamakaev-hazachu-yoi-tulg`, 1 fiche index) ; **0 nouveau** ; aucun doublon détecté |

## 7. Retour arrière

`git revert <commit>` supprime les 15 fiches et rétablit `poems.json` (395→390), `songs.json`
(88→78), `index.json` (503→488) et `catalog.test.js`.

## 8. Où aller ensuite (sources largement exploitées / restantes)

Voir **`docs/prompt-recherche-oeuvres.md`** : état d'avancement section par section des sources
(Маршо Радио, Орга « Нохчийн фольклор », Waynakh Online, Нохчалла.com…) et prompt général pour
les agents IA chargés des prochaines recherches.
