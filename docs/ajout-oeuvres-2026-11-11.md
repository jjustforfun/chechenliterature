# Ajout de 32 œuvres : poèmes, chansons et prose courte (ce / ru / en / fr)

> Date d'ajout : 2026-11-11 · Branche `arena/a0f34369-chechenliterature` · base `main` @ `cd2c472`

Ajout de **32 œuvres** d'auteurs tchétchènes ou du folklore tchétchène, transcrites depuis
des sources en ligne vérifiées : **15 poèmes**, **11 chansons**, **6 textes de prose courte**.

- `src/data/poems.json` : 283 → **298**
- `src/data/songs.json` : 23 → **34**
- `src/data/prose.json` : 10 → **16**
- `src/data/index.json` : 316 → **348** (régénéré par `npm run generate-index`, jamais édité à la main)
- `src/data/catalog.test.js` : total attendu 316 → **348**
- `src/utils/authorName.js` : 1 nouvelle transcription EN/FR (Хас-Магомед Хаджимурадов)

Couverture des textes complets (`npm run validate-data`) :
`ce` 227 → **241** (+14) · `ru` 84 → **100** (+16) · `en` 49 → **51** (+2) · `fr` 51 → **54** (+3).

## Instructions lues avant modification

`README.md`, `docs/prompt-palotchka.md`, `docs/relecture-tchetchene-cles.md`, les quatre
rapports `docs/ajout-*.md`, `public/llms.txt`, `.github/workflows/ci.yml`, les quatre scripts de
`scripts/`, `src/data/catalog.js` (+ tests), `src/data/integrity.test.js`,
`src/utils/authorName.js`, `contentLanguage.js`, `getTranslatedField.js`, `searchUtils.js`,
`src/pages/PoemDetail.jsx`, les fichiers `src/locales/*.json`.

**Aucun `AGENTS.md` ni `CLAUDE.md` n'existe dans le dépôt**, ni dans aucun commit de son
historique (vérifié sur les 75 commits avec `git log --all --name-only`). Les consignes
suivies sont donc celles du README, de `docs/prompt-palotchka.md` et des rapports précédents.

## Œuvres ajoutées

Toutes ont une source, un lien externe, un `text_preview` par langue disponible et des tags
pris **uniquement** dans le vocabulaire existant. `date_added` = `2026-11-11`.

| id | Titre | Auteur | Type | Langues du texte | Source | Palotchkas normalisées |
|---|---|---|---|---|---|---|
| `folk-borz-le-loup` | Борз / Волк | Халкъан | prose | ce, fr | [Waynakh Online](http://www.waynakh.com/fr/2015/01/17/le-loup-%D0%B1%D0%BE%D1%80%D0%B7/) | 47 |
| `gatsaev-michakh-yu` | Мичахь ю? / Где ты? | СаьӀид Гацаев | chanson | ce, fr | [Waynakh Online](http://www.waynakh.com/fr/2014/01/09/micaxh-yu-sakhab-mejidov/) | 7 |
| `yarichev-zemlya-ottsov` | Земля отцов | Умар Яричев | chanson | ru, fr | [Waynakh Online](http://www.waynakh.com/fr/2012/10/21/la-terre-de-nos-peres-kheda-astamirova/) | — |
| `yarichev-kayle` | Къайле / Тайна | Умар Яричев | poème | ce | [umarlavina.narod.ru](https://umarlavina.narod.ru/new/kajle.htm) | 14 |
| `yarichev-shchepotka-zemli` | Щепотка земли | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/shepotka.html) | — |
| `yarichev-slovo-o-slove` | Слово о слове | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/slovo.html) | — |
| `yarichev-dumy-kamennykh-bashen` | Думы каменных башен | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/dumy.html) | — |
| `yarichev-daymokhk` | Даймохк | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/dajmohk.html) | — |
| `yarichev-materi-nashi` | Матери наши | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/materi.html) | — |
| `yarichev-nane` | Нане | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/nane.html) | — |
| `yarichev-pondaru` | Пондару | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/lavina/pondaru.html) | — |
| `yarichev-chechenets` | Чеченец | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/new/chechenez.htm) | — |
| `yarichev-chechenskoy-zhenshchine` | Чеченской женщине | Умар Яричев | poème | ru | [umarlavina.narod.ru](https://umarlavina.narod.ru/new/chzhenshine.htm) | — |
| `nunuev-v-kazhdom-atome-mira` | В каждом атоме мира… | Саид-Хамзат Нунуев | poème | ru | [Нохчалла.com](https://nohchalla.com/literatura/chechenskie-stihi/said-khamzat-nunuev/1616-v-kazhdom-atome-mira) | — |
| `nunuev-byl-strannyy-son` | Был странный сон… | Саид-Хамзат Нунуев | poème | ru | [Нохчалла.com](https://nohchalla.com/literatura/chechenskie-stihi/said-khamzat-nunuev/1615-byl-strannyj-son) | — |
| `nunuev-yukhaderzar` | Юхадерзар / Возвращение | Саид-Хамзат Нунуев | poème | ce | [Нохчалла.com](https://nohchalla.com/literatura/chechenskie-stihi/said-khamzat-nunuev/1614-yukhaderzar) | 6 |
| `nunuev-propoved` | Проповедь | Саид-Хамзат Нунуев | poème | ru | [Нохчалла.com](https://nohchalla.com/literatura/chechenskie-stihi/said-khamzat-nunuev/1613-propoved) | — |
| `khadzhimuradov-khm-gostyu-kavkaza` | Гостю Кавказа | Хас-Магомед Хаджимурадов | chanson | ru | [umarlavina.narod.ru](http://umarlavina.narod.ru/hasmagomed/gostju_kavkaza.htm) | — |
| `khadzhimuradov-khm-zelimkhan` | Зелимхан | Хас-Магомед Хаджимурадов | chanson | ru | [umarlavina.narod.ru](http://umarlavina.narod.ru/hasmagomed/zelimhan.htm) | — |
| `khadzhimuradov-khm-chechnya` | Чечня | Хас-Магомед Хаджимурадов | chanson | ru | [umarlavina.narod.ru](http://umarlavina.narod.ru/hasmagomed/chechnya.htm) | — |
| `folk-hunter-and-nart` | The Hunter and the Nart | Халкъан | prose | en | [Waynakh Online](https://www.waynakh.com/eng/2012/04/the-hunter-and-the-nart/) | — |
| `folk-timour-fairy-tale` | Timour (Fairy Tale) | Халкъан | prose | en | [Waynakh Online](https://www.waynakh.com/eng/2011/04/timour-fairy-tale/) | — |
| `folk-eshar-mettakh-illa` | Меттахь Ӏилла цомгуш йоцуш… / Не так больна, чтоб лежать в постели… | Халкъан | chanson | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c471.htm) | 13 |
| `folk-eshar-ma-belkha-san-shi-barg` | Ма белха, сан ши бӀаьрг… / Не плачьте, мои глаза… | Халкъан | chanson | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c471.htm) | 5 |
| `folk-eshar-so-yatsara-khan` | Со яцара хьан, хаза Ӏуьйре… / Не твоей я была, ясное утро… | Халкъан | chanson | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c471.htm) | 14 |
| `folk-eshar-gobakkhina-lam` | Гобаьккхина лам бу ала… / Скажи, что кругом горы… | Халкъан | chanson | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c471.htm) | 5 |
| `folk-eshar-skhakkheta-dasho-malkh` | Схьакхета дашо малх кхетаза белара… / Не взошло бы золотое солнце… | Халкъан | chanson | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c471.htm) | 3 |
| `folk-eshar-de-khoelina-dara` | Де кхоьлина дара алий… / Не говори, что день был пасмурным… | Халкъан | chanson | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c471.htm) | 13 |
| `folk-emkal` | Эмкал / Верблюд | Халкъан | prose | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c115.htm#p119) | 64 |
| `folk-khillane-tskhogal` | ХӀиллане цхьогал / Хитрая лиса | Халкъан | prose | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c115.htm#p120) | 18 |
| `folk-sutaralla` | Сутаралла / Жадность | Халкъан | prose | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c115.htm#p121) | 15 |
| `folk-dagardar-voedush-vara-so` | Воьдуш, воьдуш вара со… / Шёл я, шёл я… (считалка) | Халкъан | poème | ce | [Орга. Нохчийн фольклор](https://orga.narod.ru/folklor/c141.htm#p143) | 11 |

Répartition :

- **Tchétchène (14 textes)** : 6 chansons d'amour populaires (« Безаман эшарш »), 3 contes
  d'animaux, 1 comptine, le conte « Борз », la chanson « Мичахь ю? » (Гацаев), « Къайле »
  (Яричев, journal « Орга » 2002), l'hymne « Юхадерзар » (Нунуев).
- **Russe (16 textes)** : 10 textes d'Умар Яричев (dont la chanson « Земля отцов »),
  3 poèmes de Саид-Хамзат Нунуев, 3 chansons du barde Хас-Магомед Хаджимурадов.
- **Anglais (2 textes)** : deux contes populaires tchétchènes traduits par Troy Morash
  (« The Hunter and the Nart », « Timour »), publiés par Waynakh Online.
- **Français (3 textes)** : « Le loup » (trad. Philippe Frison et Bernard Outtier, *Contes
  tchétchènes*, Fayard, 2002, cité par Waynakh Online), « Où es-tu ? » (trad. Kissa Gatsaeva),
  « La terre de nos pères » (version française chantée par Kheda Astamirova).

Œuvres bilingues : `folk-borz-le-loup` (ce + fr), `gatsaev-michakh-yu` (ce + fr),
`yarichev-zemlya-ottsov` (ru + fr).

**Nouvel auteur ajouté à `AUTHOR_NAMES`** : Хас-Магомед Хаджимурадов → EN *Khas-Magomed
Khadzhimuradov*, FR *Khas-Magomed Khadjimouradov* (même graphie que Вахит Хаджимурадов,
qui est un autre auteur).

## Aucun texte inventé

- Les champs `text` ne contiennent **que des textes transcrits des sources**. Aucune
  traduction de l'assistant n'a été intégrée dans `text` (des traductions littérales EN/FR
  de quelques textes courts peuvent être ajoutées sur demande, signalées comme telles).
- Comme dans les lots précédents, seules les **traductions des titres** (ru / en / fr, ou
  ce → ru) sont de l'assistant : traductions littérales **non relues**, à valider par un
  bilingue (en particulier les titres des 6 chansons populaires et de la comptine, donnés
  d'après leur premier vers).
- Les attributions ont été recoupées : « La terre de nos pères » est attribuée à
  Умар Яричев par Waynakh Online, et le site consacré au poète confirme que ses textes ont
  été chantés par Имам Алимсултанов ; le texte russe est celui de la chanson (deux sites de
  paroles concordants).

## Interventions sur les textes (toutes mécaniques ou typographiques)

1. **Palotchka** — voir la section dédiée.
2. **Lettres latines sosies** (source Waynakh, conte « Борз ») : `xIapa → хӀара`,
   `TIepa → ТӀера`, `Iaш → Ӏаш`. Sans cette conversion le validateur signalerait un
   mélange latin/cyrillique.
3. **Retours à la ligne** : les sources `narod.ru` coupent les vers longs et le premier vers
   de chaque strophe (alinéa). Les vers ont été recollés ; les strophes sont séparées par
   une ligne vide là où la source les marque (Яричев, Хаджимурадов, chansons populaires en
   quatrains). Pour les 4 textes de Нунуев, aucune coupure de strophe n'est visible dans la
   source : ils restent en un bloc, comme les 8 textes de cet auteur déjà présents.
4. **Typographie** : espaces avant ponctuation supprimées et espaces manquantes après
   virgule rétablies (pages d'Умар Яричев ; une occurrence dans « Борз ») ; `белым - бела → белым-бела` ; `кто – то → кто-то` ;
   `Аллах,Ты → Аллах, Ты` ; `БОГА → Бога` et `молчат → молчать` (variante du second site de
   paroles) dans « Земля отцов ».
5. **Coquilles de saisie corrigées dans les textes français** (3) : `Il n’yen avait →
   Il n’y en avait`, `étincela. comme si → étincela, comme si` (« Le loup ») ;
   `Pendent des siècles → Pendant des siècles` (« La terre de nos pères »).
   Dans « The Hunter and the Nart », un guillemet simple inversé (`”‘ → ”’`).
6. **Rien d'autre n'a été corrigé.** Les graphies des sources sont conservées telles
   quelles, y compris les fautes probables (`распрашивай`, `видиться`, `из – гор`,
   `Мы битвах`, `воцуг`, `than I will tell you`…). Les textes tchétchènes d'Орга viennent
   d'une numérisation du recueil de 1991 : une relecture par un locuteur natif reste
   souhaitable, comme pour les `иллеш` déjà présents de la même source.

## Doublons : contrôle systématique

Contrôle effectué **avant écriture** contre les 316 œuvres existantes (3 fichiers) et à
l'intérieur du lot :

- identifiant ;
- titre normalisé, langue par langue, avec signalement renforcé si l'auteur est le même ;
- premier vers normalisé, langue par langue ;
- recouvrement du texte complet par séquences de 4 mots (seuil 25 %) ;
- couple `(auteur, titre ce)` ;
- puis `python3 scripts/verify_data.py` après écriture.

**Résultat : 0 doublon introduit.** Les seules coïncidences sont des titres génériques
portés par d'autres auteurs (« Даймохк », « Чечня », « À ma mère ») — textes différents.

Candidats **écartés parce que déjà présents** (ou équivalents) :

- les 20 poèmes de Яндарбиев et 8 des poèmes de Нунуев listés sur Нохчалла.com ;
- Waynakh FR « Indagach (Les Ombres) » = `bisultanov-iindagiash` ; « Дашо гӀаргӀулеш – Je
  tisserai mes peines » = `bisultanov-as-khan-chabaneh-gajga-jucur-ju` ;
- l'hymne « Ӏожалла я маршо » (orga.narod.ru) : c'est l'original de
  `anonyme-nes-dans-la-nuit` (en + fr) — non ajouté pour ne pas créer une seconde fiche
  de la même œuvre ; son texte `ce` pourrait compléter la fiche existante ;
- conte n° 2 « Борз » du recueil d'Орга : même titre `ce` et même auteur (`Халкъан`) que
  le conte « Борз / Le loup » ajouté ici ;
- chansons populaires n° 4 et n° 10 : variantes l'une de l'autre, aucune retenue.

## Textes écartés pour d'autres raisons

- **Нунуев, « Там, на Востоке… »** : retiré à la demande de l'utilisateur le 2026-10-13,
  non réintroduit.
- **Нунуев, « В дни безрассудства »** : contient un vers visant un groupe ethnique
  (« олигарх — еврей ») ; non ajouté.
- **Хас-Магомед Хаджимурадов, « Шейх Мансур » et « Дади-Юрт »** : généralisations hostiles
  envers un peuple ; non ajoutés. Les chansons de guerre postérieures à 1989 du même site
  n'ont pas été examinées.
- **Auteurs non tchétchènes** (Waynakh EN) : Harrington, Lermontov, Maetamm, McPhillips,
  Samniashvili — écartés comme dans les lots précédents.
- **« Three Brothers (Qo Vaša) »** (Waynakh EN) : texte en ligne altéré par un
  rechercher-remplacer (« rethe little brotherzing ») et très long ; à reprendre depuis une
  source propre.
- **« The City which is not Present on the Earth »** (Zura Itsmeolord, Waynakh EN) :
  traduction automatique de mauvaise qualité.
- **Conte n° 1 « Лулахой » et chanson n° 9** (Орга) : numérisation trop abîmée
  (`6арзо`, `юккъех1`, `Хъо`…) pour être corrigée sans relecture.

## Palotchka

Procédure de `docs/prompt-palotchka.md`, appliquée comme pour le lot du 2026-11-10 :

1. **Dry-run sur les données existantes (avant ajout)** : `python3 scripts/verify_data.py`
   signale 10 substituts résiduels **antérieurs à ce lot** — 7 fois `Аллах1` dans deux
   textes **russes** de Берзлоев (6 dans `poems.json`, 1 dans `index.json`) et 3 résidus OCR
   dans `mokhmad-mamakaev-hazachu-yoi-tulg`. Ce sont des cas connus
   (`docs/relecture-tchetchene-cles.md`) ou hors règle (pas de palotchka dans un texte
   `ru`) : **aucune donnée existante n'a été modifiée**.
2. **Normalisation à l'ingestion** des 14 nouveaux textes tchétchènes : les sources écrivent
   la palotchka `1` (Орга, Нохчалла) ou `I` latin (Waynakh, umarlavina). Conversion en
   **Ӏ (U+04C0)** avant insertion : **235 remplacements**, **0 cas ambigu**, 0 doublon `11`,
   0 `ӏ` (U+04CF). 4 autres Ӏ figurent dans des titres saisis directement.
   Exemples : `т1екхаьчна → тӀекхаьчна`, `хIун → хӀун`, `1а → Ӏа`, `1овх1 → ӀовхӀ`,
   `ц1а → цӀа`.
3. Aucun chiffre isolé, nombre ou année n'a été touché ; aucune palotchka dans les textes
   `ru` / `en` / `fr` du lot.
4. **Vérification après écriture** : toujours 10 substituts résiduels, les mêmes qu'avant
   le lot ; **0 dans les 32 nouvelles œuvres**.
5. **Rollback** : `git revert` du commit du lot (les sauvegardes ne sont plus conservées
   dans le dépôt).

## Vérifications finales

- `npm run validate-data` → ✅ données cohérentes (348 / 348) ; 1 avertissement, antérieur
  au lot (`mokhmad-mamakaev-hazachu-yoi-tulg`).
- `npm run lint` → OK · `npm run test` → 39 / 39 · `npm run format:check` → OK ·
  `npm run build` → OK.
- `python3 scripts/verify_data.py` → doublons : aucun nouveau ; index ↔ fichiers complets :
  cohérent ; le script termine toujours en « ECHEC » à cause des 10 substituts antérieurs
  décrits ci-dessus (état identique à `main`).
- Les entrées existantes sont inchangées : dans chaque fichier, les fiches antérieures
  (283 poèmes, 23 chansons, 10 proses, 316 fiches d'index) sont identiques à `main` ; les
  nouvelles sont ajoutées en fin de fichier.

## Droits

Les contes et chansons populaires sont du domaine public dans leur langue d'origine. Les
traductions (Troy Morash ; Frison et Outtier, Fayard 2002 ; Kissa Gatsaeva) et les textes
d'auteurs contemporains (Яричев, Нунуев, Гацаев, Хаджимурадов) restent la propriété de leurs
auteurs ; ils sont repris avec attribution et lien vers la source, selon la pratique déjà
en vigueur dans le projet. À retirer sur simple demande d'un ayant droit.

## Pistes pour un prochain lot

- **Орга, « Нохчийн фольклор » (1991)** — <https://orga.narod.ru/folklor/main.htm> : il
  reste la plupart des sections en tchétchène (иллеш courts, аганан эшарш, узамаш,
  халкъан новеллаш, мифаш, шира дийцарш, кицанаш…).
- **umarlavina.narod.ru** : environ 170 autres poèmes d'Умар Яричев (« Лавина времени »,
  « Между прошлым и будущим »).
- **kasumov.narod.ru** : quatre recueils non exploités, dont « Кружился смерч… »
  (traductions russes), qui permettraient des fiches bilingues ce + ru.
- **Нохчалла.com** : Берзлоев ×5, Зайтемиров « Ӏа », Ахматова « Я жду тебя… »,
  Ахматукаев « ЦӀазамаш мерза ду… », contes et légendes du folklore.
- **Waynakh FR, « Paroles de chansons »** : Vahid Ayubov, Suleyman Tokkaev, Khizir Ulbiev,
  Makka Mezhieva, groupe Illi (pages non encore lues) ; « Gouyre – L’automne » et
  « Noxçiyçö – Ma Tchétchénie » (texte tchétchène seul, sans version française).
- **Waynakh EN** : récits « Nassipat » (Tamara Islamova) et « Desert Mirages » (Taisa Irs),
  non lus (longueur à vérifier).
- **groznycity.ru** : pages 31 à 56 de « Чеченская народная поэзия XIX–XX вв. ».
