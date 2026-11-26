# Ajout de 28 œuvres : 14 poèmes de Руслан Ахтаханов, 14 chansons du folklore tchétchène

> Date d'ajout : 2026-11-25 · Branche `arena/4b5b6fdb-chechenliterature` · base `main` @ `c002667`

Ajout de **28 œuvres** transcrites depuis deux sources en ligne : **14 poèmes** (en russe) de
Руслан Ахтаханов et **14 chansons populaires** (texte tchétchène) tirées du recueil
« Нохчийн фольклор » mis en ligne par Орга.

- `src/data/poems.json` : 332 → **346**
- `src/data/songs.json` : 42 → **56**
- `src/data/prose.json` : 20 → **20** (inchangé)
- `src/data/index.json` : 394 → **422** (régénéré par `npm run generate-index`, jamais édité à la main)
- `src/data/catalog.test.js` : total attendu 394 → **422**
- `src/utils/authorName.js` : 1 nouvelle transcription EN/FR (Руслан Ахтаханов →
  *Ruslan Akhtakhanov* / *Rouslan Akhtakhanov*, selon le système du fichier : х → kh, у → ou en français)

Couverture des textes complets (`npm run validate-data`) :
`ce` 268 → **282** (+14) · `ru` 122 → **136** (+14) · `en` 57 → **57** (=) · `fr` 61 → **61** (=).

**Tous les corps de texte viennent des sources, mot pour mot. Aucune traduction de corps de texte
n'a été produite par l'assistant** (même règle que les lots du 2026-11-10 et du 2026-11-11 :
`text` ne contient que la langue originale). Seuls les **titres** `en`/`fr` (et `ru` pour les
chansons) sont des traductions de l'assistant, comme pour les fiches précédentes ; voir
« Points à relire ».

## Œuvres ajoutées

Toutes ont une source, un lien externe, un `text_preview` dans la langue du texte et des tags
pris **uniquement** dans le vocabulaire existant (vérifié par script contre l'ensemble des
tags de `poems.json`, `songs.json` et `prose.json`). `date_added` = `2026-11-25`. Les nouvelles
fiches sont ajoutées en fin de fichier.

### Руслан Ахтаханов (1953–2011) — Нохчалла.com

Poète et universitaire tchétchène, né le 14 mars 1953, membre de l'Union des écrivains de Russie
(2009), assassiné à Moscou dans la nuit du 16 novembre 2011 (notice biographique du site,
publication n° 827). Poèmes **en russe** : même format que les 55 fiches russes sans texte
tchétchène déjà présentes (`title.ce` = `null`, `text.ce` = `null`, `text.ru` seul,
`text_preview.ru`). Pas de date de composition → `year_written` = `null`.

Texte relevé sur le flux RSS de la rubrique
(`/category/literatura/chechenskie-stihi/ruslan-ahtahanov/feed`, pages 1 et 2), qui donne le
contenu complet en cyrillique non échappé, et recoupé avec l'API REST WordPress et la page de
publication n° 814.

| id | Titre (ru) | Publication | Tags |
|---|---|---|---|
| `ahtahanov-vesnya-pyanila` | Нас каждый год весна собой пьянила | [814](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/814-vesnya-pyanila) | лирика, дахар, тоска |
| `ahtahanov-goryanka` | Горянка | [815](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/815-goryanka) | лирика, нохчийчоь, безам |
| `ahtahanov-ne-paday-duhom-mama` | Не падай духом, Мама, не тужи | [816](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/816-ne-paday-duhom-mama) | нана, безам |
| `ahtahanov-mne-pogadalo-vremya` | Мне погадало время по руке… | [816](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/816-ne-paday-duhom-mama) (2ᵉ texte) | мотт, нохчийн мотт, даймохк |
| `ahtahanov-o-terek` | О Терек! Я к тебе вернусь… | [817](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/817-o-terek) | даймохк, родина, дахар |
| `ahtahanov-kluch-schastya` | Где он, счастья ключ? | [818](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/818-kluch-swastiya) | нравственность, философия, вера |
| `ahtahanov-prostite-nas` | Простите нас, родные старики | [819](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/819-prostite-nas) | ойла, память, депортаци |
| `ahtahanov-geroyu-ismailovu` | Герою России Абдулхакиму Исмаилову | [820](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/820-abdulhakimu-ismailobu) | война, зезагаш, честь |
| `ahtahanov-za-eto-mog-pogibnut-celiy-rod` | За это мог погибнуть целый род | [821](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/821-za-eto-mog-pogibnut-celiy-rod) | честь, зезагаш, память |
| `ahtahanov-chechency-seyte-znaniy-semena` | Чеченцы, сейте знаний семена | [822](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/822-chechency-seyte-znaniy-semena) | призыв, школа, дагалецамаш |
| `ahtahanov-tyazhelaya-rabota-vperedi` | Тяжелая работа впереди | [823](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/823-tyajelaya-rabota-vperedi) | стигал, нравственность, призыв |
| `ahtahanov-chechency-vozvrashchayutsya-nazad` | Чеченцы возвращаются назад | [824](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/824-chechency-vozvrashautsya-nazad) | депортаци, даймохк, вера |
| `ahtahanov-gost-sudby-poslanec` | Гость – судьбы посланец | [825](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/825-gost-sudby-poslanec) | судьба, философия, размышление |
| `ahtahanov-voina-idet-nikto-ne-vinovat` | Война идет – никто не виноват | [826](https://nohchalla.com/literatura/chechenskie-stihi/ruslan-ahtahanov/826-voina-idet-nikto-ne-vinovat) | война, нравственность, размышление |

Décisions :

- **Publication 816** : elle contient deux poèmes distincts (mètre, rimes et thème différents ;
  le second porte sur la langue tchétchène). Le second, sans titre sur le site, devient une fiche
  à part intitulée d'après son premier vers ; la `source` le précise.
- **Épigraphes / dédicaces** (820 : 2 lignes ; 821 : 3 lignes) : conservées en tête de `text.ru`,
  séparées du poème par une ligne vide, comme sur le site (en italique là-bas). Le
  `text_preview` reprend donc ces deux premières lignes.
- **Strophes** : sur le site, les strophes sont séparées par des paragraphes `&nbsp;`, perdus dans
  le flux. Elles ont été rétablies d'après l'API REST pour 814 (huitains) et 815 (quatrains), et
  par quatrains pour les autres poèmes, tous en quatrains rimés croisés ; 821 (qui enjambe les
  quatrains) reste d'un seul bloc et 819 garde son distique final.
- La signature « Руслан Ахтаханов » en fin de publication n'est pas reprise dans le texte.
- Graphie conservée telle quelle (`е` pour `ё`, `…` et ` …`, tirets `–`).

### Folklore tchétchène — Орга, « Нохчийн фольклор » (сост. Ш. А. Джамбеков, Грозный, « Книга », 1991)

Auteur : `Халкъан`, `author_years` = `Unknown`. Texte tchétchène seul (`text.ru/en/fr` = `null`).
Tags : `илли`, `халкъан` + `забаре` / `хелхар` / `йовхо` selon la section (les trois existent déjà
dans le vocabulaire). Le titre `ce` reprend le premier vers suivi de « … », sauf pour les deux
chansons titrées dans le recueil (« Нанна », « ЙоӀа а, кӀанта а локху хелхаран йиш »).

| id | Titre (ce / ru) | Section | Vers | Palotchkas normalisées |
|---|---|---|---|---|
| `folk-zabare-eshar-akh-kulturni-bolar-dicha` | Ахь культурни болар дича… / Когда ты стал держаться культурно… | [Забаре эшарш, № 1](https://orga.narod.ru/folklor/c488.htm) | 8 | 2 |
| `folk-zabare-eshar-kala-aalchi` | Кала аьлчи… / Скажешь «Кала»… | [Забаре эшарш, № 2](https://orga.narod.ru/folklor/c488.htm) | 10 | 4 |
| `folk-zabare-eshar-lekhu-lam-te-lo` | Лекху лам тӀе ло дуьллийла… / Пусть на высокую гору ляжет снег… | [Забаре эшарш, № 3](https://orga.narod.ru/folklor/c488.htm) | 4 | 3 |
| `folk-zabare-eshar-gena-dallalts` | Гена даллалц дӀагӀур ду вайшиъ, ла-ла-ла… / Мы двое уйдём подальше, ла-ла-ла… | [Забаре эшарш, № 4](https://orga.narod.ru/folklor/c488.htm) | 4 | 6 |
| `folk-zabare-eshar-khan-stoel-tekh-laettash` | Хьан стоьл тӀехь лаьтташ… / Если на твоём столе не стоит… | [Забаре эшарш, № 5](https://orga.narod.ru/folklor/c488.htm) | 32 | 9 |
| `folk-zabare-eshar-li-la-li-la-la` | Ли-ла-ли-ла-ла… | [Забаре эшарш, № 6](https://orga.narod.ru/folklor/c488.htm) | 5 | 2 |
| `folk-zabare-eshar-tskha-shi-dog-dekhira` | Цхьа ши дог дехира… / Попросили два сердца… | [Забаре эшарш, № 7](https://orga.narod.ru/folklor/c488.htm) | 4 | 2 |
| `folk-zabare-eshar-dog-dakha-tsa-dezara-zheroshka` | Дог даха ца дезара жерошка… / Не стоило влюбляться во вдов… | [Забаре эшарш, № 8](https://orga.narod.ru/folklor/c488.htm) | 8 | 4 |
| `folk-khelkharan-eshar-bettan-nur-dayna` | Беттан нур дайна, ла-ла-ла… / Пропал свет луны, ла-ла-ла… | [Хелхаран эшарш, № 1](https://orga.narod.ru/folklor/c493.htm) | 4 | 1 |
| `folk-khelkharan-eshar-kuygash-ma-khaza` | Куьйгаш ма хаза леладо… / Как красиво движутся руки… | [Хелхаран эшарш, № 3](https://orga.narod.ru/folklor/c493.htm) | 12 | — |
| `folk-khelkharan-eshar-khakha-ezara-volga` | Хахка езара сийна "Волга" хьо… / Ты — синяя «Волга», на которой бы мчаться… | [Хелхаран эшарш, № 10](https://orga.narod.ru/folklor/c493.htm) | 2 | 1 |
| `folk-khelkharan-eshar-yoya-a-kanta-a` | ЙоӀа а, кӀанта а локху хелхаран йиш / Плясовая песня девушки и юноши | [Хелхаран эшарш, № 13](https://orga.narod.ru/folklor/c493.htm) | 24 | 10 (dont 2 dans le titre) |
| `folk-ier-dakharan-eshar-san-sa-khunda-khiyza` | Сан са хӀунда хьийза-техьа… / Отчего тоскует моя душа?… | [Ӏер-дахаран хьокъехь эшарш, № 1](https://orga.narod.ru/folklor/c457.htm) | 24 | 9 |
| `folk-ier-dakharan-eshar-nanna` | Нанна / Матери | [Ӏер-дахаран хьокъехь эшарш, № 15](https://orga.narod.ru/folklor/c457.htm) | 16 | 8 |

Décisions :

- **Palotchka** : la page Орга note la palotchka par le chiffre `1` (parfois `I`). Normalisation
  à l'ingestion vers `Ӏ` (U+04C0) selon `docs/prompt-palotchka.md` : uniquement un `1/I/l/|`
  collé à une lettre cyrillique ; aucun nombre ni numéro touché ; rien dans les champs ru/en/fr.
  Le script refuse d'écrire s'il reste un substitut, un U+04CF ou une palotchka hors du `ce`.
- **Retours à la ligne parasites** : la conversion de la page coupe certains vers en deux
  (« Я / дакъаза йолу-техьа ») ; ces vers ont été recollés d'après la ponctuation et la
  numérotation du recueil.
- **Strophes** : la page met chaque vers dans un paragraphe, sans marquer les strophes. Les
  coupures ne sont ajoutées qu'aux changements de locuteur dans les dialogues (№ 5, № 13) et aux
  quatrains clairement répétés (№ 1, № 8 de c488 ; № 3 de c493) ; les autres chansons restent
  d'un seul bloc.
- **Ponctuation d'origine conservée** : tirets de dialogue `- ` (la forme la plus fréquente du
  corpus : 159 occurrences contre 24 `— `), guillemets droits `"Победа"`, `"Волга"`, points de
  suspension `...`.
- La ligne « Нанна » en tête de № 15 est le titre de la chanson dans le recueil ; elle devient le
  `title.ce` et ne figure pas dans le texte.

## Exclusions et doublons

- **Contrôle de doublons** (script, avant écriture) : aucun id, aucun premier vers et aucun
  couple (auteur, titre `ce`) déjà présent, que ce soit dans `poems.json`, `songs.json` ou
  `prose.json`. Ахтаханов n'avait aucune fiche dans le catalogue.
- **Écartés** : Хелхаран эшарш № 16 (vers « XIe, месаш » : substitut latin ambigu, à relire
  sur l'imprimé) ; № 17, 25, 26 (trop fragmentaires ou incertains dans la page) ;
  la notice biographique 827 (prose, pas une œuvre).

## Points à relire

- **Titres traduits par l'assistant** (non publiés) : titres `en`/`fr` des 14 poèmes, titres
  `ru`/`en`/`fr` des 14 chansons. Les titres `ru` des chansons sont **littéraux** et à faire
  relire par un locuteur, en particulier :
  - № 7 « Цхьа ши дог дехира… » → « Попросили два сердца… » (sens de « ши дог » incertain) ;
  - № 10 « Хахка езара сийна "Волга" хьо… » → paraphrase ;
  - « Нанна » → « Матери » (datif « к матери / pour la mère »).
- Les épigraphes de 820/821 apparaissent dans `text_preview` (premières lignes du texte).

## Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | 28 fiches ajoutées, 0 resynchronisée |
| `npm run check` | `validate-data` OK (422 œuvres ; 1 avertissement préexistant sur `mokhmad-mamakaev-hazachu-yoi-tulg`), `eslint` OK, `vitest` **39/39** |
| `npm run format:check` | OK |
| `npm run build` | OK |
| `python3 scripts/verify_data.py` | **sortie identique à celle de `main`** : ÉCHEC dû aux 10 substituts de palotchka déjà présents (voir lots précédents) ; **0 problème nouveau** |

## Retour arrière

Toutes les modifications tiennent dans un seul commit : `git revert <commit>` supprime les 28
fiches, l'entrée de `authorName.js`, et rétablit `index.json` et le total du test.
