# Lot d’œuvres ajoutées le 2026-11-26

## Vue d’ensemble

- **Date d’ajout (`date_added`)** : `2026-11-26`
- **Total ajouté** : **66 œuvres** en tchétchène (`ce`), avec titres quadrilingues (`ce`, `ru`, `en`, `fr`)
  - **44 poèmes** dans `src/data/poems.json` (`346` → `390`)
  - **22 chants populaires et chants d’auteur** dans `src/data/songs.json` (`56` → `78`)
  - `src/data/prose.json` inchangé (`20`)
- **Total général du catalogue** : **`422` → `488` œuvres**

---

## 1. Sources dépouillées

1. **Маршо Радио — онлайн-библиотека** (`https://www.radiomarsho.com/z/17556`, `17567`, `17570`, `19889`, `20466`, `20468`, et pages d’œuvres individuelles) :
   - Poésie classique et contemporaine tchétchène : **Ӏаьрби Мамакаев**, **Мохьмад-Салахь Гадаев**, **Ахмад Сулейманов**, **Мохьмад Дикаев**, **Магомет Сулаев**, **Саидов Билал**, **Хьусайн Сатуев**, **Ӏабдул-Хьамид Хатуев**, **Леча Абдулаев**, **Бана Гайтукаева**, **Шарип Цуруев**, **Шаид Рашидов**, **Ибрагим Юсупов**, **СаьӀид Гацаев**, **Петимат Петирова**.
2. **Орга — «Нохчийн фольклор»** (`https://orga.narod.ru/folklor/main.htm`) :
   - Édition *Чеченский фольклор (Нохчийн фольклор)*, compilée par **Ш. А. Джамбеков**, Grozny : «Книга», 1991 — sections **«Узамаш»** (`c435.htm`), **«Социале-политикан чулацам болу эшарш»** (`c454.htm`), **«Лирикан тийжамаш»** (`c498.htm`) et **«Сатиран эшарш»** (`c490.htm`).
3. **Waynakh Online** (`https://www.waynakh.com/fr/category/paroles-de-chansons/`) :
   - Paroles en cyrillique tchétchène du chant *Гечделахь, Латта* de **Сулейман Токкаев** (`gecdelah-latta-suleyman-tokkaev`).

---

## 2. Normalisation du palotchka et de l’encodage

Conformément à `docs/prompt-palotchka.md` et aux conventions validées par `scripts/validate-data.mjs` et `scripts/verify_data.py` :

- Toutes les variantes de substitution du palotchka adjacentes à une lettre cyrillique (`1`, `I` latin, `l` minuscule, `|`, `11` / `II` internes dans `ЙоӀӀий`, ainsi que `І`/`і` ukrainien U+0406/U+0456 utilisé sur certaines pages récentes de *Маршо Радио*, et `ӏ` minuscule U+04CF) ont été converties en **palotchka majuscule cyrillique `Ӏ` (`U+04C0`)** — soit **1 030 occurrences de `Ӏ`** normalisées sur l’ensemble des 66 entrées.
- Aucun caractère `ӏ` (`U+04CF`), `І` (`U+0406`), ni chiffre résiduel (`[0-9]`) ou lettre latine (`[A-Za-z]`) n’est présent dans les champs `ce` (`title.ce`, `text.ce`, `text_preview.ce`, `tags`, `author`).
- Trois homoglyphes latins mêlés à des mots cyrilliques dans les pages sources de Мохьмад Дикаев ont été corrigés mécaniquement en cyrillique :
  - `dikaev-nokhchiyn-khusam` : `BoгIypг` → `ВогӀург`
  - `dikaev-day-bakhnachu-makhkakh` : `xIopa` → `хӀора`
  - `dikaev-so-tsa-khochush-mettig-bats` : `BоpxIapa` → `ВорхӀара`
- Aucun palotchka (`Ӏ` / `ӏ`) n’apparaît dans les champs `ru`, `en`, `fr`.
- Sur `orga.narod.ru/folklor/`, chaque vers poétique est balisé par `<p>` tandis que des retours simples à l’intérieur d’un `<p>` proviennent de la justification de colonne HTML : ces coupures douces intra-vers ont été ressoudées d’un espace afin de restituer fidèlement la métrique vers par vers, exactement comme pour les entrées `folk-*` déjà présentes dans `songs.json`.
- Sur *Маршо Радио*, les notes lexicales éditoriales placées sous filet en bas de page (*Самаде*, *Ӏуьйре йогӀу, суьйре йоьду…*) et la notice biographique en prose hors poème (*Барзин Ӏожалла*) ont été retirées du corps poétique (la dédicace à Барза Эзерханов est conservée dans `source`).
- Les 8 nouveaux auteurs cyrilliques ont été ajoutés à `AUTHOR_NAMES` dans `src/utils/authorName.js` pour garantir une translittération latine soignée dans les interfaces anglaise et française.

---

## 3. Liste complète des 66 œuvres ajoutées

### A. Poèmes (`src/data/poems.json` — 44 œuvres)

| # | `id` | Auteur | Titre (`ce`) | Titre (`fr`) |
|---|---|---|---|---|
| 1 | `arbi-mamakaev-daymokhk` | Ӏаьрби Мамакаев | Даймохк | Patrie |
| 2 | `arbi-mamakaev-bargash` | Ӏаьрби Мамакаев | БӀаьргаш | Les yeux |
| 3 | `gadaev-tsen-berd` | Мохьмад-Салахь Гадаев | ЦӀен-Берд | La Falaise rouge (Tsen-Berd) |
| 4 | `gadaev-darta` | Мохьмад-Салахь Гадаев | Дарта | Le tétras des neiges |
| 5 | `gadaev-day-bakhna-latta` | Мохьмад-Салахь Гадаев | Дай баьхна латта | La terre des ancêtres |
| 6 | `gadaev-regara-pop` | Мохьмад-Салахь Гадаев | РегӀара поп | Le platane sur la crête |
| 7 | `gadaev-samade` | Мохьмад-Салахь Гадаев | Самаде | Éveille |
| 8 | `gadaev-kanta-nene-yazdina-kekhat` | Мохьмад-Салахь Гадаев | КӀанта нене яздина кехат | Lettre d’un fils à sa mère |
| 9 | `gadaev-uyre-yogu-suyre-yodu` | Мохьмад-Салахь Гадаев | Ӏуьйре йогӀу, суьйре йоьду… | Le matin vient, le soir s’en va… |
| 10 | `suleimanov-daymekhkan-illi` | Ахмад Сулейманов | Даймехкан илли | Le chant de la patrie |
| 11 | `suleimanov-ma-dokhkovalla-so` | Ахмад Сулейманов | Ма дохковаьлла со | Combien j’ai regretté |
| 12 | `suleimanov-dog-dokhde-tse` | Ахмад Сулейманов | Дог дохде цӀе | Le feu qui réchauffe le cœur |
| 13 | `suleimanov-ma-ala-soga` | Ахмад Сулейманов | Ма ала соьга | Ne me dis pas |
| 14 | `suleimanov-kho-marsha-oyla` | Ахмад Сулейманов | Хьо марша Ӏойла | Adieu (Porte-toi bien) |
| 15 | `dikaev-nana` | Мохьмад Дикаев | Нана | Mère |
| 16 | `dikaev-kinkhetame-nokhchiycho` | Мохьмад Дикаев | Къинхетаме Нохчийчоь | Tchétchénie miséricordieuse |
| 17 | `dikaev-nokhchiyn-khusam` | Мохьмад Дикаев | Нохчийн хӀусам | Le foyer tchétchène |
| 18 | `dikaev-day-bakhnachu-makhkakh` | Мохьмад Дикаев | Дай баьхначу махкахь | Au pays où vécurent nos pères |
| 19 | `dikaev-so-tsa-khochush-mettig-bats` | Мохьмад Дикаев | Со ца кхочуш меттиг бац | Il n’est nul endroit que je n’atteigne |
| 20 | `dikaev-lurvollachu-stegan-illi` | Мохьмад Дикаев | Лурвоьллачу стеган илли | Le chant du proscrit |
| 21 | `sulaev-khin-yistekh` | Магомет Сулаев | Хин йистехь | Au bord de l’eau |
| 22 | `sulaev-yoiy-zezaggiy` | Магомет Сулаев | ЙоӀӀий, зезаггий | La jeune fille et la fleur |
| 23 | `sulaev-kante` | Магомет Сулаев | КӀанте | À mon fils |
| 24 | `sulaev-adamalla` | Магомет Сулаев | Адамалла | Humanité |
| 25 | `saidov-bilal-nana` | Саидов Билал | Нана | Mère |
| 26 | `saidov-bilal-san-stikhe` | Саидов Билал | Сан стихе | À mon poème |
| 27 | `saidov-bilal-ma-kega-sel-sirla` | Саидов Билал | Ма къега сел сирла | Ne brille pas d’un tel éclat |
| 28 | `saidov-bilal-kekhat` | Саидов Билал | Кехат | La lettre |
| 29 | `satuev-nokhchiyn-belkhi` | Хьусайн Сатуев | Нохчийн белхи | Le belkhi tchétchène (entraide) |
| 30 | `satuev-nenan-mukamash` | Хьусайн Сатуев | Ненан мукъамаш | Les mélodies d’une mère |
| 31 | `satuev-lamniyn-ber` | Хьусайн Сатуев | Лаьмнийн бер | Enfant des montagnes |
| 32 | `khatuev-nakostashka` | Ӏабдул-Хьамид Хатуев | Накъосташка | À mes compagnons |
| 33 | `khatuev-baste-yer-yu` | Ӏабдул-Хьамид Хатуев | БӀаьсте ер ю | Le printemps viendra |
| 34 | `khatuev-yurtkhoshka` | Ӏабдул-Хьамид Хатуев | Юьртхошка | Aux gens de mon village |
| 35 | `abdulaev-as-zhayna-yazdina` | Леча Абдулаев | Ас жайна яздина… | J’ai écrit un livre… |
| 36 | `abdulaev-khan-yi-kho-nokhchiycho` | Леча Абдулаев | Хьан йи хьо, Нохчийчоь? | Qui t’a créée, Tchétchénie ? |
| 37 | `abdulaev-yokkha-stag` | Леча Абдулаев | Йоккха стаг | La vieille femme |
| 38 | `gaytukaeva-zama` | Бана Гайтукаева | Зама | Le temps |
| 39 | `tsuruev-barzin-ozhalla` | Шарип Цуруев | Барзин Ӏожалла | La mort de Barza |
| 40 | `rashidov-tsa-teshash-chagonekh` | Шаид Рашидов | Ца тешаш чӀагӀонех хьо ела къежа… | Sans croire aux serments, tu souris… |
| 41 | `yusupov-san-illesh-nokhchiykhoh-dissalash` | Ибрагим Юсупов | Сан иллеш, даим а Нохчийчохь диссалаш… | Mes chants, demeurez à jamais en Tchétchénie… |
| 42 | `gatsaev-mokh-beli` | СаьӀид Гацаев | Мох бели… | Le vent s’est levé… |
| 43 | `petirova-as-khuna-akh-suna` | Петимат Петирова | Ас хьуна, ахь суна лерина иллеш… | Les chants que nous nous sommes dédiés… |
| 44 | `petirova-ekama-konalla` | Петимат Петирова | Экама къоналла пхийттара йолуш… | Quand la frêle jeunesse eut quinze ans… |

### B. Chants populaires et chants d’auteur (`src/data/songs.json` — 22 œuvres)

| # | `id` | Auteur | Titre (`ce`) | Titre (`fr`) |
|---|---|---|---|---|
| 1 | `folk-uzam-dakaza-ma-dala-malkh-kheta` | Халкъан | Дакъаза ма дала хьо, малх кхета ва дуьне… | Ne sois pas malheureux, monde baigné de soleil… |
| 2 | `folk-uzam-suyrenash-yats-bokhu` | Халкъан | Суьйренаш яц боху… | On dit qu’il n’est point de soirs… |
| 3 | `folk-uzam-chorin-singattame-illi` | Халкъан | Чорин сингаттаме илли | Le chant mélancolique de Tchora |
| 4 | `folk-uzam-chuyna-bolat` | Халкъан | И чуьйна болат ма чӀогӀа ду… | Qu’il est dur, l’acier fondu… |
| 5 | `folk-uzam-khara-uzam-olu-as` | Халкъан | ХӀара узам олу ас, сайн синтем байна… | Je chante cet ouzam, ayant perdu ma paix… |
| 6 | `folk-uzam-soratarchu-maltin-illi` | Халкъан | Соратарчу Маьлтин илли | Le chant de Malta de Sorat |
| 7 | `folk-uzam-davala-khan-dela` | Халкъан | Давала хьан делаъ, ва мерза ва дуьне… | Ô doux monde, qui t’a jamais goûté selon son vœu… |
| 8 | `folk-uzam-dakaza-ma-dala-go-tuysu` | Халкъан | Дакъаза ма дала, го туьйсу хьо дуьне… | Monde tournoyant, qui donc as-tu choyé… |
| 9 | `folk-uzam-say` | Халкъан | Сай | Le cerf |
| 10 | `folk-uzam-yakh-yolu-kentiy` | Халкъан | Яхь йолу кӀентий | Fils valeureux |
| 11 | `folk-uzam-khar-dune-mel-du` | Халкъан | ХӀар дуьне мел ду | À travers ce vaste monde |
| 12 | `folk-uzam-tam-siyna-khokha` | Халкъан | ХӀе боьду тӀам сийна кхокха… | Ô colombe aux ailes bleues qui t’envoles… |
| 13 | `folk-eshar-bay-te-bayrakh` | Халкъан | Бай тӀе байракх ва етташ… | Plantant l’étendard sur le pré… (Chant de Chamil) |
| 14 | `folk-eshar-tsokaloman-bibolat` | Халкъан | ЦӀоькъалоьман ва санна, цӀе йолу Биболат… | Bibolat, au renom de panthère… |
| 15 | `folk-eshar-khara-uyrenash-tuoluchu` | Халкъан | ХӀара Ӏуьйренаш туолучу хенахь… | À l’heure où les matins s’embellissent… (Complainte d’une sœur) |
| 16 | `folk-eshar-lamanan-agongakha` | Халкъан | Ламанан агӀонгахьа… | Au flanc des monts quand s’est levée la tourmente… |
| 17 | `folk-eshar-borza-kh-yatsiy-siyna-sibrekh` | Халкъан | Борза-х яций хьо, сийна Сибрех… | Tu n’es donc pas d’airain, bleue Sibérie… |
| 18 | `folk-tiyzham-tam-botsu-lecha` | Халкъан | ТӀам боцу леча ду со… | Je suis un faucon sans ailes… (Complainte lyrique) |
| 19 | `folk-satiran-eshar-khetachu-malkhatsa` | Халкъан | Кхетачу малхаца, бузучу малхаца… | Au lever comme au coucher du soleil tu es venu au bord de l’eau… |
| 20 | `tokkaev-gechdelakh-latta` | Сулейман Токкаев | Гечделахь, Латта | Pardonne, ô Terre |
| 21 | `sulaev-aganan-yish` | Магомет Сулаев | Аганан йиш | Berceuse |
| 22 | `khatuev-chekhyeli-san-yotsa-baste` | Ӏабдул-Хьамид Хатуев | Чекхъели сан йоца бӀаьсте | Mon court printemps s’est achevé |

---

## 4. Déduplication et textes écartés

Chaque candidat a été comparé aux 422 œuvres préexistantes (par URL, couple `(author, title)`, préfixe normalisé du premier vers, similarité textuelle `SequenceMatcher`, et confrontation sémantique avec les poèmes existants uniquement en traduction `ru`/`en`/`fr` d’un même auteur) :

- **СаьӀид Гацаев — *Юха вогӀур ву*** (`waynakh.com/.../said-gatsaev/`) : **écarté** car doublon en version tchétchène de `gatsaev-reviendrai` (déjà présent en français dans `poems.json`).
- **Ӏабдул-Хьамид Хатуев — *Нохчийчоь*** (3ᵉ poème de la page groupée `radiomarsho.com/a/27198918.html`) : **écarté** car déjà présent sous `khatuev-nokhchiycho`.
- **Саидов Билал — *Ма къега сел сирла*** (`radiomarsho.com/a/28163866.html`) : doublon interne à *Маршо Радио* de `28163864.html` (seule la page `28163864.html` a été retenue).
- **Саидов Билал — *Буобер*** (`28438977.html`) et ***Ши бералла*** (`29981005.html`) : **écartés** (espaces manquants multiples dans *Буобер* ; extrait partiel de long poème pour *Ши бералла*).
- **Орга — «Нохчийн фольклор»** : ont été **écartées** toutes les pièces comportant des coquilles manifestes d’OCR ou des lacunes dans l’archive numérique (`c435.htm` № 6 incomplet, № 9 `ц1ййза`, № 11 `ссрлабалий`, № 16 `вез?н` ; `c454.htm` № 6 `лекьар` / `гог1у` ; `c498.htm` № 1 `TIepa` ; `c415.htm` `Юайчу` ; `c418.htm` `белахъ`).
- Homonymies vérifiées (textes entièrement distincts) : `arbi-mamakaev-daymokhk` ≠ `mokhmad-mamakaev-daymohk` ; `dikaev-nana` ≠ `saidov-bilal-nana` ≠ `nana` ; `gaytukaeva-zama` ≠ `mokhmad-mamakaev-zama` ; `sulaev-aganan-yish` ≠ `bisultanov-aganan-yish` ≠ `folk-eshary-aganan-illi-*`.

---

## 5. Points à relire par un locuteur natif

Afin de ne jamais réécrire silencieusement la graphie des sources, les particularités suivantes ont été conservées telles quelles et sont signalées pour relecture éventuelle :

- `suleimanov-daymekhkan-illi` (`27414194.html`) : `Дог хунда догӀу` (`хунда` sans palotchka dans la source à côté de `хӀунда` au vers suivant) et `шщен безам боцург` (probable coquille typographique source pour `шен`).
- `sulaev-yoiy-zezaggiy` (`28004451.html`) : `Схьадог Ӏуш ду?..` (espace inséré dans la source devant `Iуш` pour `СхьадогӀуш`).
- `sulaev-aganan-yish` (`27224525.html`) : reprise finale du refrain `Хьайн пана йиц ца еш` (`нана` à la 2ᵉ strophe, `пана` à la dernière strophe dans la source).
- `satuev-lamniyn-ber` (`29243212.html`) : trois soudures typographiques dans la page source (`вовшеххьерчашсуна`, `эшнавуьсуш`, `иллешдекадо`).
- `tokkaev-gechdelakh-latta` (`waynakh.com`) : variations orthographiques de transcription dans le couplet final (`гӀилакх` / `ГӀаллакхаш`, `марзеллачунна`).
