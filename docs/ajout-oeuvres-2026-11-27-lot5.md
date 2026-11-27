# Ajout d'œuvres littéraires tchétchènes — Lot 5 (2026-11-27)

> Recherche approfondie sur internet, **sans inventer aucune œuvre**. Conventions :
> [`docs/prompt-recherche-oeuvres.md`](prompt-recherche-oeuvres.md) +
> [`docs/prompt-palotchka.md`](prompt-palotchka.md) + [`README.md`](../README.md) +
> lot précédent [`docs/ajout-oeuvres-2026-11-27-lot4.md`](ajout-oeuvres-2026-11-27-lot4.md).
> Corps **recopié mot à mot** (tchétchène ; `text.ru/en/fr` restent `null`). Seules modifications :
> **substituts de palotchka** → `Ӏ` (U+04C0), homoglyphes latins mêlés, espaces parasites HTML.
> **Aucune correction d'orthographe de l'original.** **Aucun doublon.**

---

## 1. Résumé

- **Base avant** : **632** (`poems=429`,`songs=169`,`prose=34`). **Après : 652** (+20 ; `poems=433`,`songs=181`,`prose=38`).
- **+4 poèmes d'auteur** (`ШаӀрани Хасаров` ×4, `author_years` null) ; **+12 chants folkloriques** `Халкъан` ;
  **+4 proses** `Халкъан`. **Aucun nouvel auteur nommé** ; tags existants uniquement.
- **`npm run generate-index`** → 652/652, 0 orphelin ; `src/data/catalog.test.js` `toBe(632)`→`toBe(652)` (×2).
- `date_added=2026-11-27` ; `year_written=null` ; `author_years` conforme ; `text_preview.ce` ~160,`…` ; `external_links` `{label,url}` ;
  `external_links` `Орга`,`Маршо Радио`. Couverture `npm run validate-data`. Sauvegarde `src/data/backups/2026-11-27-palotchka-lot5/`.

---

## 2. Œuvres ajoutées (20)

### Poèmes d'auteur (`src/data/poems.json`, +4 → 433)

| ID | Auteur | Titre `ce` | Source / lien |
|---|---|---|---|
| `khasarov-sharani-khoni-khakha-khillera-adam` | ШаӀрани Хасаров | Хьо-м хьаха хиллера адам… (`1993 ш.` noté ; `***`,`И`,`ЖовхIар`,`пис`… source conservés, `1`/`I`→`Ӏ`) | Маршо Радио `a/31041960.html` |
| `khasarov-sharani-kerla-sho` | ШаӀрани Хасаров | Керла шо | Маршо Радио `a/31038867.html` |
| `khasarov-sharani-hintsa` | ШаӀрани Хасаров | ХӀинца (`2015 шо` noté ; `tI`,`I`,`DI`→`тӀ`,`Ӏ`,`дӀ`,`1`→`Ӏ`) | Маршо Радио `a/31034408.html` |
| `khasarov-sharani-soelza-gale` | ШаӀрани Хасаров | Соьлжа-гӀале (poème «Царах ловзурш…» ; `2013 шо` noté ; `I`,`tI`,`dI`,`цI`→`Ӏ`,`тӀ`,`дӀ`,`цӀ`) | Маршо Радио `a/31038870.html` |

`year_written=null` ; les `1993 ш.`/`2015 ш.`/`2013 шо` restent notés en `source`. `title.ru/en/fr` = traduction littérale **non relue**. `ШаIрани`→`ШаӀрани`.

### Chants folkloriques `Халкъан` (`src/data/songs.json`, +12 → 181)

Recueil **Нохчийн фольклор**, сост. **Ш. А. Джамбеков**, Грозный «Книга» 1991. Section **`c521.htm` «Советан
заманан фольклор»** (Орга). `author_years="Unknown"`. Tags `илли`,`халкъан`,`фольклор`. `title.ce` = incipit
(+`…` si coupé) ; `title.ru/en/fr=null`. `source` `… Советан заманан фольклор, № N`. Original `1`/`I`/`l`→`Ӏ` ;
`\n` verse source ; pas de correction orthographe. **Filtre éditorial** : **non retenu Staline/Lénine/
комсомол/пионер/колхоз/парти** (`docs.prompt…§4.1` arbitrage), OCR latin/cyrillique, `1`/`I`/`l` non convertibles.

| ID | № | Incipit (`ce`) |
|---|---|---|
| `folk-soviet-era-30-talin-tkho-dakharkh-dokhi-akh` | 30 | Талин, тхо дахарх дохи ахь, |
| `folk-soviet-era-59-kharsa-k-uzhal-khalakhokkhush` | 59 | Хьаьрса кӀужал хьалахьоькхуш, |
| `folk-soviet-era-48-uyre-dika-khulda-khan` | 48 | Ӏуьйре дика хуьлда хьан, |
| `folk-soviet-era-29-kor-kkhokkhiyn-ben-bokhi-akh` | 29 | Къор-кхокхийн бен бохи ахь, |
| `folk-soviet-era-31-uyre-yokhniy-khaiy-tekha` | 31 | Ӏуьйре йоьхний хаьий-техьа, |
| `folk-soviet-era-22-bezhnash-okhush-zh-alesh-ts-iyzash` | 22 | Бежнаш Ӏоьхуш, жӀаьлеш цӀийзаш, |
| `folk-soviet-era-34-d-ay-skhay-lesta-orgu-sanna` | 34 | ДӀай-схьай леста Оргу санна, |
| `folk-soviet-era-5-uchetchikana-lekkhna-yish` | 5 | УЧЕТЧИКАНА ЛЕКХНА ЙИШ |
| `folk-soviet-era-56-buysa-kh-okkkhul-ekha-khilchi` | 56 | Буьйса хӀоккхул еха хилчи, |
| `folk-soviet-era-45-stiglakhula-kema-dag-akh` | 45 | Стиглахула кема дагӀахь, |
| `folk-soviet-era-43-yo-dela-vezin-dela` | 43 | Йо дела, везин дела, |
| `folk-soviet-era-44-busa-kkheta-malkh-tsa-kkhuu` | 44 | Буса кхета малх ца кхуьу, |

**№24–31,42 (Staline) NON retenus** conformément `docs/prompt-recherche-oeuvres.md`. **№3** `Б1аьстенан зезагаш ва хьеста`
reste (filtre/OCR `1`,`гla`,`1усман`,`T1e`,`xlapa`,`CAT`… + dédup vs `folk-soviet-era-basten-zezaga` ; relecture).
`c490` Сатира **consultée** ; **non retenue** (doublons catalogue + filtre ; reste lot dédié). 

### Proses `Халкъан` (`src/data/prose.json`, +4 → 38)

| ID | № / source | Titre `ce` |
|---|---|---|
| `folk-novella-boenna-satiysam` | `c447.htm` Халкъан новеллаш №6 | Боьхна сатийсам |
| `folk-novella-keloccho-yina-khel` | `c447.htm` №9 | Келочо йина кхел |
| `folk-myth-7-khunan-yo` | `c8.htm` Мифаш №7 | ХЬУЬНАН ЙОӀ |
| `folk-myth-2-akkharoyn-u` | `c8.htm` Мифаш №2 | АКХАРОЙН ӀУ |

Tags `дийцар`,`халкъан`,`истори`(+`туьйра` myths). `title_ce` titre source `Мифаш` (myth name uppercase source).
`1`/`I`→`Ӏ`; prose `\n` collapsés ; notices/pieds `*`,`**`,`***`,`____` exclus ; `title` myth conservé. **Pas de prose d'auteur nommé nouveau en lot 5**
(scarcité + OCR + doublons lot 4 ; `Майра к1ант`,`Дог майра баба`,`Стигла-гIала*`,`c502`,`c3`,`c190`,`c202`,`c516`,`c549`… non ajoutés).

---

## 3. Palotchka (`docs/prompt-palotchka.md`)

`Ӏ` **U+04C0** ; **jamais** `1`,`I`,`l`,`|`,`11`/`II`,**U+04CF**, jamais hors `ce`. Ordre : fusion `11`, substitut
**collé cyrillique** (pas adjacent chiffre/date/numéro/`1977`,`1993`,`2013`,`2015`,`№`,`1 классе`,`XIe`…),
`1→Ӏ`,`I→Ӏ`,`l→Ӏ`,`|→Ӏ`, homoglyphes ; **orthographe intacte**. **`python3 scripts/verify_data.py` : 0 résidu nouveau sur les 20**,
**0 U+04CF**, **0 latin/cyrillique mêlé**, **0 palotchka hors `ce`**. `npm run check` + `format` ✅. **Baseline `main` = 10 résidus inchangés**
(`berzloev*`,`mokhmad…` ; `1` texte `ru`,`l` OCR ; `docs/relecture-tchetchene-cles.md`). **Aucune fiche pré-existante modifiée**. 
Sauvegarde `src/data/backups/2026-11-27-palotchka-lot5/`. `git revert <commit>` ; `cp ...backups/2026-11-27-palotchka-lot5/*.json src/data/`.

---

## 4. Doublons écartés / cas non convertis

Dédup `id`,`(auteur,titre ce)`,premier vers,`ce` identique,**`SequenceMatcher`** (`verify_data.py`) vs **652** + `ru/en/fr` ;
`is_dup` pendant extraction. **0 doublon** (`verify_data.py`). Écartés (déjà catalogue) : `folk-satiran-eshar-*`,`folk-soviet-era-1/2/4`,
`folk-khelkharan-*`,`folk-novella-*1-3`,`folk-emkal`,`folk-khillane-tskhogal`,`folk-sutaralla`,`bisultanov-iindagiash`,
`bisultanov-as-khan-chabaneh-gajga-jucur-ju`,`bisultanov-bettasa`,`musaev-zelimkhan-grozny`,`folk-soviet-era-basten-zezaga`,…
+ `Стигла-гIала*`,`Майра к1ант`,`Дог майра баба`,`c502`,`c454 №6`,`c415/c418`,`c401/c227`,`proza Нохчийн тхов`,`intercircass`,`bandcamp`,… 
**Cas ambigus non convertis** : `1` adjacent chiffre/`ru`,`1` isolé,`XIe`,`TIepa`,`гla`,`xlapa`,`Xlo`,`yь`,`rl`,`per`,`1усман`,`T1e`,`CAT`,`1` dates… → relecture.

---

## 5. Points à relire + pistes

- **Relecture native Chechen** : orthographe source conservée (`УЧЕТЧИКАНА`,`ХЬУЬНАН ЙОӀ`,`АКХАРОЙН ӀУ`,`Кийрахь дог .`,`Денош-`,`тIейиллина`,`дIай`,`гIента`,`Оргу`,`ЖовхIар`,`пис`,`маьӀиг`,`хьоь`,`мохь`,`дагIахь`,`кхуьу`,…), 
  `title.ce` incipit (pas titre officiel si Orga n'en donne pas), `1`/`I`→`Ӏ`, spacing. **Staline/Lénine arbitrage.** `c521` soviet ≠ `сатира`.
- baseline `docs/relecture-tchetchene-cles.md` + `mokhmad…`.
- **Pistes** : `c521` №3/5–59 filtrés + arbitrage, `c490` №8/12–15 dédup, `c457`/`c471`, `c447` reste, `c8` reste, `c498`..., `c141`, `c454`, `c435`, `c516`,`c549`,`c3`,`c190`,`c202`,`c502`,`c36`,`c36`,`c39`,`c83`,`c97`,`c127`,`c162`,`c115`,… ;
  Маршо Радио `31495705`,`31041960`(déjà),`31038870`(déjà),`31038867`(déjà),`31034408`(déjà),`31495714`,`31804907`,`28980904`,`27387696`,`27368820`,`30451430`,`z/17538 p=4`,`z/17581`,… ; 
  **`Майра к1ант`,`Дог майра баба`,`Стигла-гIала*` relecture native** ; mon95, nohchalla, waynakh, stihi/proza, chelibri, abrek, nohchalla `Алла Дудаева`,`Зелимхан Мусаев`,`Мансур Дагаев`,… ; **prose d'auteur tchétchène en tchétchène rare**.

---

## 6. Trace du travail effectué

**Méthode.** `websearch`,`webfetch`,`curl` + décodage `cp1251` (Orga/proza/stihi) /UTF-8 (radiomarsho/mon95). Orga `<p>`,`<br>`,`***`,`\r\n`,`&nbsp;`,bannières uCoz exclues ; extraction `class=text`. 
**Chants/prose auto-extraits** `split_numbered`/`split_novellas`, filtres (longueur, OCR latin, Staline/Lénine/комсомол/пионер/колхоз/парти), `is_dup`, `norm` NFKC, normalisation `norm_ce`. 
**Poèmes nommés** vérifiés verbatim radiomarsho. **Palotchka** appliqué aux 20 nouvelles ; transaction mémoire→écriture ; sauvegarde. 
**Fichiers** : `src/data/{poems,songs,prose,index}.json`, `src/data/catalog.test.js`, `docs/ajout-oeuvres-2026-11-27-lot5.md`, `docs/prompt-recherche-oeuvres.md` ; **non committé** `src/data/backups/2026-11-27-palotchka-lot5/`.
**Commandes** : `npm run generate-index`(652) ; `npm run validate-data`(0 err) ; `npm run check`(45/45) ; `npm run format:check` ; `npm run build`(745) ; `python3 scripts/verify_data.py`(+0 new vs main baseline 10).
**Rollback** `git revert <commit>`.

---

## 7. Liens consultés (session)

- conventions `README`,`docs/prompt-recherche-oeuvres`,`docs/prompt-palotchka`,`docs/relecture-tchetchene-cles`,`docs/ajout-*lot3/4`,`docs/ajout-folklore*`,`docs/ajout-poemes*`,`scripts/verify_data.py`,`validate-data.mjs`,`generate-index.mjs`,`src/utils/authorName.js`,`catalog*`,`.prettierignore`,`.gitignore`,CI.
- **Орга Нохчийн фольклор** `orga.narod.ru/folklor/main.htm`, **c447**, **c490**, **c493**, **c521**, **c8**, (+ `c3`,`c5`,`c20`,`c27`,`c36`,`c39`,`c83`,`c97`,`c115`,`c127`,`c141`,`c162`,`c190`,`c202`,`c209`,`c227`,`c401`,`c415`,`c418`,`c435`,`c454`,`c457`,`c471`,`c488`,`c498`,`c502`,`c516`,`c549`,`geshaev`…), *Джамбеков 1991*.
- **Маршо Радио** `radiomarsho.com`,`z/17538`,`z/17581`, `a/31041960`,`a/31038867`,`a/31034408`,`a/31038870`, `a/31041954`… `a/31041956`…`a/30451430`…,(+ `a/31495705`,`a/30662617`,`a/31041954`,`a/31041956`,`a/31495714`,`a/31804907`,`a/31520745`,`a/29470970`,`a/31804920`,`a/31804926`,`a/28980904`,`a/27387696`,`a/27368820`,…).
- **Chelibri** `chelibri.ru/writings(1-14)`, **Abrek**, **mon95.ru Материалы на чеченском языке**, **nohchalla.com**, **waynakh.com**, **stihi.ru**, **proza.ru**(cp1251), **groznycity.ru**, **maxima-library**, **poemhunter**, **infourok**, **nasha-shkola**, **daymohk-gazet**, **checheninfo**, **umarlavina**, `dic.academic`,`lyricstranslate`,`en-academic`,`vk`,`instagram`,`youtube`,… 
- `websearch`: `нохчийн мотт`,`site:orga...`,`site:stihi/proza`,`Советан заманан фольклор`,`Хьешана лекхна`,`Мифаш`,`Халкъан новеллаш`,`Сатиран эшарш`,`Сталин`,`нохчийн маттахь`,`проза тчеченский`,… 

## 8. Liens à consulter potentiellement après

(voir §5 + lot4 §8) `c521` reste + arbitrage, `c490`,`c457`,`c471`,`c447`,`c8`,`c493`,`c454`,`c435`,`c498`,`c141`,`c36`,`c39`,`c83`,`c97`,`c127`,`c162`,`c115`,`c502`,`c516`,`c549`,`c3`,`c190`,`c202`,`c401`,`c227`,`c415`,`c418`,`c435`,… ; Маршо Радио reste ; `Майра к1ант`,`Дог майра баба`,`Стигла-гIала*` relecture ; prose nommés `Вахит Хаджимурадов`,`Гайрбекова`,`Хабаев`,`Ибрагимов`,`Апти`,`Петимат`,`СаӀид Бадуев`,`Муса Ахмадов`,`Ойбуев`,`Ильман`,… ; nohchalla/chelibri/waynakh/stihi/proza/mon95. **Dédup+relecture native+palotchka avant ajout.**
