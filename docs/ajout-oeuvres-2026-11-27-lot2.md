# Lot d'œuvres ajoutées le 2026-11-27 (lot 2) : 9 poèmes, 7 chants folkloriques et 6 proses

> Date d'ajout : 2026-11-27 · Branche `main` (suite à `4c935fb`)
> Ce rapport complète `docs/ajout-oeuvres-2026-11-27.md` et `docs/ajout-folklore-poemes-chants-2026-11-27.md` pour le second lot du 27 novembre 2026.

Ajout de **22 œuvres** vérifiées de littérature et de folklore tchétchènes réparties sur les trois genres :
**9 poèmes** (`src/data/poems.json`), **7 chants folkloriques** (`src/data/songs.json`) et **6 proses** (`src/data/prose.json`).

- `src/data/poems.json` : 412 → **421** (+9)
- `src/data/songs.json` : 155 → **162** (+7)
- `src/data/prose.json` : 20 → **26** (+6)
- `src/data/index.json` : 587 → **609** (régénéré via `npm run generate-index`)
- `src/data/catalog.test.js` : total attendu 587 → **609**
- `src/utils/authorName.js` : ajout des transcriptions EN/FR pour **7 nouveaux auteurs** (`Алла Дудаева`, `Вахид Аюбов`, `Исмаил Хабаев`, `Къосам Оспанов`, `Лёма Ибрагимов`, `Румиса Мамакаева`, `СаӀид Бадуев`)

Couverture des textes pleins (`npm run validate-data`) :
`ce` 447 → **466** (+19) · `ru` 136 → **139** (+3 : 2 légendes en prose + 1 poème d'Алла Дудаева) · `en` 57 → 57 · `fr` 61 → 61.

**Tous les corps de texte proviennent mot pour mot des sources consultées ; aucune traduction de corps de texte n'a été générée.** Seuls les titres traduits (`ru`/`en`/`fr`, ou `ce` pour les 3 textes publiés en russe) sont des traductions littérales/descriptives non relues par un locuteur natif (signalées § 5).

---

## 1. Sources consultées (utilisées dans ce lot)

1. **Маршо Радио — онлайн-библиотека** (`https://www.radiomarsho.com/z/17538`, pages `p=0..4`) :
   - [СаӀид Бадуев — «Ӏимран»](https://www.radiomarsho.com/a/baduev-said-proza-rasskaz-literatura-/28362049.html)
   - [Бексултанов Муса — «Цхьа некъ»](https://www.radiomarsho.com/a/musa-beksultanov-tshja-nek/31759190.html)
   - [Бексултанов Муса — «Иэсан биста йисте»](https://www.radiomarsho.com/a/beksultanov-musa-iesan-bista-yiste/31759199.html)
   - [Къосам Оспанов — «Йист»](https://www.radiomarsho.com/a/ospanov-kosam-yist/28125878.html)
   - [Абузар Айдамиров — «Со хьуна йоьгӀна яц…»](https://www.radiomarsho.com/a/28125870.html)
   - [Сулейманов Юсуп — «Нохчийчоьне»](https://www.radiomarsho.com/a/30875919.html)
   - [ШаӀрани Хасаров — «Нене»](https://www.radiomarsho.com/a/31034404.html)
2. **Chelibri** (`https://chelibri.ru/`) — nouvelle source découverte et dépouillée (`writings/1..14`) :
   - [Хабаев Исмаил — «Орцанна жоп»](https://chelibri.ru/writings/1)
   - [Вахид Аюбов — «Нохчи къам»](https://chelibri.ru/writings/5)
   - [Аганан илли («Дижалахь, жиманиг…»)](https://chelibri.ru/writings/7)
   - [Петимат Петирова — «ДоттагӀаллех лаьцна дийцар»](https://chelibri.ru/writings/12)
   - [Ибрагимов Лёма — «Лаам»](https://chelibri.ru/writings/13)
3. **Нохчалла.com** (`https://nohchalla.com/`, API WordPress + rubriques folklore et poésie) :
   - [Берийн фольклор (`41-beriyn-folklor`)](https://nohchalla.com/literatura/folklor/41-beriyn-folklor) — 5 chants enfantins et berceuses inédits (XXIX № 2, XXX № 2/4/6, XIV)
   - [Происхождение озера Галанчож (`1574`)](https://nohchalla.com/literatura/folklor/dukh-vajnakhov-v-mifakh-i-legendakh/1574-proiskhozhdenie-ozera-galanchozh)
   - [Озеро Эзен-ам (`1573`)](https://nohchalla.com/literatura/folklor/dukh-vajnakhov-v-mifakh-i-legendakh/1573-ozero-ezen-am)
   - [Алла Дудаева — «Ичкерия» (`461`)](https://nohchalla.com/literatura/chechenskie-stihi/alla-dudaeva/461-%d0%b8%d1%87%d0%ba%d0%b5%d1%80%d0%b8%d1%8f)
4. **ЧеченИнфо** (`https://checheninfo.ru/406655-zelamha-shira-illi.html`) et **Abrek.org** (`http://abrek.org/2015-zelamha-shira-illi.html`) :
   - «Зеламха (шира илли)» (`ТӀетосу ва юргӀа…`)
5. **Наша Школа** (`https://nasha-shkola.info/index.php/home/obshchestvo/6185-mamakaeva-rumisa`) :
   - Румиса Мамакаева — «Аганан илли» (`Олило, ва болило…`)

---

## 2. Liste des 22 œuvres ajoutées

### A. Poèmes (`src/data/poems.json` — 9 œuvres)

| # | `id` | Auteur | Titre | Langue | Substituts `Ӏ` corrigés |
|---|---|---|---|---|---|
| 1 | `khabaev-ortsanna-zhop` | Исмаил Хабаев | Орцанна жоп | `ce` | 16 |
| 2 | `ayubov-nokhchi-kam` | Вахид Аюбов | Нохчи къам | `ce` | 0 |
| 3 | `ibragimov-laam` | Лёма Ибрагимов | Лаам | `ce` | 12 |
| 4 | `ospanov-yist` | Къосам Оспанов | Йист | `ce` | 8 |
| 5 | `aydamirov-so-khuna-yoegna-yats` | Абузар Айдамиров | Со хьуна йоьгӀна яц… | `ce` | 13 |
| 6 | `khasarov-sharani-nene` | ШаӀрани Хасаров | Нене | `ce` | 4 |
| 7 | `suleymanov-yusup-nokhchiychone` | Сулейманов Юсуп | Нохчийчоьне | `ce` | 3 |
| 8 | `mamakaeva-aganan-illi` | Румиса Мамакаева | Аганан илли (Олило, ва болило…) | `ce` | 10 |
| 9 | `dudaeva-ichkeriya` | Алла Дудаева | Ичкерия (`year_written: 1996`) | `ru` | 0 |

### B. Chants folkloriques (`src/data/songs.json` — 7 œuvres, `author: "Халкъан"`)

| # | `id` | Titre (`ce`) | Origine | Substituts `Ӏ` corrigés |
|---|---|---|---|---|
| 10 | `folk-illi-kharachoyn-zelamkha` | Зеламха (шира илли) | ЧеченИнфо / Abrek.org | 6 |
| 11 | `folk-aganan-illi-dizhalakh-zhimanig` | Аганан илли (Дижалахь, жиманиг…) | Chelibri (`writings/7`) | 6 |
| 12 | `folk-aganan-eshar-dadizha-san-ber` | ДӀадижа, сан бер… | Нохчалла.com (`41`, XXX № 2) | 6 |
| 13 | `folk-aganan-eshar-chen-chabol` | Чен чабол эцна… | Нохчалла.com (`41`, XXX № 4) | 3 |
| 14 | `folk-aganan-eshar-dita-nanin-korni` | Дита, дита нанин кӀорни… | Нохчалла.com (`41`, XXX № 6) | 2 |
| 15 | `folk-beriyn-eshar-pisu-dokkha-du` | Пису, пису – доккха ду… | Нохчалла.com (`41`, XXIX № 2) | 2 |
| 16 | `folk-beriyn-eshar-va-khogalay` | Ва хьогалай, хьогалай… | Нохчалла.com (`41`, XIV) | 4 |

### C. Proses (`src/data/prose.json` — 6 œuvres)

| # | `id` | Auteur | Titre | Langue | Substituts `Ӏ` corrigés |
|---|---|---|---|---|---|
| 17 | `baduev-imran` | СаӀид Бадуев | Ӏимран | `ce` | 424 |
| 18 | `beksultanov-tsha-nek` | Бексултанов Муса | Цхьа некъ | `ce` | 201 |
| 19 | `beksultanov-iesan-bista-yiste` | Бексултанов Муса | Иэсан биста йисте (`year_written: 2000`) | `ce` | 73 |
| 20 | `petirova-dottagallekh-laytsna-diytsar` | Петимат Петирова | ДоттагӀаллех лаьцна дийцар | `ce` | 18 |
| 21 | `folk-proiskhozhdenie-ozera-galanchozh` | Халкъан | Происхождение озера Галанчож | `ru` | 0 |
| 22 | `folk-ozero-ezen-am` | Халкъан | Озеро Эзен-ам | `ru` | 0 |

---

## 3. Normalisation de la palotchka et nettoyage HTML

Conformément à `docs/prompt-palotchka.md` :

- **911** substituts (`1`, `I`, `l`, `11`/`II` internes aux mots) adjacents au cyrillique ont été convertis en **Ӏ (`U+04C0`)** (dont 424 dans *Ӏимран* de СаӀид Бадуев et 201 dans *Цхьа некъ* de Муса Бексултанов).
- Dans `folk-illi-kharachoyn-zelamkha`, la coquille OCR de la source `попан rla дууш` (latin `r` + `l` + `a`) a été normalisée en `попан гӀа дууш` (recoupée sur les variantes en ligne).
- Les balises et blocs parasites des pages sources (`Follow us`, `Зорба тоха`, `This item is part of`, signatures éditoriales en pied de texte sur Нохчалла.com) ont été retirés des corps de texte.
- **0 nouveau substitut résiduel**, **0 caractère `ӏ` (`U+04CF`)**, **0 mélange latin/cyrillique** dans les 22 nouvelles fiches.

---

## 4. Déduplication et candidats écartés

Contrôle croisé avant écriture sur les 587 œuvres existantes (IDs, couples `(auteur, titre)`, premiers vers et similarité `SequenceMatcher`) :

- `chelibri.ru/writings/2` (« Борз ») — **écarté** : similarité `0,88` avec `folk-borz-le-loup`.
- `radiomarsho.com/a/28010735.html` (« Олхазаре » d'Апти Бисултанов) — **écarté** : déjà présent (`bisultanov-olkhazare`).
- `radiomarsho.com/a/30409918.html` (« Самаде » de Мохьмад-Салахь Гадаев) — **écarté** : déjà présent (`gadaev-samade`).
- `nohchalla.com` posts `844` et `845` (Адам Ахматукаев) — **écartés** : similarités `0,81` et `0,86` avec `ahmatukaev-nenan-machiyn` et `ahmatukaev-berallin-sherash-ahna`.
- `nohchalla.com/41` items `XXIX № 3` (« Цхьогалан йиш »), `XXIX № 4` (`0,82`), `XXX № 1` (`0,95`), `XXX № 3` (`0,70`), `XXX № 5` (`0,99`) — **écartés** : déjà catalogués dans `songs.json`.
- `chelibri.ru/writings/3` (« ГӀиллакх ») — **écarté** provisoirement : l'attribution exacte (auteur vs folklore) n'est pas indiquée sur la page source.
- `orga.narod.ru/folklor/*` — **non exploité directement** lors de cette session : le domaine renvoie vers un certificat TLS auto-signé rejeté par la vérification SSL standard ; les chants enfantins d'*Орга* ont été récupérés via le miroir propre sur `nohchalla.com` (`41-beriyn-folklor`).

---

## 5. Points à relire par un locuteur natif

- **`beksultanov-tsha-nek`** : la source conserve deux appels de note lexicographique collés aux mots (`2Уранга`, `3Воттана`) et quelques coupures de trait d'union héritées d'une mise en page imprimée (`вовшахк- хеттачохь`, `томма- гӀаш`, `тӀех- даьлча`) — conservés à l'identique de la source ; à nettoyer/gloser si souhaité.
- **`folk-aganan-eshar-chen-chabol`** : orthographe `Хьан науа йогӀур ю` issue de la source (`науа`).
- **`ospanov-yist`** : graphie `дуъзна` conservée telle quelle depuis Маршо Радио.
- **Titres traduits par l'assistant** (`ru`/`en`/`fr`, et `ce` pour les 3 textes en russe) : non relus par un natif.

---

## 6. Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | **OK** — 22 entrées ajoutées en fin d'index (`587 → 609`) |
| `python3 scripts/verify_data.py` | **Identique à `main`** : 10 substituts résiduels **préexistants**, **0 nouveau**, aucun doublon |
| `npm run check` (`validate-data` + `lint` + `test`) | **OK** — 0 erreur ESLint, **43/43 tests Vitest passés** (dont 609 œuvres dans `catalog.test.js`) ; 1 avertissement préexistant sur `prose.json[1]` |
| `npm run format:check` | **OK** |
| `npm run build` | **OK** (`sitemap.xml` régénéré + bundle Vite) |

---

## 7. Pistes et liens à consulter pour les prochains lots

### Consultés avec succès et encore très riches
- **Chelibri** (`https://chelibri.ru/`) : `writings/3` (ГӀиллакх, vérifier l'auteur), `writings/4` (Али Димаев — Нохчийчоь), `writings/6` (Шайхи Арсанукаев — Ненан Мотт, vérifier doublon), `writings/8` / `10` / `11` (courtes anecdotes folkloriques pour `prose.json`), `writings/9` (Леча Абдуллаев — Диканиг хьахадан кхоьру со, vérifier doublon).
- **Маршо Радио** (`https://www.radiomarsho.com/z/17538`) :
  - Prose encore disponible : `Юсупов Ильман — «Поэт»` (`/a/31520745.html`).
  - Poèmes encore disponibles (non recoupés dans ce lot) : `Гацаев СаьӀид — «Чурт» (шира легенда)` (`/a/gatsaev-sajiid-churt-shira-legenda/31804907.html`), `Гацаев СаьӀид — «Юха а…»` (`/a/30451430.html`), `Хатуев Ӏабдул-Хьамид — «Махкахошка»` (`/a/29470970.html`), `Хасаров ШаӀрани` (`31495714`, `31041960`, `31041956`, `31041954`, `31038879`, `31038873`, `31038870`, `31038867`, `31034408`, `31034394`, `31034374`, `31028593`…), et pages `p=5+` de `/z/17538`.
- **Нохчалла.com** (`https://nohchalla.com/wp-json/wp/v2/`):
  - **Prose / Légendes (`categories=115`, 18 billets)** : encore 16 récits non importés (`1560` Поиск бессмертия, `1585` Сердце матери, `1647` Предание о Малсаг, `1559` Длина жизни, `1558` Любовь отца к сыну, `1567` Ответ камня, `1581` Аул безумцев…).
  - **Prose éthique en tchétchène** : [`1821-vakhi-ozdingallekh-latsna-dijtsarsh`](https://nohchalla.com/obychai-i-tradicii/etika/1821-vakhi-ozdingallekh-latsna-dijtsarsh) (« Вахи оьздингаллех лаьцна дийцарш » — récits moraux en `ce`).
  - **Poèmes (`categories=...`)** : `Алла Дудаева` (`63`, 7 autres poèmes), `Зелимхан Мусаев` (`67`, 9 poèmes), `Мансур Дагаев` (`74`, 6 poèmes), `Адам Ахматукаев` (`82`, ex. `843` « ЦӀазамаш мерза ду Даймехкан арахь… »), `Раиса Ахматова` (`50`, 9 billets), `Рамазан Берзлоев` (`118`, 13 billets).
  - **Берийн фольклор (`41-beriyn-folklor`)** : comptines (`II. Дагардарш`), chants moqueurs (`IV`), chants de jeu (`VII`–`XXVIII`), `XXXI № 2` (« Нанас кӀантана элла иллай » — vérifier les coquilles OCR comme `6ала`).
- **Наша Школа** (`https://nasha-shkola.info/index.php/home/obshchestvo/6185-mamakaeva-rumisa`) : contient aussi d'autres poèmes pour enfants de **Румиса Мамакаева** (« Дай, кӀанттий… », « Бералла »).

### Pistes identifiées par recherche web à explorer ensuite
- **GroznyCity** (`http://groznycity.ru/library/folklore/munaev/`) : recueil *Чеченская народная поэзия XIX–XX вв.* d'И. Б. Мунаев (chants épiques *илли* avec traductions russes, pages `document2571_*.shtml` à dépouiller page par page).
- **ЧеченИнфо** (`https://checheninfo.ru/`) : rubrique littérature/folklore (ex. variantes d'илли comme *Турпал Нохчочух илли* et poèmes sur Зелимхан).
- **Waynakh Online** (`https://www.waynakh.com/fr/` et `/eng/`) : à consulter via navigateur/pages d'archives individuelles (l'API REST renvoie un warning PHP avant le JSON).

---

## 8. Retour arrière

`git revert <commit>` rétablit `poems.json` (421→412), `songs.json` (162→155), `prose.json` (26→20), `index.json` (609→587), `authorName.js` et `catalog.test.js`.
