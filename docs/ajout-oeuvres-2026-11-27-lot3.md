# Ajout d'œuvres littéraires tchétchènes — Lot 3 (2026-11-27)

## 1. Résumé de l'opération

- **Base avant ajout** : 609 œuvres (421 poèmes, 162 chants/иллеш, 26 proses), 82 auteurs nommés.
- **Ajouts effectués** : **13 nouvelles œuvres** (5 poèmes, 4 chants folkloriques pour enfants, 4 textes en prose), dont **3 nouveaux auteurs nommés** (`Докка Кагерманов`, `Зелимхан Мусаев`, `Мансур Дагаев`).
- **Base après ajout** : **622 œuvres** (`poems=426`, `songs=166`, `prose=30`), 85 auteurs nommés.
- **Couverture texte plein** : `ce=475`, `ru=143`, `en=57`, `fr=61`.
- **Normalisation** : 183 palotchkas normalisées vers `Ӏ` (`U+04C0`) et 1 homoglyphe latin (`Cу` → `Су` dans `yusupov-ilman-poet`) corrigé.

---

## 2. Œuvres ajoutées (13)

### Poèmes (`src/data/poems.json`, +5 → 426)

| ID | Auteur | Titre (`ce` / `ru`) | Langue(s) texte | Source |
| :--- | :--- | :--- | :--- | :--- |
| `kagermanov-kharachoyn-zelamkha` | Докка Кагерманов *(nouveau)* | Харачойн Зеламха / Зелимхан Харачоевский | `ce` | [Abrek.org](http://abrek.org/2301-dokka-kagermanov-harachoyn-zelamha.html) |
| `gatsaev-churt` | СаьӀид Гацаев | Чурт (шира легенда) | `ce` | [Маршо Радио](https://www.radiomarsho.com/a/gatsaev-sajiid-churt-shira-legenda/31804907.html) |
| `khasarov-sharani-gura-dada` | ШаӀрани Хасаров | ГӀура-Дада | `ce` | [Маршо Радио](https://www.radiomarsho.com/a/31495714.html) |
| `musaev-zelimkhan-grozny` | Зелимхан Мусаев *(nouveau)* | Соьлжа-ГӀала / Грозный | `ru` | [Нохчалла.com](https://nohchalla.com/literatura/chechenskie-stihi/zelimkhan-musaev/540-%d0%b3%d1%80%d0%be%d0%b7%d0%bd%d1%8b%d0%b9) |
| `dagaev-rodine-posvyashchaetsya` | Мансур Дагаев *(nouveau)* | Даймахкана / Родине посвящается | `ru` | [Нохчалла.com](https://nohchalla.com/literatura/chechenskie-stihi/mansur-dagaev/671-%d1%80%d0%be%d0%b4%d0%b8%d0%bd%d0%b5-%d0%bf%d0%be%d1%81%d0%b2%d1%8f%d1%89%d0%b0%d0%b5%d1%82%d1%81%d1%8f) |

### Chants folkloriques (`src/data/songs.json`, +4 → 166)

| ID | Auteur | Titre (`ce`) | Langue(s) texte | Source |
| :--- | :--- | :--- | :--- | :--- |
| `folk-beriyn-eshar-avtobus-yogu` | Халкъан | Автобус йогӀу… | `ce` | [Нохчалла.com — Берийн фольклор](https://nohchalla.com/literatura/folklor/41-beriyn-folklor) |
| `folk-beriyn-eshar-elita-lita` | Халкъан | Элита – лита… | `ce` | [Нохчалла.com — Берийн фольклор](https://nohchalla.com/literatura/folklor/41-beriyn-folklor) |
| `folk-beriyn-eshar-day-naniy-ma-layla` | Халкъан | Дай-наний ма лайла… | `ce` | [Нохчалла.com — Берийн фольклор](https://nohchalla.com/literatura/folklor/41-beriyn-folklor) |
| `folk-beriyn-eshar-malkh-malkh-khazhiyta` | Халкъан | Малх, малх хьажийта… | `ce` | [Нохчалла.com — Берийн фольклор](https://nohchalla.com/literatura/folklor/41-beriyn-folklor) |

### Proses (`src/data/prose.json`, +4 → 30)

| ID | Auteur | Titre (`ce` / `ru`) | Langue(s) texte | Source |
| :--- | :--- | :--- | :--- | :--- |
| `yusupov-ilman-poet` | Ильман Юсупов | Поэт | `ce` | [Маршо Радио](https://www.radiomarsho.com/a/31520745.html) |
| `folk-adamalla-vakhi-diytsar` | Халкъан | Адамалла | `ce` | [Нохчалла.com — Вахи оьздингаллех лаьцна дийцарш](https://nohchalla.com/obychai-i-tradicii/etika/1821-vakhi-ozdingallekh-latsna-dijtsarsh) |
| `folk-poisk-bessmertiya` | Халкъан | Ӏожалла йоцу меттиг лахар / Поиск бессмертия | `ru` | [Нохчалла.com — С.-Х. Нунуев](https://nohchalla.com/literatura/folklor/dukh-vajnakhov-v-mifakh-i-legendakh/1560-poisk-bessmertiya) |
| `folk-serdtse-materi` | Халкъан | Ненан дог / Сердце матери | `ru` | [Нохчалла.com — С.-Х. Нунуев](https://nohchalla.com/literatura/folklor/dukh-vajnakhov-v-mifakh-i-legendakh/1585-serdtse-materi) |

---

## 3. Doublons détectés et écartés lors de la recherche

- `https://www.radiomarsho.com/a/29470970.html` (Абдул-Хьамид Хатуев — « Махкахошка ») : écarté car quasi-identique (`sim=0.99`) à l'œuvre existante `khatuev-yurtkhoshka`.
- `https://nohchalla.com/literatura/chechenskie-stihi/adam-akhmatukaev/843-...` (Адам Ахматукаев — « ЦӀазамаш мерза ду… ») : écarté car quasi-identique (`sim=0.95`) à l'œuvre existante `ahmatukaev-toska`.

---

## 4. Normalisation palotchka, orthographe et vérifications

- **Palotchkas (`Ӏ` / `U+04C0`)** : 183 substitutions normalisées sur ce lot (`yusupov-ilman-poet` : 66, `gatsaev-churt` : 46, `kagermanov-kharachoyn-zelamkha` : 29, `khasarov-sharani-gura-dada` : 22, `folk-adamalla-vakhi-diytsar` : 12, `folk-beriyn-eshar-*` : 8).
- **Homoglyphes latins** : 1 occurrence (`Cу` avec `C` latin `U+0043` dans `yusupov-ilman-poet`) corrigée en `С` cyrillique (`U+0421`).
- **Points à relire par un locuteur natif** :
  - `folk-beriyn-eshar-malkh-malkh-khazhiyta` conserve la graphie source `Кьийган` (`ь` au lieu de `ъ`).
  - `yusupov-ilman-poet` conserve la note `**` de bas de texte présente sur la source.
- **Contrôles** : `npm run generate-index` (622/622, 0 orphelin), `npm run validate-data` (0 erreur, 0 nouvel avertissement), `python3 scripts/verify_data.py` (0 doublon, 0 nouveau résidu palotchka).

---

## 5. Liens consultés et pistes pour les prochains lots

### Liens consultés dans ce lot
- `http://abrek.org/2301-dokka-kagermanov-harachoyn-zelamha.html`
- `https://www.radiomarsho.com/a/gatsaev-sajiid-churt-shira-legenda/31804907.html`
- `https://www.radiomarsho.com/a/31495714.html`
- `https://www.radiomarsho.com/a/31520745.html`
- `https://www.radiomarsho.com/a/29470970.html` *(écarté — doublon)*
- `https://nohchalla.com/literatura/chechenskie-stihi/zelimkhan-musaev/540-%d0%b3%d1%80%d0%be%d0%b7%d0%bd%d1%8b%d0%b9`
- `https://nohchalla.com/literatura/chechenskie-stihi/mansur-dagaev/671-%d1%80%d0%be%d0%b4%d0%b8%d0%bd%d0%b5-%d0%bf%d0%be%d1%81%d0%b2%d1%8f%d1%89%d0%b0%d0%b5%d1%82%d1%81%d1%8f`
- `https://nohchalla.com/literatura/folklor/41-beriyn-folklor`
- `https://nohchalla.com/obychai-i-tradicii/etika/1821-vakhi-ozdingallekh-latsna-dijtsarsh`
- `https://nohchalla.com/literatura/folklor/dukh-vajnakhov-v-mifakh-i-legendakh/1560-poisk-bessmertiya`
- `https://nohchalla.com/literatura/folklor/dukh-vajnakhov-v-mifakh-i-legendakh/1585-serdtse-materi`

### Pistes à exploiter pour les lots suivants
1. **Маршо Радио (`radiomarsho.com`)** :
   - ШаӀрани Хасаров : `31495705`, `31041954`, `31041956`, `31041960`, `31038870`, `31038867`, `31034408`
   - Апти Бисултанов : `30662617`, `28980904`, `27387696`, `27368820`
   - СаьӀид Гацаев : « Юха а… » (`30451430`)
2. **Нохчалла.com (`nohchalla.com`)** :
   - Autres sections de `41-beriyn-folklor` (comptines et devinettes rimées non encore extraites)
   - Récits éthiques de `1821-vakhi-ozdingallekh-latsna-dijtsarsh` (autres récits distincts d'« Адамалла »)
   - Autres légendes de la série « Дух вайнахов в мифах и легендах » (С.-Х. Нунуев)
   - Poètes de la rubrique `literatura/chechenskie-stihi` (vérifier chaque texte contre `index.json` pour éviter les doublons)
3. **Abrek.org (`abrek.org`)** :
   - Autres textes littéraires et poèmes en tchétchène autour de Зеламха et du folklore historique.
