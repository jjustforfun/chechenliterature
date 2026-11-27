# Ajout d'œuvres littéraires tchétchènes — Lot 4 (2026-11-27)

> Recherche approfondie sur internet, **sans inventer aucune œuvre**. Méthode et
> conventions : [`docs/prompt-recherche-oeuvres.md`](prompt-recherche-oeuvres.md) +
> [`docs/prompt-palotchka.md`](prompt-palotchka.md) + [`README.md`](../README.md).
> Chaque fiche a une `source` précise et un `external_links` vers la page d'origine.
> Corps de texte **recopié mot à mot** (tchétchène original ; `text.ru/en/fr` restent `null`).
> Seules modifications autorisées appliquées : **substituts de palotchka** → `Ӏ` (U+04C0),
> homoglyphes latins mêlés au cyrillique, espaces parasites de balisage HTML.
> **Aucune correction d'orthographe de l'original.** Les **titres** `ru/en/fr` ajoutés sont
> des traductions littérales **non relues** par un locuteur natif (signalées §4).

---

## 1. Résumé de l'opération

- **Base avant ajout** : **622** œuvres (`poems=426`, `songs=166`, `prose=30`), 85 auteurs nommés.
- **Ajouts effectués** : **10 nouvelles œuvres** :
  - **3 poèmes d'auteurs tchétchènes** (`poems.json`, +3 → 429) ;
  - **3 chants folkloriques** (`songs.json`, +3 → 169, auteur `Халкъан`, `author_years: "Unknown"`) ;
  - **4 proses** (`prose.json`, +4 → 34) : **1 prose d'auteur tchétchène** (`Гайрбекова Маряьм`, essai)
    + **3 novellas folkloriques** (`Халкъан`, recueil *Нохчийн фольклор*).
- **Base après ajout** : **632 œuvres** (`poems=429`, `songs=169`, `prose=34`), **86 auteurs nommés**
  (+`Гайрбекова Маряьм`, transcription `AUTHOR_NAMES` ajoutée dans `src/utils/authorName.js` :
  `en: Gairbekova Maryam`, `fr: Gaïrbekova Maryam`).
- **Couverture texte plein** (`npm run validate-data`) : `ce=485`, `ru=143`, `en=57`, `fr=61`.
- **Catalogue** : `npm run generate-index` → **632/632**, 0 orphelin ; `src/data/catalog.test.js`
  `toBe(622)` → `toBe(632)` (les deux occurrences).
- `date_added = 2026-11-27` ; `year_written: null` (la date d'une page = mise en ligne, pas composition ;
  `1977 шо` de `ХӀинца яц…` reste noté dans `source`, non retenu en `year_written`) ; `author_years`
  conforme aux fiches existantes du même auteur ; `text_preview.ce` ≈ 160 car., `…` final si coupé ;
  strophes `\n\n`, prose `\n` collapsés, `external_links` `{label,url}` (URLs non-placeholder).
- **Tags** : vocabulaire existant uniquement (0 nouveau tag). Poèmes : `лирика`,`даймохк`,`безам`,`дог`.
  Chants : `илли`+`халкъан`+`хелхар`+`лирика`. Prose : `дийцар`+`халкъан`+`истори`(+`забаре`/`сатира`/`нана`),
  `эссе`+`нохчийн мотт`+`гӀиллакх`.

---

## 2. Palotchka (`docs/prompt-palotchka.md`) — dry-run + appliqué aux seules nouvelles fiches

Palotchka correcte : **`Ӏ` U+04C0** (CYRILLIC LETTER PALOCHKA). **Jamais** `1`, `I` latin, `l`, `|`,
`11`/`II`, **jamais U+04CF (`ӏ`)**, jamais hors `ce` (ni `ru/en/fr`, ni `id`, `author_years`,
`year_written`, `date_added`, `external_links` ; `source` peut citer un recueil cyrillique).
Règles appliquées (ordre) :
1. fusion `11`/`II` interne au mot → `Ӏ` ;
2. `1` collé à une lettre cyrillique → `Ӏ`, **pas** si adjacent à un chiffre (dates, années,
   numéros, ex. `1977 шо`, `1993 ш.`, `1 классе`, numéros de strophe/section) ;
3. `I`→`Ӏ`, `l`→`Ӏ`, `|`→`Ӏ`, même règle d'adjacence ; homoglyphes latins mêlés au cyrillique corrigés.

**Sources brutes** Orga utilisent `1`/`I` comme palotchka + vers `<p>` ; Маршо Радио utilise `I` ;
`c493`/`c447`/`mon95` utilisent `1`/`I`. **Résultat sur les 10 fiches ajoutées** : **0 résidu**
(`1`/`I`/`l`/`|` collé), **0 U+04CF**, **0 latin/cyrillique mêlé**, **0 palotchka hors `ce`**.

### Dry-run palotchka (global, `python3 scripts/verify_data.py`)

Aucune occurrence nouvelle. Les **10 résidus** ci-dessous sont **pré-existants sur `main`** et **non
modifiés** (conforme «0 problème nouveau vs main» ; cas ambigus non convertibles : `Аллах1*` dans un
texte **`ru`**, pas de palotchka en `ru` ; `l` latin mêlé `rlонах`/`xlонс`/`yьсrarlан`/`perӀа`
déjà documenté `docs/relecture-tchetchene-cles.md` ; `relecture` en attente de relecture native).
Aucune normalisation n'a été appliquée aux fiches pré-existantes.

| fichier | id | champ | extrait | résidu | nb |
|---|---|---|---|---|---|
| poems.json | berzloev-farz-doroga-v-ray | text.ru | `Аллах1а` / `Аллах1ом` / `Аллах1` / `Аллах1у` | `1`→`Ӏ` *non appliqué (texte `ru`)* | 4 |
| poems.json | berzloev-farz-doroga-v-ray | text_preview.ru | `Аллах1а` | `1` *non appliqué (texte `ru`)* | 1 |
| poems.json | berzloev-tebe-khvala | text.ru | `Аллах1` | `1` *non appliqué (texte `ru`)* | 1 |
| prose.json | mokhmad-mamakaev-hazachu-yoi-tulg | text.ce | `xlонс` / `yьсrarlан` / `rlонах` | `l` latin mêlé *OCR, à relire* | 3 |
| index.json | berzloev-farz-doroga-v-ray | text_preview.ru | `Аллах1а` | `1` *non appliqué (texte `ru`)* | 1 |
| **total** | | | | | **10 (baseline `main` = 10)** |

### Sauvegarde / retour arrière

- Originaux copiés : `src/data/backups/2026-11-27-palotchka/{poems,songs,prose,index}.json`
  (**non committé**, convention ; `src/data/backups/` ajouté à `.prettierignore` ;
  `git revert` suffit). Rollback palotchka : `cp src/data/backups/2026-11-27-palotchka/*.json src/data/`.
- Rollback œuvres : `git revert <commit>`.

---

## 3. Doublons détectés et écartés

Procédure : comparaison `id`, `(auteur, titre ce)`, premier vers, texte `ce` strictement identique,
similarité `SequenceMatcher` (même paramétrage que `scripts/verify_data.py`) contre **tout** le
catalogue (`poems`+`songs`+`prose`+`index`, `norm` NFKC lower + non-mots retirés), recoupement
`ru/en/fr`. **`python3 scripts/verify_data.py` : 0 doublon nouveau.** `npm run check` : 0 erreur.

Écartés (doublons réels trouvés pendant la recherche) :
- **Апти Бисултанов «Куьзганийн пардонех…»** (`radiomarsho.com/a/30662617.html`, `1993`) — **déjà
  au catalogue** `bisultanov-kuzganiyn-pardonekh`. (Présent aussi `chelibri.ru/writings/14`.)
- **c493 №22 «Баккхийчу наха хьо ваккха боху…»** — **déjà au catalogue**
  `folk-khelkharan-eshar-bakkhiichu-nakha`. Remplacé par **c493 №26** `folk-khelkharan-tohal-tarash`.
- **c493 №12 «КӀайн басар кхачийна…»** — déjà `folk-khelkharan-eshar-kain-basar`. (§ inventaire
  `docs/prompt-recherche-oeuvres.md` signalait «reste», mais catalogue à jour au 2026-11-27.)
- **c447 №4 «Ткъа со муха кӀант хета шуна?» / №5 «Ден весет» / №7 «Нийса кхел» / №8 «Хьекъале
  хӀусамнана»** — déjà `folk-tqa-so-mukha-kant-kheta-shuna`, `folk-den-veset`, `folk-niysa-khel`,
  `folk-khekale-khusamnana`. c447 №6 «Боьхна сатийсам» **non doublon** (non ajouté : limite 10).
- `docs/prompt-recherche-oeuvres.md` §4.2 **«Стигла-гIала*» (`radiomarsho.com/a/31495705.html`)**
  déjà écarté lot 4 (notes lexicales `*`) — reconsidéré, non ajouté.
- **c502 Сатира а, забаре а** — écarté (prose `diycarsh`, mais OCR mélange latin/cyrillique
  `aгlop`,`xlapa`,`Xloкxy`,`XIapa`,`CATИЙСАМ`,`1`,`T1e`… ; relecture native requise).
- **proza.ru «Майра к1ант» Вахит Хаджимурадов** (`proza.ru/2018/12/27/1207`, `cp1251`) et
  **stihi.ru «Туьйра. Дог майра баба»** (`stihi.ru/2013/08/19/4747`, `cp1251`) — prose d'auteur
  tchétchène réelle, **non ajoutée** : texte long + bruit OCR (`Бацалахьтхидожош`,`1`,`г1`,`t1`,`1`
  mêlés, `1 классе`, `1 сентябре`, `1у1-1ари-1у-у-у1`…) ne permettant pas une transcription
  **fidèle** automatisée ; à relire (piste §5).
- `proza.ru` encodage `cp1251` / sortie `I` palotchka : `webfetch` renvoie mojibake ; vérifié en
  `curl` + décodage `cp1251`. `proza.ru/2012/03/31/1830` «Нохчийн тхов» **n'est pas tchétchène**
  (texte russe) → écarté. **Prose d'auteur tchétchène en tchétchène reste rare en ligne** (cf. §5).
- **Шатлакхан Илли** (hymne CHT, Хаджи-Ахмед Кадыров/Умар Бексултанов), **`intercircass.org`**,
  **`oredrecordings.bandcamp.com`**, **`c502`**, **`c415`/`c418`**, **`c401`/`c227`**, **`c415` OCR**,
  **`dahar.ucoz.net`/`suleimanov-shovda`** — doublons / hors périmètre / OCR (déjà documentés
  `docs/prompt-recherche-oeuvres.md` §4, §5 + lots précédents).

**Cas ambigus non convertis** (palotchka) : `1`/`I`/`l`/`|` adjacent à un chiffre (années, numéros),
`1` dans un texte `ru`, `1` isolé/ponctuation, homoglyphes OCR `rl`/`yь`/`xl`/`per`… ; **rien de nouveau**
sur les fiches ajoutées. Liste baseline §2.

---

## 4. Œuvres ajoutées (10)

*Titres `ru/en/fr` = traductions littérales **non relues** (pour les titres uniquement ; les corps
restent tchétchènes). `…`/`*`/`***`/`****` de fin de titre conservés comme l'original.*

### Poèmes d'auteurs tchétchènes (`src/data/poems.json`, +3 → 429)

| ID | Auteur (`author_years`) | Titre `ce` / `ru` | `year_written` | Source / lien |
|---|---|---|---|---|
| `gatsaev-yukha-a` | СаьӀид Гацаев (null) | Юха а… / Снова… | null | СаьӀид Гацаев. Юха а… (Маршо Радио, онлайн-библиотека; Охан-бутт 08, 2022) — <https://www.radiomarsho.com/a/30451430.html> |
| `khasarov-sharani-samakh-ginakh` | ШаӀрани Хасаров (null) | Самах, гӀенах… / Тучи, дождь… | null | ШаӀрани Хасаров. Самах, гӀенах… (Маршо Радио; Дечкен-бутт 11, 2021) — <https://www.radiomarsho.com/a/31041954.html> |
| `khasarov-sharani-hintsa-yats` | ШаӀрани Хасаров (null) | ХӀинца яц хьо хьалха санна… / Теперь ты уже не тот… | null | ШаӀрани Хасаров. ХӀинца яц… (Маршо Радио; Дечкен-бутт 11, 2021; `1977 шо` noté) — <https://www.radiomarsho.com/a/31041956.html> |

*Sources : Маршо Радио имена авторов `Гацаев СаьIид`, `Хасаров ШаIрани` (latin `I`) → `СаьӀид`,`ШаӀрани`
(U+04C0), conforme catalogue. Корпус автора `ШаIрани Хасаров` source `***`/`****` conservés.*

### Chants folkloriques (`src/data/songs.json`, +3 → 169 ; `Халкъан`, `Unknown`)

Recueil : **Нохчийн фольклор** (*Чеченский фольклор*), composé **Ш. А. Джамбеков**, Грозный :
«Книга», 1991 (ISBN 5-7666-0061-5). **Compilateur ≠ auteur.** Section **Хелхаран эшарш** (chants de
travail/эшарш). `source` : `Нохчийн фольклор (сост. Ш. А. Джамбеков, Грозный: «Книга», 1991). Хелхаран эшарш, № N`.
Tags `илли`,`халкъан`,`хелхар`,(`лирика`).

| ID | № | Titre `ce` / `ru` | Source |
|---|---|---|---|
| `folk-khelkharan-kora-dulkhal-kor` | c493 №11 | Кора дуьхьал кор делара хьан… / Напротив двери дверь… | <https://orga.narod.ru/folklor/c493.htm> |
| `folk-khelkharan-khovshiyn-dovlal` | c493 №15 | Когаш ма хаза лелабо… / Ноги изящно двигаются… | <https://orga.narod.ru/folklor/c493.htm> |
| `folk-khelkharan-tohal-tarash` | c493 №26 | Тоха тӀараш, довла хелха… / Руки внутрь, ноги внутрь… | <https://orga.narod.ru/folklor/c493.htm> |

*`external_links` : `Орга — Хелхаран эшарш` + `Нохчийн фольклор`. Original `1`→`Ӏ` (`к1орни`→`кӀорни`,
`не1`→`неӀ`,`наь1`→`наьӀ`,`ч1`→`чӀ`,`к1`→`кӀ`,`т1`→`тӀ`,`д1аг1ор`→`дӀагӀор`…). Verse breaks source ;
`;` conservé ; pas de correction orthographique (`Когаш ма…лелабо`,`К1отархойн`, etc.).*

### Proses (`src/data/prose.json`, +4 → 34)

**(a) Prose d'auteur tchétchène** :
| ID | Auteur | Titre `ce` / `ru` | Source |
|---|---|---|---|
| `gairbekova-nohchiyn-mott-san-dozalla` | Гайрбекова Маряьм (null) | Нохчийн мотт – сан дозалла! / Чеченский язык — моё достояние! | Гайрбекова Маряьм. «Нохчийн мотт – сан дозалла!» (Министерство образования и науки ЧР, Материалы на чеченском языке, онлайн) — <https://mon95.ru/press-center/materialy-na-chechenskom-yazyke/gairbekova-m-nokhchiin-mott-san-dozalla> |

Essai `эссе` + `нохчийн мотт` + `гӀиллакх`. `author` page titre `Гайрбекова М.` ; bas de page
`Гайрбекова Маряьм`. `1`/`I`→`Ӏ`. Citations `К.Паустовский`,`Л.Н.Толстой`,`Кунта-Хьажас` conservées ;
`–`,`…`,`«»` conservés ; encodage source UTF-8. Notice `Вернуться к…`, menu exclus.

**(b) Novellas folkloriques** (`Халкъан`, `Unknown`, `дийцар`+`халкъан`+`истори`…, `c447 Халкъан новеллаш`) :
| ID | № | Titre `ce` / `ru` | Source |
|---|---|---|---|
| `folk-novella-suddhochun-khel` | c447 №1 | Суьдхочун кхел / Право судьи | <https://orga.narod.ru/folklor/c447.htm> |
| `folk-novella-mollanash` | c447 №2 | Молланаш / Муллы | <https://orga.narod.ru/folklor/c447.htm> |
| `folk-novella-nenan-hyehar` | c447 №3 | Ненан хьехар / Наставление матери | <https://orga.narod.ru/folklor/c447.htm> |

`source` `Нохчийн фольклор… Халкъан новеллаш, № N`. `external_links` `Орга — Халкъан новеллаш`+`Нохчийн фольклор`.
Original `1`/`I`→`Ӏ`. Prose : `\n` source collapsés en texte fluide ; ponctuation/orthographe intactes
(`аьлла.X`,`къайлавала.Веана`,`д1а-схьа`, etc. tel quel, hors `1`→`Ӏ`). Titre-tête `1. СУЬДХОЧУН КХЕЛ`
retiré ; `ЦХЬАЬНА…` corps conservé. *Note : novellas folkloriques `Халкъан`, pas une attribution nominative.*

---

## 5. Points à relire par un locuteur natif + pistes restantes

- Titres `ru/en/fr` ajoutés **non relus**. `СаьӀид`/`СаьIид`, `ШаIрани`/`ШаӀрани`, `Гацаев СаьIид`→`СаьӀид Гацаев`,
  `Хасаров ШаIрани`→`ШаӀрани Хасаров`, `Гайрбекова М.`/`Гайрбекова Маряьм`, `к1`→`кӀ`,`т1`→`тӀ`,`д1`→`дӀ`,
  `г1`→`гӀ`,`х1`→`хӀ`,`ц1`→`цӀ`,`ч1`→`чӀ`,`наь1`→`наьӀ`,`йо1`→`йоӀ`,`1аш`→`Ӏаш`,`1`→`Ӏ`… conformes
  catalogue/U+04C0, **non vérifiés natif**.
- Orthographe source conservée intentionnellement : `Мохь тоьхнна` (`gatsaev-yukha-a`),
  `ХӀинццалц` + `1977 шо` (`khasarov-sharani-hintsa-yats`), `Безам миэла` vs `Безам хьеста` (refrain
  `Самах…` variante source), `ма Ӏа ло`, `къарзбеш`, `Заза Ӏенош`, `ХӀинццалц`, `Когаш ма хаза лелабо`,
  `КӀотархойн`, `НаьӀаран`, `хилла.X`,`къайлавала.`,`д1а`,`т1`,`x`,`I`,`1` OCR **hors** `1`→`Ӏ`
  adjacent… : vérifier sur imprimé.
- `docs/relecture-tchetchene-cles.md` baseline `mokhmad…`,`hajimuradov-tsergyakkkhar`,`berzloev*`
  (non touchés lot 4).
- **Pistes non convertibles / à relire natif** : `Стигла-гIала*` + notes `*` (`radiomarsho` `31495705`),
  `Майра к1ант` (proza `1207`), `Дог майра баба` (stihi `4747`), `c502` latin/cyrillique, `c457`/`c471`
  longues complaintes variante-riches, `c521` chants de parti soviétique (arbitrage éditorial
  Stalin №24–31,42), `c447` №6/9 + `c447` reste, `c493` reste, `c454` OCR `гог1у`, `c415/c418` OCR,
  `c401/c227` corruption colonne uCoz, `prose` d'auteur tchétchène rare. **Ne pas ajouter sans
  relecture native + dédup.**

---

## 6. Trace du travail effectué (méthode, fichiers, commandes)

**But.** Recherche approfondie internet + ajout ~10 œuvres (poèmes / chants folkloriques / prose
d'auteurs tchétchènes) **sans doublons**, **palotchka `Ӏ` U+04C0** correct, **trace écrite** +
**liens consultés** + **liens à consulter potentiellement après**.

**Dépôt.** `main`, branche de session. Aucune modification des fiches pré-existantes (vérifié diff
contre `src/data/backups/2026-11-27-palotchka/`). Fichiers modifiés :
- `src/data/poems.json` (+3), `src/data/songs.json` (+3), `src/data/prose.json` (+4),
  `src/data/index.json` (régénéré, +10) ;
- `src/data/catalog.test.js` (`622`→`632` ×2) ;
- `src/utils/authorName.js` (`Гайрбекова Маряьм`) ;
- `.prettierignore` (`src/data/backups/`) ;
- ce rapport `docs/ajout-oeuvres-2026-11-27-lot4.md` ;
- `docs/prompt-recherche-oeuvres.md` (inventaire §4 + `mon95`, `c447`, `c493`, total 632, dernière
  mise à jour) ; `docs/prompt-recherche-oeuvres.md` mis à jour si nouvelles sources ;
- **non committé** : `src/data/backups/2026-11-27-palotchka/`.

**Recherche.** `websearch` + `webfetch` + `curl` ; sources priorisées `docs/prompt-recherche-oeuvres.md`
§4. Sources encodées `cp1251` (Orga, proza, stihi) décodées `cp1251`, `mon95`/radiomarsho UTF-8.
Orga `<p>`/`<br>`, `***`, `\r\n`, `&nbsp;`, bannières uCoz exclues. Texte extrait `div.text` /
`class="text"` / article ; notices, signatures, navigation retirées. Corpus c447/c493 extrait +
normalisé par script. **Dédup** `norm` NFKC + `SequenceMatcher` (seuils `verify_data.py`) + `verify_data.py`.
**Palotchka** `docs/prompt-palotchka.md` dry-run + appliqué aux nouvelles fiches (transaction mémoire→écriture),
sauvegarde `src/data/backups/2026-11-27-palotchka/`, **rollback** `git revert <commit>` /
`cp src/data/backups/2026-11-27-palotchka/*.json src/data/`.

**Commandes (résultats).**
```
npm run generate-index        # 632/632, +10, 0 orphelin, 0 resync
npm run validate-data         # ✅ 0 erreur ; 1 avertissement pré-existant (mokhmad… rӀ, baseline)
npm run check                 # ✅ validate-data + eslint + vitest 45/45 (632)
npm run format:check          # ✅ prettier
npm run build                 # ✅ vite + prerender SEO 725 pages + llms-full.txt
python3 scripts/verify_data.py# baseline main = 10 résidus ; +0 nouveau ; 0 doublon ; index cohérent
                              # (exit 1 pré-existant sur main ; «0 problème nouveau» conforme)
```
`npm run lint` + `npm run test` inclus dans `npm run check` ✅.

---

## 7. Liens consultés (cette session)

**Catalogue / conventions / outillage (repo).**
- `README.md` ; `docs/prompt-recherche-oeuvres.md` ; `docs/prompt-palotchka.md` ;
  `docs/relecture-tchetchene-cles.md` ; `docs/ajout-oeuvres-2026-11-27-lot3.md` ;
  `docs/ajout-oeuvres-2026-11-27-lot2.md` ; `docs/ajout-oeuvres-2026-11-26-lot2.md` ;
  `docs/ajout-folklore-poemes-chants-2026-11-27.md` ; `docs/ajout-folklore-poemes-2026-10-13.md` ;
  `docs/ajout-poemes-tchetchenes-2026-11-10.md` ; `docs/ajout-poemes-tchetchenes-2026-08-29.md` ;
  `docs/ajout-restauration-poemes-en-fr-2026-10-14.md` ;
- `scripts/verify_data.py`, `scripts/validate-data.mjs`, `scripts/generate-index.mjs` ;
  `src/data/poems.json`,`songs.json`,`prose.json`,`index.json`,`catalog.test.js`,`catalog.js` ;
  `src/utils/authorName.js`. `.github/workflows/ci.yml`,`.gitignore`,`.prettierignore`.

**Sources littéraires (recherche + vérification verbatim).**
- **Орга «Нохчийн фольклор»** : <https://orga.narod.ru/folklor/main.htm> ;
  **c447** <https://orga.narod.ru/folklor/c447.htm> ; **c493** <https://orga.narod.ru/folklor/c493.htm> ;
  (consultées/écartées pour pistes : `c3`,`c5`,`c8`,`c20`,`c27`,`c36`,`c39`,`c83`,`c97`,`c115`,`c127`,
  `c141`,`c162`,`c190`,`c202`,`c209`,`c227`,`c401`,`c415`,`c418`,`c435`,`c454`,`c457`,`c471`,`c488`,
  `c490`,`c498`,`c502`,`c516`,`c521`,`c549`,`geshaev/geshaev_3.htm`…) ;
  *Чеченский фольклор*, сост. **Ш. А. Джамбеков**, Грозный : «Книга», 1991.
- **Маршо Радио** : <https://www.radiomarsho.com/> ; <https://www.radiomarsho.com/z/17538> ;
  <https://www.radiomarsho.com/z/17581> ; <https://www.radiomarsho.com/z/17538?p=1> … ;
  `a/30451430.html` (**Гацаев Юха а…**) ; `a/31041954.html` (**Хасаров Самах, гIенах…**) ;
  `a/31041956.html` (**Хасаров ХIинца яц…**) ; (consultées/écartées : `a/31495705`,`a/30662617`,
  `a/31041960`,`a/31495714`,`a/31804907`,`a/31520745`,`a/29470970`,`a/31804920`,`a/31804926`,
  `a/29472792`,`a/31495720`,`a/31495711`,`a/31804911`,`a/31804934`,`a/31804917`,`a/31804931`,
  `a/30401849`,`a/28362049`,`a/31759190`,`a/31759199`,`a/28125878`,`a/28125870`,`a/30875919`,
  `a/31804907`,`a/31034404`,`a/31495714`,`a/31495705`,`a/31041954`,`a/31041956`,`a/31041960`,
  `a/31038870`,`a/31038867`,`a/31034408`,`a/28980904`,`a/27387696`,`a/27368820`,`a/30451430`,…).
- **Министерство образования и науки ЧР — Материалы на чеченском языке** :
  <https://mon95.ru/press-center/materialy-na-chechenskom-yazyke/gairbekova-m-nokhchiin-mott-san-dozalla>
  (**Гайрбекова Маряьм «Нохчийн мотт – сан дозалла!»**).
- **Chelibri** : <https://chelibri.ru/writings>, `/writings/1`,`/2`,`/3`,`/4`,`/5`,`/6`,`/7`,`/8`,`/9`,
  `/10`,`/11`,`/12`,`/13`,`/14` (consultées ; doublons/pistes). **Abrek.org** <http://abrek.org/...>.
- **Нохчалла.com** : <https://nohchalla.com/literatura>, `/category/literatura`, `/chechenskie-stihi`,
  `/folklor`, `/tuiranash`, `/dukh-vajnakhov-v-mifakh-i-legendakh`, `41-beriyn-folklor`,
  `1821-vakhi-ozdingallekh-latsna-dijtsarsh`, `1560-poisk-bessmertiya`, `1585-serdtse-materi`,
  `1581-aul-bezumtsev`, `115`, `540`,`671`,`1821`,`1560`,`1585`,`41`,`1821`,`c447`,… (consultées/pistes).
- **Waynakh Online** : <https://www.waynakh.com/> `/fr`,`/eng`,`/fr/category/paroles-de-chansons`,
  `/fr/category/poemes`,… (consultée). **Стихи.ру** <https://stihi.ru/>, pages `2023/...`,`2013/08/19/4747`,
  `2011/12/01/9970`,`2020/04/13/4324`,`2017/11/15/8327`,… `site:stihi.ru нохчийн мотт`. **Proza.ru**
  <https://proza.ru/>, `proza.ru/2018/12/27/1207`,`proza.ru/2012/03/31/1830`,`proza.ru/2023/01/11/73`,
  `proza.ru/2019/12/07/1325`,`site:proza.ru нохчийн`,… `cp1251`. **`orga.narod.ru/geshaev`**. **`groznycity.ru`**
  «Чеченская народная поэзия XIX–XX вв.». **`maxima-library.org`**. **`poemhunter.com`**. **`infourok.ru`**.
  **`nasha-shkola.info`**. **`daymohk-gazet.ru`**. **`checheninfo.ru`/`abrek.org`**. **`urok95`**. **`govzalla.com`**.
  **`lyricstranslate`**,`en-academic`,`dic.academic.ru`,`bandcamp`,**`intercircass.org`**,
  **`teatrnuradilova.ru`**,`neihimoon.livejournal.com`,`vk.ru`,`instagram`,`youtube`,`rusneb.ru`,`russp.ru`,
  `chspu.ru`,`dokumen.pub`,`infolesson`,`infourok`,`calameo`,`apsnyteka`,`academia.edu`,`mon95`,`moin.chr`,…
- **Requêtes `websearch`.** `нохчийн мотт`, `site:stihi.ru нохчийн мотт`, `site:proza.ru нохчийн`,
  `site:orga.narod.ru новелла`, `чеченская проза на чеченском языке полный текст`, `новелла нохчийн мотт автор`,
  `"нохчийн моттахь" дийцар`, `чеченские сказки`, `Шатлакхан Илли`, `Чеченская народная поэзия`, `site:chelibri.ru`,
  `site:nohchalla.com`, `Гайрбекова`, `Нохчийн мотт сан дозалла`, … (listes tronquées).

---

## 8. Liens potentiellement à consulter après (pistes pour lots suivants)

*(non dépouillés / à vérifier ; **dédup + relecture native + palotchka avant ajout**).*

### Folklore Орга (`orga.narod.ru/folklor`) — reste documenté + nouveau constat lot 4
- **c447** №6,№9 + reste ; **c493** №4–9,11,12,15,16,17,19,20,22,24,25,26 reste filtré doublons
  (№11,15,22,26 déjà ; №16 substituts ambigus `XIe`,`1`,`I`,`l` ; №17,25,26 fragments relire).
- **c490 Сатира** №8,№12–15 ; **c498** épuisée ; **c488 Забаре** ✅ ; **c454** №6 OCR `гог1у` ;
  **c498** №1 `TIepa`.
- **c457 Ӏер-дахар** №4,5,6,9,10,11,12,14,17–34 (comparer `folk-ier-dakharan-eshar-nanna`).
- **c471 Безаман** №4,5,9,10,11,12,14,15,16,17,18,19,20,21,23,24,25,26,27,28,30–37.
- **c521 Советан заманан** №3,5–59 **(chants de parti soviétique ; arbitrage Stalin №24–31,42 avant
  ajout)**. **c5** I-2,I-3,II-2,II-4,III reste. **c27 Тийжамаш** №1–12,15–19 reste.
  **c209 Халкъан тидамаш** reste (№1,3–7,9–25 + rubriques ; **proverbes une-ligne → `prose.json`
  arbitrage**). **c20 Къинхьегаман** №3,5,10–11,13,16–17,19–21,24–25,27–31 + final №2,3,5.
  **c36 Сардамаш** №1–4,8,10–12 + anecdotes prose. **c141 Берийн** reste + comptines/questions
  (comptines → `prose`). **c435 узамаш** épuisée. **c415/c418** OCR ❌. **c401/c227** uCoz colonne ❌.
- **Prose Орга** (`prose.json`) : **c8 Мифаш**, **c39 Наьрт-аьрстхойн**, **c83 Хьадисаш**, **c97/c127/c162
  Туьйранаш**, **c115** contes animaux reste, **c447** reste, **c3 Халкъан исбаьхьаллин хазна**
  (proverbes→prose), **c516 Аларш**, **c549 Билгалдаккхар**, **c190 Кицанаш**, **c202 Х1етал-металш**,
  **c36/c502** anecdotes, **c447/`c502`** prose jokes, **c141** questions-réponses/comptines.
- **Sources déjà mobilisées** à retravailler : `chelibri`, `nohchalla` légendes/поэзия reste,
  `waynakh`, `stihi.ru`/`proza.ru`, `umarlavina.narod.ru`, `nasha-shkola.info`, `abrek.org`,
  `groznycity.ru`, `maxima-library.org`, `poemhunter.com`, `infourok.ru`, `daymohk-gazet.ru`,
  `checheninfo.ru`, `daghestan...`, `mon95.ru` (autres pièces `Материалы на чеченском языке`).

### Маршо Радио
- `/z/17538` `p=4`+ ; `/z/17581` (Сулейманов, épuisé poèmes) ; `/z/17538` 2019–2020 ;
  ШаӀрани Хасаров `31495705`,`31041960`,`31038870`,`31038867`,`31034408`,`31041954`,`31041956`(déjà) ;
  Апти Бисултанов `28980904`,`27387696`,`27368820`,`30662617`(doublon) ; СаьӀид Гацаев `30451430`(déjà) ;
  `31495714`,`31804907`,`31520745`,… ; `nohchalla` `Алла Дудаева`,`Зелимхан Мусаев`,`Мансур Дагаев`,`Берийн`,…

### Prose d'auteur tchétchène en tchétchène (rare — à approfondir)
- **Вахит Хаджимурадов** : proza `Майра к1ант` (`proza.ru/2018/12/27/1207`, `cp1251`, `26.12.18`),
  stihi `Туьйра. Дог майра баба` (`stihi.ru/2013/08/19/4747`, `cp1251`), + 4 prose déjà catalogue.
- **Гайрбекова Маряьм** : autres `Материалы на чеченском языке` `mon95.ru`.
- **Хабаев Исмаил**, **Лёма Ибрагимов**, **Апти Бисултанов**, **Петимат Петирова**, **СаӀид Бадуев**,
  **Муса Ахмадов**, **Саид-Хасан Ойбуев**, **Ильман Юсупов** : `chelibri`, `radiomarsho`, `nohchalla`.
- **stihi/proza** nommés `Арзу Банжаев`,`Раиса Абубакарова`,`Мадина Халикова`,`Дахо Алви`,`Зара Болтукаева`,
  `Айза Барзанукаева`,`Айза Резванова`,`Абу Исмаилов`,`Хасаин Идрисов`,`Фариза Цалдаева`,`Шарип Цуруев`,…
  (vérifier `prose` vs `poème` + tchétchène + doublon + relecture).
- Recouper `docs/prompt-recherche-oeuvres.md` §8-style + `docs/relecture-tchetchene-cles.md` avant ajout.

---

## 9. Vérifications vertes

- `npm run generate-index` → 632/632 ;
- `npm run validate-data` → ✅ 0 erreur (1 avertissement pré-existant `mokhmad… rӀ`) ;
- `npm run check` (`validate-data`+`lint`+`test`) → ✅ 45/45, 632 ;
- `npm run format:check` → ✅ ; `npm run build` → ✅ (725 pages prerender + llms-full.txt) ;
- `python3 scripts/verify_data.py` → **0 problème nouveau vs `main`** (baseline 10 inchangée ;
  `src/data/backups` exclu formatting ; index↔full 0 orphelin) ;
- **Aucune œuvre inventée** ; **aucune transcription « corrigée »** hors `1/I/l/|/11→Ӏ`+homoglyphes+
  espaces HTML ; **aucun doublon** ; **palotchka `Ӏ` U+04C0** ; **trace + liens** ci-dessus.
