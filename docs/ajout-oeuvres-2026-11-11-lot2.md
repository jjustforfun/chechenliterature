# Ajout de 46 œuvres (lot 2) : folklore tchétchène, Муса Гешаев, Адам Ахматукаев, Раиса Ахматова, deux textes ce + fr

> Date d'ajout : 2026-11-11 · Branche `arena/43a92b6c-chechenliterature` · base `main` @ `9daca08`

Ajout de **46 œuvres** d'auteurs tchétchènes ou du folklore tchétchène, transcrites depuis
des sources en ligne : **34 poèmes**, **8 chansons**, **4 textes de prose courte**.
**4 fiches existantes** ont en outre été complétées : traductions publiées (français, russe)
pour deux d'entre elles, texte tchétchène d'origine pour les deux autres.

- `src/data/poems.json` : 298 → **332**
- `src/data/songs.json` : 34 → **42**
- `src/data/prose.json` : 16 → **20**
- `src/data/index.json` : 348 → **394** (régénéré par `npm run generate-index`, jamais édité à la main)
- `src/data/catalog.test.js` : total attendu 348 → **394**
- `src/utils/authorName.js` : 1 nouvelle transcription EN/FR (Ӏабдул-Хьамид Хатуев)

Couverture des textes complets (`npm run validate-data`) :
`ce` 241 → **268** (+27) · `ru` 100 → **122** (+22) · `en` 57 → **57** (=) · `fr` 57 → **61** (+4).

Détail : nouvelles fiches `ce` +25, `ru` +21, `fr` +2 ; fiches existantes complétées `ce` +2,
`ru` +1, `fr` +2. **Tous les corps de texte viennent de sources ; aucune traduction de corps de
texte n'a été produite par l'assistant dans ce lot.** Aucun texte anglais nouveau n'a pu être
ajouté (voir « Pistes »).

## Instructions lues avant modification

`README.md`, `docs/prompt-palotchka.md`, `docs/relecture-tchetchene-cles.md`, les cinq
rapports `docs/ajout-*.md`, `public/llms.txt`, `.github/workflows/ci.yml`, les quatre scripts
de `scripts/`, `src/data/catalog.js` (+ tests), `src/data/integrity.test.js`,
`src/utils/authorName.js`, `contentLanguage.js`, `getTranslatedField.js`, `searchUtils.js`,
`pageMeta.js`, `src/pages/PoemDetail.jsx`, `src/App.jsx`.

**Aucun `AGENTS.md` ni `CLAUDE.md` n'existe dans le dépôt** (arbre de travail vérifié avec
`find` ; le clone étant superficiel, l'historique n'a pas pu être relu, mais les rapports
précédents font le même constat). Les consignes suivies sont donc celles du README, de
`docs/prompt-palotchka.md` et des rapports précédents.

## Œuvres ajoutées

Toutes ont une source, un lien externe, un `text_preview` par langue disponible et des tags
pris **uniquement** dans le vocabulaire existant. `date_added` = `2026-11-11`. Les nouvelles
fiches sont ajoutées en fin de fichier.

### Folklore tchétchène — Орга, « Нохчийн фольклор » (сост. Ш. А. Джамбеков, Грозный, « Книга », 1991)

Auteur : `Халкъан`. Texte tchétchène seul.

| id | Titre | Type | Section de l'ouvrage | Palotchkas normalisées |
|---|---|---|---|---|
| `folk-tqa-so-mukha-kant-kheta-shuna` | Ткъа со муха кӀант хета шуна? / А я вам каким молодцем кажусь? | prose | [Халкъан новеллаш, № 4](https://orga.narod.ru/folklor/c447.htm#p449) | 26 |
| `folk-den-veset` | Ден весет / Завещание отца | prose | [Халкъан новеллаш, № 5](https://orga.narod.ru/folklor/c447.htm#p450_1) | 31 |
| `folk-niysa-khel` | Нийса кхел / Справедливый суд | prose | [Халкъан новеллаш, № 7](https://orga.narod.ru/folklor/c447.htm#p451) | 19 |
| `folk-khekale-khusamnana` | Хьекъале хӀусамнана / Умная хозяйка | prose | [Халкъан новеллаш, № 8](https://orga.narod.ru/folklor/c447.htm#p452) | 71 |
| `folk-aganan-eshar-duyshush-ghoza-diysharash` | Дуьйшуш, гӀоза дийшараш… (berceuse) | chanson | [Аганан эшарш, № 1](https://orga.narod.ru/folklor/c141.htm#p153) | 8 |
| `folk-aganan-eshar-ma-khaza-yu-buysa` | Ма хаза ю буьйса… (berceuse) | chanson | [Аганан эшарш, № 3](https://orga.narod.ru/folklor/c141.htm#p153) | 9 |
| `folk-aganan-eshar-khaza-yina-mamas` | Хаза йина мамас… (berceuse) | chanson | [Аганан эшарш, № 5](https://orga.narod.ru/folklor/c141.htm#p153) | — |
| `folk-berijn-eshar-tskhogalan-yish` | Цхьогалан йиш / Песня лисы | chanson | [Берийн эшарш, № 3](https://orga.narod.ru/folklor/c141.htm#p152) | 6 |
| `folk-berijn-eshar-so-voedura-voedura` | Со воьдура, воьдура… | chanson | [Берийн эшарш, № 4](https://orga.narod.ru/folklor/c141.htm#p152) | 7 |
| `folk-kinkhegaman-eshar-kuyra-kuyra-erzalakh` | Куьйра, куьйра, ерзалахь… (chant du barattage) | chanson | [Къинхьегаман эшарш, № 18](https://orga.narod.ru/folklor/c20.htm#p23_1) | — |
| `folk-kinkhegaman-eshar-mangal-ira-tur-khiliy` | Мангал, ира тур хилий… (chant de fauchage) | chanson | [Къинхьегаман эшарш, № 26](https://orga.narod.ru/folklor/c20.htm#p24_3) | 1 |
| `folk-ber-khostush-tuyra-tuyra-dakhana-bokhu` | Туьйра, туьйра дахана боху… (comptine) | poème | [Берийн фольклор, XXXI, № 6](https://orga.narod.ru/folklor/c141.htm#p155) | 2 |
| `folk-khettarsh-zhoepash-tsitsig-mitsig` | Цициг-мициг, хьо мичахь дара? (questions-réponses) | poème | [Берийн фольклор, XXXIII, № 2](https://orga.narod.ru/folklor/c141.htm) | 11 |

Conventions reprises du lot précédent : `author_years` = `"Unknown"` pour les chansons et
comptines, `null` pour la prose ; tags `илли` / `халкъан` / `берийн литература` / `бераш` /
`дийцар`.

### Муса Гешаев (1940–2014) — poèmes en russe

| id | Titre | Recueil | Source |
|---|---|---|---|
| `geshaev-ya-syn-tvoy` | Я сын твой, милая Чечня… | « Очередь за счастьем » (Грозный, 1989) | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p27) |
| `geshaev-gorzhus-obychayami` | Горжусь обычаями предков… | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p28) |
| `geshaev-pesn-o-krae-moem` | Песнь о крае моем | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p30) |
| `geshaev-i-kamni-znali` | И камни знали то, что я не знал… | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p35) |
| `geshaev-pesn-ob-ozere-kezenoy-am` | Песнь об озере Кезеной-Ам | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p36) |
| `geshaev-chernye-dni` | Черные дни | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p61) |
| `geshaev-makhmudu` | Махмуду | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p185) |
| `geshaev-emigratsiya` | Эмиграция | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_1.htm#p204) |
| `geshaev-milaya-chechnya` | Милая Чечня | « Ожерелье желаний » (Москва, 1996) | [Орга](https://orga.narod.ru/geshaev/geshaev_2.htm#p109) |
| `geshaev-ya-nenavizhu-slukhi-lozh` | Я ненавижу слухи, ложь… | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_2.htm#p148) |
| `geshaev-kogda-plachet-zemlya` | Когда плачет земля | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_2.htm#p149) |
| `geshaev-rodnik` | Родник | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_2.htm#p241) |
| `geshaev-rechka-detstva` | Речка детства | idem | [Орга](https://orga.narod.ru/geshaev/geshaev_2.htm#p242) |

### Textes tchétchènes avec traduction française publiée — Waynakh Online

| id | Titre | Auteur | Type | Langues | Source | Palotchkas normalisées |
|---|---|---|---|---|---|---|
| `bisultanov-guyre` | Гуьйре / L’automne | Апти Бисултанов | poème | ce, fr | [Waynakh Online](http://www.waynakh.com/fr/2014/04/25/gouyre-l-automne-xhouseyn-betelgereev/) | 20 |
| `khatuev-nokhchiycho` | Нохчийчоь / Ma Tchétchénie… | Ӏабдул-Хьамид Хатуев (**nouvel auteur**) | chanson | ce, fr | [Waynakh Online](http://www.waynakh.com/fr/2014/04/22/noxciyco-ma-tchetchenie-ali-dimaev/) | 17 |

Traductions françaises de **Kissa Gatsaeva**, créditée dans `source`. « Гуьйре » est chanté
par Хусейн Бетельгериев, « Нохчийчоь » par Али Димаев.

> **Rectification** : les rapports du 2026-10-14 et du 2026-11-11 (lot 1) indiquaient que ces
> deux pages ne contenaient que le texte tchétchène. C'est inexact : elles donnent la
> translittération latine, le texte cyrillique **et** une traduction française complète.

### Адам Ахматукаев — poèmes tchétchènes, Нохчалла.com

Texte tchétchène seul. Les pages ne donnent que le texte et le nom de l'auteur (ni date, ni
recueil) : `year_written` et `author_years` restent `null` et `source` vaut « Нохчалла.com »,
comme pour les fiches de l'auteur déjà en base.

| id | Titre | Page | Forme | Palotchkas normalisées |
|---|---|---|---|---|
| `ahmatukaev-khachalush-yu` | Кхачалуш ю / Угасаешь | [n° 841](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/841-khachalush-u) | 12 vers, 3 quatrains | 13 |
| `ahmatukaev-hina-huna` | Хиъна хьуна / Тебе стало ясно | [n° 840](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/840-hina-huna) | 8 vers, 2 quatrains | 8 |
| `ahmatukaev-ala-du-san` | Ала ду сан / Мне есть что сказать | [n° 839](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/839-ala-du-san) | 16 vers, 4 quatrains | 11 |
| `ahmatukaev-tskhalla` | Цхьалла / Одиночество | [n° 838](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/838-challa) | 28 vers, 7 quatrains | 16 |
| `ahmatukaev-vayn-ghillakh` | Вайн гӀиллакх / Наш этикет | [n° 837](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/837-vayn-g1illakh) | 28 vers, 7 quatrains | 26 |
| `ahmatukaev-yilbaziyn-bo` | Йилбазийн бӀо / Дьявольская рать | [n° 834](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/834-yilbapiyn-b1o) | 30 vers, 5 sizains | 30 |
| `ahmatukaev-yukha-a-denlur-vu` | Юха а денлур ву / Снова оживёшь | [n° 833](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/833-uha-a-denlur-vu) | 24 vers, 6 quatrains | 16 |
| `ahmatukaev-yukh-yu-san-nana` | Юьхь ю сан, нана / Я могу смотреть тебе в глаза, мама | [n° 830](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/830-uh-u-san-nana) | 24 vers, 6 quatrains | 12 |
| `ahmatukaev-d1akhachalush-du-de-a` | ДӀакхачалуш ду де а… / И день подходит к концу… | [n° 829](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/829-d1akhachalush) | 12 vers, 3 quatrains | 18 |

### Зайтемиров Сайдик — Нохчалла.com

| id | Titre | Page | Forme | Palotchkas normalisées |
|---|---|---|---|---|
| `zaytemirov-1a` | Ӏа / Зима | [n° 1458](https://nohchalla.com/literatura/chechenskie-stihi/zaytemirov-saidik/1458-1a) | 16 vers, 4 quatrains | 8 |

Le titre de la page est écrit « 1а » (palotchka notée `1`) : il devient « Ӏа ».

### Раиса Ахматова (1928–1992) — textes russes, Нохчалла.com

| id | Titre | Page | Forme |
|---|---|---|---|
| `akhmatova-ya-zhdu-tebya` | Я жду тебя, ты только позови | [n° 1210](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/1210-ya-jdu-tebya) | 14 vers (4 + 4 + 6) |
| `akhmatova-vse-v-zhizni` | Все в жизни мне давалось нелегко | [n° 368](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/368-%d0%b2%d1%81%d0%b5-%d0%b2-%d0%b6%d0%b8%d0%b7%d0%bd%d0%b8-%d0%bc%d0%bd%d0%b5-%d0%b4%d0%b0%d0%b2%d0%b0%d0%bb%d0%be%d1%81%d1%8c-%d0%bd%d0%b5%d0%bb%d0%b5%d0%b3%d0%ba%d0%be) | 12 vers, 3 quatrains |
| `akhmatova-nebo-sbrosilo-zvezdnuyu-shal` | Небо сбросило звездную шаль | [n° 365](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/365-%d0%bd%d0%b5%d0%b1%d0%be-%d1%81%d0%b1%d1%80%d0%be%d1%81%d0%b8%d0%bb%d0%be-%d0%b7%d0%b2%d0%b5%d0%b7%d0%b4%d0%bd%d1%83%d1%8e-%d1%88%d0%b0%d0%bb%d1%8c) | 20 vers, 5 quatrains |
| `akhmatova-ya-segodnya-sovsem-ne-spala` | Я сегодня совсем не спала… | [n° 363](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/363-%d1%8f-%d1%81%d0%b5%d0%b3%d0%be%d0%b4%d0%bd%d1%8f-%d1%81%d0%be%d0%b2%d1%81%d0%b5%d0%bc-%d0%bd%d0%b5-%d1%81%d0%bf%d0%b0%d0%bb%d0%b0) | 17 vers (1 + 4 + 4 + 4 + 4) |
| `akhmatova-idu-k-tebe-dorogoy-gornoy` | Иду к тебе дорогой горной | [n° 364](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/364-%d0%b8%d0%b4%d1%83-%d0%ba-%d1%82%d0%b5%d0%b1%d0%b5-%d0%b4%d0%be%d1%80%d0%be%d0%b3%d0%be%d0%b9-%d0%b3%d0%be%d1%80%d0%bd%d0%be%d0%b9) | 20 vers, 5 quatrains |
| `akhmatova-otkrovenie` | Откровение | [n° 366](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/366-%d0%be%d1%82%d0%ba%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d0%b8%d0%b5) | 12 vers, 3 quatrains |
| `akhmatova-vstaval-rassvet` | Вставал рассвет | [n° 367](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/367-%d0%b2%d1%81%d1%82%d0%b0%d0%b2%d0%b0%d0%bb-%d1%80%d0%b0%d1%81%d1%81%d0%b2%d0%b5%d1%82) | 12 vers, 3 quatrains |
| `akhmatova-kiparis` | Кипарис | [n° 369](https://nohchalla.com/literatura/chechenskie-stihi/raisa-ahmatova/369-%d0%ba%d0%b8%d0%bf%d0%b0%d1%80%d0%b8%d1%81) | 12 vers, 3 quatrains |

Les pages ne nomment **aucun traducteur** et ne disent pas s'il s'agit de traductions. Раиса
Ахматова écrivait en tchétchène ; ces textes russes sont donc vraisemblablement des
traductions, mais ce point **n'a pas été vérifié**. Le champ `source` le dit explicitement :
« русский текст по сайту Нохчалла.com (переводчик не указан) ». Si le mainteneur connaît les
traducteurs (ou les originaux tchétchènes), ils sont à ajouter.

## Fiches existantes complétées

| id | Ajout | Source |
|---|---|---|
| `bisultanov-iindagiash` | `text.fr` « Les ombres » (6 quatrains, trad. Kissa Gatsaeva) ; `title.fr` « Ombres » → « Les ombres » (titre de la traduction publiée) | [Waynakh Online](https://www.waynakh.com/fr/2014/03/04/1%d0%b8%d0%bd%d0%b4%d0%b0%d0%b31%d0%b0%d1%88-les-ombres-apti-bisoultanov/) |
| `bisultanov-as-khan-chabaneh-gajga-jucur-ju` | `text.fr` « Je tisserai mes peines… » (trad. Kissa Gatsaeva) et `text.ru` (trad. Люба Арсалиева), 5 quatrains chacun ; `title.fr` aligné sur la traduction publiée | [Waynakh Online](https://www.waynakh.com/fr/2014/04/13/%d0%b4%d0%b0%d1%88%d0%be-%d0%b31%d0%b0%d1%80%d0%b31%d1%83%d0%bb%d0%b5%d1%88-je-tisserai-mes-peines-xhouseyn-betelgereev/) |
| `anonyme-nes-dans-la-nuit` | `text.ce` (20 vers) et `title.ce` : texte tchétchène de l'hymne, dont la fiche n'avait que les traductions française et anglaise | [Орга](https://orga.narod.ru/anthem/anthem.htm) |
| `ahmatukaev-toska` | `text.ce` (12 vers, 3 quatrains) et `title.ce` « ЦӀазамаш мерза ду Даймехкан арахь… » : texte tchétchène du poème dont la fiche n'avait que la version russe de Юрий Щербаков | [Нохчалла.com, n° 843](https://nohchalla.com/literatura/chechenskie-stihi/adam-ahmatukaev/843-c1azamash-merza-du) |

Pour ces quatre fiches : `text_preview` complété, second lien ajouté à `external_links`,
mention ajoutée à la fin de `source`. `date_added`, les tags et les textes déjà présents ne
changent pas, à une exception près : dans `bisultanov-as-khan-chabaneh-gajga-jucur-ju`, deux
groupes de **mots soudés** ont été décollés d'après le texte tchétchène de la page Waynakh —
`бӀаьрхихцхьа → бӀаьрхих цхьа` et `Цхьа-цхьаъдахарнадуьхьал → Цхьа-цхьаъ дахарна дуьхьал`.
Les autres écarts entre les deux sources (`луьстур` / `луьттур`, `хӀуттур` / `хӀуьттур`)
n'ont pas été touchés. La version russe abrégée d'Ия Николаенко (3 quatrains) n'a pas été
reprise.

**Hymne (`anonyme-nes-dans-la-nuit`) — trois choix de l'assistant, à valider.**
(1) Telle que lue, la page d'Орга donne les 20 vers sans division visible en strophes : ils
sont découpés en 4 / 4 / 6 / 6 vers, comme les versions française et anglaise de la fiche.
(2) La page n'a d'autre intitulé que « Нохчийн Республикан гимн » : `title.ce` reprend le
premier vers, « Буьйсанна борз ехкаш дуьненчу девлла тхо… », par cohérence avec les titres
français et anglais de la fiche (le rapport du lot 1 désigne l'hymne sous le titre
« Ӏожалла я маршо »). (3) L'auteur reste « Anonyme tchétchène » : la
page d'Орга ne nomme personne, mais d'autres pages (Genius) attribuent les paroles à Абузар
Айдамиров. Cette attribution n'a pas été vérifiée ici ; au mainteneur de trancher. La mention
« devenu hymne national en 1990 » du champ `source`, antérieure au lot, n'a été ni vérifiée ni
modifiée.

**`ahmatukaev-toska` — rapprochement fait par l'assistant, à valider.** La page n° 843 de
Нохчалла.com ne mentionne aucune traduction, et la fiche existante ne contenait que le texte
russe (« Тоску по родине… », article de Юрий Щербаков dans « День литературы »). Les deux
textes ont été rapprochés sur leur contenu : trois quatrains de part et d'autre et les mêmes
motifs strophe par strophe — fruits tentants de l'étranger, fugitif jugé par les anciens ;
pain gagné au loin ; appel final `Верзахьа сихонца цӀехьа` / « Вернись домой, вернись
скорее ». Une fiche séparée aurait créé un doublon original / traduction. Pour défaire ce
rapprochement : retirer de la fiche `title.ce`, `text.ce`, `text_preview.ce`, le second lien
et la fin de `source`, puis créer une fiche distincte pour le poème tchétchène.

> **Suite donnée au lot 1** : son rapport notait que le texte tchétchène de l'hymne pourrait
> compléter la fiche existante plutôt que de créer une seconde fiche. C'est ce qui est fait
> ici.

Les 344 autres fiches antérieures sont identiques à `main` (comparaison avec
`git show HEAD:` ; ordre des fichiers et de l'index conservé).

## Traductions de l'assistant

- **Corps de texte : aucune.**
- **Titres** : comme dans les lots précédents, les traductions de titres absentes des sources
  (ru / en / fr pour le folklore, Ахматукаев et Зайтемиров ; en / fr pour Гешаев et Ахматова ;
  ru / en pour « Гуьйре » et « Нохчийчоь ») sont de l'assistant, littérales et **non relues**.
  Quatre titres sont des interprétations plutôt que du mot à mot : les deux chants de travail (titres
  descriptifs, « Песня при сбивании масла » / « Chant du barattage »…), « Кхачалуш ю » (rendu
  à la 2ᵉ personne d'après le poème : « Угасаешь » / « Tu t’éteins ») et « Юьхь ю сан, нана »
  (rendu par l'idée de « pouvoir regarder en face »).

## Interventions sur les textes (toutes mécaniques ou typographiques)

1. **Palotchka** — voir la section dédiée.
2. **Retours à la ligne et strophes.** Les pages d'Орга, de Waynakh et de Нохчалла.com ne sont
   accessibles qu'à travers l'outil de lecture de pages, qui rend chaque vers suivi d'une
   ligne vide :
   - prose : les lignes coupées par la mise en page d'origine ont été recollées, un
     paragraphe par alinéa de la source, tirets de dialogue `- ` conservés ;
   - vers d'Орга, de Waynakh et de Нохчалла.com : la division en strophes **n'est pas
     visible** dans la source telle que lue. Elle a été rétablie par quatrain ou par refrain,
     d'après les rimes (berceuses n° 1, 3, 5 ; « Цхьогалан йиш » en question / réponse ;
     chants de travail ; « Гуьйре » et « Нохчийчоь » d'après la traduction française ;
     poèmes d'Ахматукаев, de Зайтемиров et d'Ахматова). « Йилбазийн бӀо » (30 vers rimés
     aab ccb) est découpé en 5 sizains. À vérifier sur les éditions papier ;
   - Гешаев : les strophes sont celles de la source (blocs préformatés) ; les poèmes d'un
     seul tenant (« Махмуду ») le restent.
3. **Coquilles de numérisation corrigées** (Орга) :
   - « Ден весет » : `хиъиа → хиъна` ;
   - « Хьекъале хӀусамнана » : `кин цкъа → кхин цкъа` ; `хӀусамнанас .- Ахьа → хӀусамнанас. - Ахьа` ;
   - « Ма хаза ю буьйса… » : `ЦӀоькьалом → ЦӀоькъалом`, `Кьовсамехь → Къовсамехь`
     (`ь` lu pour `ъ`) ;
   - « Цхьогалан йиш » : espace rétablie après la virgule (`Долахьа,цхьогал`).
4. **Typographie** : « И камни знали… » se termine par une virgule dans la source, remplacée
   par un point ; « Les ombres » : double espace supprimée ; le titre « Гюйре » de la page
   Waynakh est écrit « Гуьйре », comme dans le poème lui-même.
5. **Jonctions** : deux textes étaient à cheval sur deux blocs de lecture (« Ден весет »,
   dernier mot `шег|а` ; « Эмиграция », vers `Правильно | все: заслужили, так падайте!`) ; les
   deux moitiés ont été recollées.
6. **Нохчалла.com** :
   - « Я жду тебя, ты только позови » : espaces manquantes rétablies après la ponctuation
     (`аул,под`, `тебя.Ты`, `пройду.Ты`, `гроза,палит`, `приду.Ты`) ; `подай-пройду` →
     `подай - пройду` ;
   - « Откровение » : le vers en escalier `Ты знай — она мне даровала / нежность,` est
     réuni en un seul vers ; les titres en capitales « ОТКРОВЕНИЕ » et « КИПАРИС » deviennent
     « Откровение » et « Кипарис » ;
   - « Я сегодня совсем не спала… » : le premier vers reste isolé, comme sur la page ;
   - Ахматукаев : trois doubles espaces supprimées (`Сте  а`, `Халбата  хаа`, `Луцаш  санна`).
7. **Laissé tel quel** : `дайина` (1ʳᵉ strophe) / `дайъина` (reprise) et « Ca ira » sans
   cédille dans « Нохчийчоь » ; `Бетаса` dans la berceuse n° 3 ; `аьла` dans la novella n° 4 ;
   `хиэбаш` dans « Кхачалуш ю » ; la ponctuation absente en fin de vers dans la dernière
   strophe de « Я жду тебя… ».

**Limite à connaître** : le bac à sable ne peut pas télécharger ces sites par script
(`curl` → échec). Les textes ont donc été **saisis d'après l'affichage de la page**, puis
contrôlés mécaniquement (palotchka, lettres latines, espaces, doublons). Seuls les 9 poèmes
d'Ахматукаев ont été recomparés vers à vers à l'affichage de la page après construction ; les
autres textes ont été relus une fois dans leur forme finale, **sans seconde comparaison à la
source**. Une relecture humaine contre les sources reste donc souhaitable, surtout pour les
quatre novellas.

## Doublons : contrôle systématique

Chaque candidat a été comparé à l'inventaire des 348 œuvres : `id`, couple auteur + titre,
et recherche du premier vers ou de la première phrase (et, pour Ахматукаев, de plusieurs vers
du milieu et de la fin) dans tous les textes après normalisation (variantes de palotchka
unifiées, casse et ponctuation ignorées). Les 46 textes ajoutés sont absents de la base.

**Même texte sous un autre titre** — trois pages de Нохчалла.com reprennent, sous un titre
différent, un poème d'Ахматукаев déjà en base ; elles n'ont pas été ajoutées et les fiches
existantes n'ont pas été modifiées :

| Page Нохчалла.com | Titre de la page | Fiche existante |
|---|---|---|
| n° 836 | Нохчийн мотт | `ahmatukaev-khu-dunenan-kiyra` (page n° 848) |
| n° 835 | Нохчийн маттахь | `ahmatukaev-kamel-d1adiyr-du` (page n° 847) |
| n° 842 | Сан гӀенийн дастаза маьӀна | `ahmatukaev-berallin-sherash-ahna` (page n° 845) |

Ces trois titres pourraient être ajoutés comme variantes si le mainteneur le souhaite.

**Original et traduction** — une recherche par premier vers ne détecte pas qu'un texte est
l'original d'une traduction déjà en base. Les textes tchétchènes d'Ахматукаев ont donc été
comparés à la main (nombre de vers, début, sujet) aux 16 traductions russes de Юрий Щербаков
présentes : une seule correspondance (`ahmatukaev-toska`, traitée ci-dessus comme complément de fiche). Même
contrôle, sans résultat, pour « Гуьйре » (fiches de Бисултанов sans texte tchétchène) et pour
les fiches existantes d'Ахматова et de Зайтемиров.

Homonymes sans conflit : « Ден весет » est aussi un titre de Касумов Сайдмохьмад ;
« Нохчийчоь » un titre d'Арсанукаев et de Яндарбиев ; « Цхьалла » un titre de Бисултанов ;
« Милая Чечня » est contenu dans le titre « Салам алейкум, милая Чечня » de Гешаев — textes
différents à chaque fois. « Вайн гӀиллакх » n'est pas « Нохчийн гӀиллакх » de Мамакаев.
« Со воьдура, воьдура… » n'est pas la comptine `folk-dagardar-voedush-vara-so` déjà
présente (enchaînement différent). « Махмуду » est un autre poème que
`geshaev-gordis-vaynah`, lui aussi dédié à Махмуд Эсамбаев.

`python3 scripts/verify_data.py` : aucun id en double, aucun couple (auteur, titre ce) en
double, aucun texte tchétchène identique.

Autres candidats **écartés parce que déjà présents** : les cinq poèmes d'Ilman Yusupov de
PoemHunter (la page de l'auteur n'en contient pas d'autres) ; sur Нохчалла.com, les poèmes de
Яндарбиев et de Нунуев de la première page de la catégorie (en base, ou écartés dans les lots
précédents), « ЦӀаверзар » et « Сан марзонаш » d'Ахматукаев, « Езначуьнга » et « Хьомсара
Нана » de Хамзат Магомадов.

## Textes écartés pour d'autres raisons

- **Орга, novellas** n° 1 « Суьдхочун кхел » (coquilles de numérisation), n° 2 « Молланаш »,
  n° 3 « Ненан хьехар » (se termine par un mari qui bat sa femme), n° 6 « Боьхна сатийсам »,
  n° 9 « Келочо йина кхел » (se termine par une décapitation).
- **Орга, berceuse n° 2** « ДӀадижа, сан бер » : adaptation de la « Колыбельная песня »
  d'Аполлон Майков, non un texte du folklore d'origine. Berceuse n° 4 (`науа`), comptine
  « Ког-ког, коьган ког » (`тсбна`) : coquilles ; « ШайтӀа къардар » : long.
- **Орга, mythe « Пхьармат »** : texte majeur mais long et semé de coquilles (`данм`,
  `ламанийц`, `Ворх дийнаххьий`…) ; à reprendre avec une relecture.
- **Гешаев** : « Прыжок в вечность » (très long, coquilles `мщепье`, `Землимхан`) ; « Не дай вам
  бог » (très long) ; « Миллионный чеченец » ; « Махмуду Эсамбаеву » (la page y accole par
  erreur l'épigraphe du poème suivant) ; « Голубое озеро » (même sujet que « Песнь об озере
  Кезеной-Ам ») ; « Золотое небо шлет поклон горам… » (non retenu) ; deux quatrains isolés.
- **Waynakh EN, « Desert Mirages »** (Taisa Irs) : texte propre mais récit contemporain
  d'environ 25 000 caractères, traducteur non nommé — non repris en entier sans décision du
  mainteneur. **« Nassipat »** (Tamara Islamova) : plus de trente coquilles dans la partie lue
  (première moitié) ; écarté.
- **Waynakh FR, chansons sans parolier nommé** : « Сан хьомениг » (Хизир Ульбиев),
  « Нохчий къам » (Vahid Ayubov), « Бераллехь » (groupe Illi) — aucune attribution inventée ;
  « Вадо везар хьо » (texte long et répétitif, orthographe approximative).
- Les exclusions des lots précédents restent en vigueur (Нунуев « Там, на Востоке… » et
  « В дни безрассудства », Хас-Магомед Хаджимурадов « Шейх Мансур » et « Дади-Юрт »,
  `nemirovskaya-*`, auteurs non tchétchènes).

## Palotchka

Procédure de `docs/prompt-palotchka.md`, appliquée comme pour les deux lots précédents :

1. **Avant ajout** : `python3 scripts/verify_data.py` signale 10 substituts résiduels
   **antérieurs à ce lot** (7 `Аллах1` dans des textes russes de Берзлоев, 3 résidus OCR dans
   `mokhmad-mamakaev-hazachu-yoi-tulg`) : non modifiés.
2. **Normalisation à l'ingestion** des 27 textes tchétchènes (25 nouvelles fiches, 2 fiches
   complétées). Орга, Waynakh (billets de 2014) et la page de Зайтемиров écrivent la
   palotchka `1` ; les pages d'Ахматукаев l'écrivent `I` (i majuscule latin). Conversion en
   **Ӏ (U+04C0)** avant insertion : **404 remplacements** dans les titres et les textes
   de 25 fiches, plus 24 dans les métadonnées (`source`, libellés de liens, nom de
   l'auteur `1абдул → Ӏабдул`), soit **428** ; **0 cas ambigu**, 0 doublon `11`, 0 `ӏ`
   (U+04CF), 0 lettre latine dans un champ `ce`.
   Exemples : `к1ант → кӀант`, `х1усамнана → хӀусамнана`, `1уьйранна → Ӏуьйранна`,
   `йо1 → йоӀ`, `Лаиллах1а иллалах1 → ЛаиллахӀа иллалахӀ`, `гIиллакх → гӀиллакх`,
   `бIо → бӀо`, `Iожах → Ӏожах`.
3. Aucun chiffre isolé, nombre ou année n'a été touché (`1989`, `1991`, `1996`, `№ 1`…) ;
   aucune palotchka dans les textes `ru` / `fr` du lot.
4. **Après écriture** : toujours 10 substituts résiduels, les mêmes qu'avant ;
   **0 dans les 46 nouvelles œuvres et dans les 4 fiches complétées**.
5. **Rollback** : `git revert` du commit du lot.

## Vérifications finales

- `npm run validate-data` → ✅ données cohérentes (394 / 394 ; couverture `ce` 268, `ru` 122,
  `en` 57, `fr` 61) ; 1 avertissement, antérieur au lot (`mokhmad-mamakaev-hazachu-yoi-tulg`).
- `npm run lint` → OK · `npm run test` → 39 / 39 · `npm run format:check` → OK ·
  `npm run build` → OK.
- `python3 scripts/verify_data.py` → doublons : aucun ; index ↔ fichiers complets : cohérent ;
  le script termine toujours en « ECHEC » à cause des 10 substituts antérieurs décrits
  ci-dessus (état identique à `main`).
- Contrôle complémentaire par script sur les 50 fiches touchées (46 + 4) : ordre des clés,
  `text_preview` présent pour chaque langue disponible et conforme aux deux premiers vers,
  aucune espace double ou en fin de ligne, aucun U+04CF, aucun chiffre ni lettre latine dans
  un champ `ce`, aucune palotchka hors `ce` → 0 écart. Parmi les 348 fiches antérieures,
  seules les 4 fiches complétées diffèrent de `main`.

## Droits

Les contes, chansons et comptines populaires sont du domaine public ; ils sont cités d'après
le recueil de Ш. А. Джамбеков (1991). Les poèmes de Муса Гешаев (mort en 2014), de Раиса
Ахматова (morte en 1992) et de ses traducteurs éventuels, d'Апти Бисултанов, d'Адам
Ахматукаев, de Зайтемиров Сайдик et d'Ӏабдул-Хьамид Хатуев, ainsi que les traductions de Kissa
Gatsaeva et de Люба Арсалиева, restent la propriété de leurs auteurs ou ayants droit ; ils
sont repris avec attribution et lien vers la source, selon la pratique déjà en vigueur dans
le projet. À retirer sur simple demande d'un ayant droit.

## Pistes pour un prochain lot

- **Anglais** : les sources de poèmes traduits sont épuisées (PoemHunter, Waynakh EN
  « Poems »). Restent deux récits de Waynakh EN — « Desert Mirages » et « Ragged Dreams » (non
  lu) — à ajouter sur décision du mainteneur, ou des traductions de l'assistant signalées
  comme telles, comme dans le lot 1.
- **Нохчалла.com**, catégorie « Стихи » — <https://nohchalla.com/literatura/chechenskie-stihi> :
  page 2, cinq poèmes de Рамазан Берзлоев (n° 1603, 1604, 1606, 1607, 1608) ; page 3, treize
  poèmes de Руслан Ахтаханов (n° 814 à 826, auteur absent de la base) — titres russes, pages
  non lues ; la page-recueil d'Ахматукаев (n° 849) ; les pages 4 et suivantes de la
  catégorie, non lues ; les contes. Tout est à dédoublonner. Les originaux d'autres traductions russes d'Ахматукаев déjà en base
  (15 fiches `ru` seules) s'y trouvent peut-être aussi.
- **Орга, « Нохчийн фольклор »** — <https://orga.narod.ru/folklor/main.htm> : mythes (dont
  « Пхьармат »), шира дийцарш, Ӏер-дахаран / забаре / хелхаран эшарш, тийжамаш, узамаш, la
  suite des chants de travail et des comptines.
- **Муса Гешаев** — <https://orga.narod.ru/geshaev/geshaev_3.htm> (« Опрокинулось небо »,
  1998) : seuls 4 poèmes du recueil sont en base.
- **umarlavina.narod.ru** (≈ 170 poèmes d'Умар Яричев), **kasumov.narod.ru** (recueils ce + ru) :
  non exploités dans ce lot.
- **Waynakh FR** : « Geçdelah, Latta » (Suleyman Tokkaev), page non lue.
