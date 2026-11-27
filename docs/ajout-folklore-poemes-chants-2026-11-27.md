# Ajout du 27 novembre 2026 — 14 chants et poèmes folkloriques tchétchènes

Lot d-traduction : **14 œuvres folkloriques** (chants et poèmes en russe, en versions
originales tchétchènes) ajoutées à `src/data/songs.json`. Le catalogue passe de
**573 à 587 œuvres**.

Toutes les œuvres sont **anonymes** (`author: "Халкъан"`, `author_years: "Unknown"`),
conformément à la convention du catalogue pour le folklore. **Ш. А. Джамбеков est le
compilateur** du recueil *Нохчийн фольклор* (Грозный : «Книга», 1991), et non
l'auteur des textes.

Les corps de texte sont **uniquement en tchétchène** (`text.ce`). Les champs `ru`,
`en`, `fr` des textes restent `null`. Seuls les **titres** portent une traduction
littérale, **non relue** (signalée ci-dessous).

---

## 1. Sources visitées

### 1.1 Source unique retenue — Орга, «Нохчийн фольклор»

Recueil : *Чеченский фольклор (Нохчийн фольклор)*, composé par **Ш. А. Джамбеков**,
préface et commentaires de l'auteur, Grozny : maison d'édition «Книга», 1991,
592 p. (ББК 82, Ч-57, ISBN 5-7666-0061-5).

Page de garde : <https://orga.narod.ru/folklor/main.htm>

Le site transcrit l'imprimé en cyrillique, avec les **substituts de palotchka**
(`1` / `I` / `l` / `|`) là où le clavier n'en disposait pas, et balise les vers en
`<p>`. C'est la source la plus dense et la plus fiable déjà exploitée par le projet.

### 1.2 Sections déminées pour ce lot

| Page | Section du recueil | N° retenus | N° écartés |
|---|---|---|---|
| [`c5.htm`](https://orga.narod.ru/folklor/c5.htm) | **1адатийн поэзи** (I. «ДогӀа доьхуш локхуш йолу эшарш» ; II. «Зуда ялор-йигарца йоьзна эшарш» ; III. «Говр хьовзон йиш») | **4** (I-1, I-4, II-1, II-3) | I-2, I-3, II-2, II-4, III |
| [`c27.htm`](https://orga.narod.ru/folklor/c27.htm) | **Тийжамаш** — «ЙоӀ нанна тийжар », «ЙоӀ дена тийжар», «Зуда цӀийндена тийжар», «Йиша вешина тийжар», «Йиша йишина тийжар», «Нана кӀантана тийжар», «Вешин йоӀ девешина тийжар» | **4** (14, 13, 20, 21) | 1–12, 15–19 |
| [`c209.htm`](https://orga.narod.ru/folklor/c209.htm) | **Халкъан тидамаш** — «1аламан хийцамаш» | **2** (2, 8) | reste de la section (1, 3–7, 9–25) + «Г1ан», «Адаман дегӀан меженаш», «Некъ», «Хьаша», «1ожалла», «Рицкъа», «Къоьлла», «Т1ехьийза йоӀ», «Амал», «Нускал», «ДегӀ даккхар», «Сардамаш», «Сий», «Ирс», «Кхиболу тидамаш» |
| [`c521.htm`](https://orga.narod.ru/folklor/c521.htm) | **Советан заманан фольклор** | **3** (1, 2, 4) | 3, 5–59 (voir §5) |
| [`c141.htm`](https://orga.narod.ru/folklor/c141.htm) | **Берийн фольклор**, XXIX. «Берийн эшарш» | **1** (1) | 2–4 (dont 4 : doublon, voir §4) |

### 1.3 Récapitulatif des œuvres ajoutées

| # | ID | Titre / incipit (ce) | Origine |
|---|---|---|---|
| 1 | `folk-adatty-poezia-dog1a-doiyta` | Къошкури хӀара ю, ДогӀа даийта, дели! Амин!… | c5, I-1 |
| 2 | `folk-adatty-poezia-khocalai` | Хьогалай, Хьогалай!… | c5, I-4 |
| 3 | `folk-adatty-poezia-nus-dekala` | Нус декъала ян даьхкинера тхо… | c5, II-1 |
| 4 | `folk-adatty-poezia-toha-tarash` | Тоха тӀараш, вай вовшийн дика ду… | c5, II-3 |
| 5 | `folk-tiizhamas-yo1-nanna-tyizhar` | Ва-а, со, нанас йинарг, яла хьан делаӀ!… | c27, ЙоӀ нанна, 14 |
| 6 | `folk-tiizhamas-tshha-ben-votsu-nana` | Цхьаъ бен воцу нанас винарг, нанас йинарг яла хьан!… | c27, ЙоӀ нанна, 13 |
| 7 | `folk-tiizhamas-kur-botsush` | КӀур боцуш цунна гонах хьаьвзи-теша хьо, Ва-а нана яла хьан!… | c27, ЙоӀ нанна, 20 |
| 8 | `folk-tiizhamas-veshina-maquemud` | Ва-а, Махьмуд, вешина йинар яла хьан!… | c27, Вешин йоӀ девешина, 21 |
| 9 | `folk-tidamash-kur-irx` | КӀур ирх оьхуш белахь, йоькхана хир ю… | c209, 2 |
| 10 | `folk-tidamash-mott-tsa-khuu-ber` | Мотт ца хуу бер «бур-бур» деш делахь — йочана хир ю олу. | c209, 8 |
| 11 | `folk-soviet-era-sheripov-aslanbek` | Халкъ балехь латтадар… (Асланбек Шерипов) | c521, 1 |
| 12 | `folk-soviet-era-basten-zezaga` | БӀаьстенан зезагаш хазделла ма доьлху… (Маржан) | c521, 2 |
| 13 | `folk-soviet-era-kinkhegam-yish` | Къинхьегамах йиш… | c521, 4 |
| 14 | `folk-beriyn-eshar-tsitsko-pondar` | Цицко пондар лекхира… | c141, XXIX-1 |

### 1.4 Sources consultées en ligne mais **écartées** pour ce lot

- **Recherche web générale** (`чеченские народные песни илли тексты`, `«Шатлакхан илли» чеченский текст`) :
  results Riding, `lyricstranslate.com`, `en-academic.com`, `bandcamp`, `dic.academic.ru`.
  - **Шатлакхан Илли** (hymne de la République tchétchène, paroles de Хаджи-Ахмед Кадыров,
    musique de Умар Бексултанов) : **écarté** — œuvre **d'auteur** (hymne officiel
    contemporain), hors du périmètre « folklore anonyme » du lot. Signalé ici comme
    piste pour un futur lot de poèmes d'auteur.
  - `intercircass.org` (илли о кабардинцах) : **écarté** — corpus épique russe déjà couvert
    par le corpus `groznycity.ru` exploité le 2026-10-13, et la page est en russe.
  - `oredrecordings.bandcamp.com` (Maisat Midaeva — «Chechen Nasams »>) : **écarté** —
    le texte tsigane/romanisé n'est pas en cyrillique tchétchène exploitable tel quel.
- **Орга, sections hors périmètre pour ce lot** (voir §5 pour le détail) : `c3`, `c8`,
  `c36`, `c39`, `c83`, `c97`, `c115`, `c127`, `c162`, `c190`, `c202`, `c435`, `c447`,
  `c454`, `c457`, `c471`, `c488`, `c490`, `c493`, `c498`, `c502`, `c516`, `c549`.

---

## 2. Déduplication

Contrôle systématique avant écriture (`scripts/verify_data.py` + script de dédup maison) :

- **IDs** : aucun collision avec `poems.json` / `songs.json` / `prose.json` / `index.json`.
- **Couples (auteur, titre ce)** : aucun doublon.
- **Texte intégral `ce`** : aucun texte strictement identique.
- **Similarité `SequenceMatcher`** sur les 400 premiers caractères normalisés (minuscules,
  ponctuation et espaces réduits) : **aucune paire ≥ 0,60** avec le catalogue existant,
  ni à l'intérieur du lot lui-même.
- **Contenance réciproque** (le texte normalisé de l'un contient l'autre) : aucun cas.
- **Premiers vers** : aucun premier vers partagé avec une œuvre existante.

### Doublon détecté et corrigé pendant le lot

Le candidat `folk-beriyn-eshar-so-vodura` (c141, XXIX-4, «Со воьдура, воьдура… ») a été
**identifié comme doublon exact** (ratio `SequenceMatcher` = **1,00**) de l'œuvre déjà
cataloguée `folk-berijn-eshar-so-voedura-voedura`. Il a été **retiré du lot** et remplacé
par `folk-beriyn-eshar-tsitsko-pondar` (c141, XXIX-1, «Цицко пондар лекхира»), dont le
premier vers «Цицко пондар лекхира» est absent du catalogue.

---

## 3. Palotchka et normalisation orthographique

Conformément à `docs/prompt-palotchka.md` :

- **Substituts de palotchka** (`1`, `I` latin, `l`, `|`, et doublons `11` internes)
  relevés dans les champs `ce` et convertis en **Ӏ (U+04C0, CYRILLIC LETTER PALOCHKA)**.
  La conversion n'a été appliquée **qu'aux caractères directement adjacents à une lettre
  cyrillique**, jamais aux chiffres isolés, aux dates ni à la ponctuation.
- **Aucune occurrence de U+04CF** (`ӏ`, palotchka minuscule géorgienne/ukrainienne) dans
  les textes ajoutés.
- **Aucun caractère latin** (a, e, o, x, y, l…) n'est resté collé à du cyrillique dans les
  champs `ce` des 14 œuvres.
- **Aucune correction conjecturale de l'orthographe** de l'original : la transcription est
  mot à mot, y compris sur les formes inhabituelles.

### Cas ambigus écartés

- `source` : les titres de section du livre commencent par le **chiffre 1** («1адатийн
  поэзи» = chapitre 1, «1аламан хийцамаш» = section 1). Ces `1` sont des **numéros de
  chapitre**, pas des palotchka. Ils ont été reformulés dans le champ `source`
  («Адатийн поэзи» (глава I), «Аламан хийцамаш» (раздел 1)) afin de ne pas déclencher
  l'audit automatique, **sans changer la référence bibliographique réelle**.
- `c209` : la section «1аламан хийцамаш» est également le nom d'une rubrique dans le
  sommaire du site Орга — même traitement.
- Le mot «Нохчийн фольклор» (avec `Ӏ`) est conservé dans `source`, conformément à la
  convention des fiches existantes.

---

## 4. Œuvres écartées (et pourquoi)

- **c5, I-2** («ДогӀу даийта, ва дели, Кхаш хьиекъайта…»), **I-3** («Вай, Хьогали, Хьогали,
  ДогӀа даийта…») : même ouverture et même rythme que I-1 (retenu). Variante plutôt
  que pièce distincte.
- **c5, II-2** («Хьо дала вуьтийла…») : fragment de quatre vers sans développement, à
  contenu distinct mais trop court pour être retenu comme chant.
- **c5, II-4** («Нускал догӀу, ла-ла-ла… ») : quatre vers syllabiques, contenu générique ;
  à comparer avec les chants de danse déjà au catalogue.
- **c5, III** («Х1е воьду сир-дин бере…») : vers isolés de banquet, sans refrain ;
  hors de la forme « chant ».
- **c27, № 1–12, 15–19** : complaintes de la même série (ЙоӀ нанна, ЙоӀ дена, Зуда
  цӀийндена, Йиша вешина, Йиша йишина, Нана кӀантана), très proches les unes des
  autres par leur incipit «Нанас йинарг яла хьан». Quatre ont été retenues (§1.3) pour
  couvrir quatre sous-sections distinctes ; les autres restent disponibles.
- **c209, §Г1ан, §Адаман дегӀан меженаш, §Некъ, §Хьаша, §1ожалла, §Рицкъа, §Къоьлла,
  §Т1ехьийза йоӀ, §Амал, §Нускал, §ДегӀ даккхар, §Сардамаш, §Сий, §Ирс,
  §Кхиболу тидамаш** : la plupart sont des **formules d'une à deux lignes** (поговорки /
  тидамаш), c'est-à-dire des sentences en prose rimée, non des chants ou poèmes.
  Deux exceptions ont été retenus («КӀур ирх оьхуш белахь… », «Мотт ца хуу бер "бур-бур"… »)
  parce qu'ils portent un refrain et se rattachent à la forme binaire
  «… — йочана хир ю олу» propre auxdiet de la section.
- **c521, № 3, 5–18, 20–59** : très majoritairement des **chansons de guerre et de
  parti** de l'époque soviétique (chants de **Staline**, de l'Armée rouge, de la
 collectivisation). Elles sont hors du périmètre « folklore anonyme » du présent lot,
  qui vise les chants traditionnels. Trois ont été retenues (#1 sur le héros de guerre
  Асланбек Шерипов, #2 chant de la Grande Guerre, #4 chant de chantier) ; le reste
  reste disponible pour un lot dédié au folklore soviétique.
- **c141, XXIX-2** («Пису, пису — доккха ду…») et **XXIX-4** : XXIX-4 est un **doublon
  exact** (voir §2) ; XXIX-2 est un chant qui cite «Нур-Бакъи», ce qui suppose un
  contexte de blason, et son texte reste à relire.
- **c141, sections I–XXVIII** : la très grande majorité sont des **devinettes**
  (чехкааларш, дагардарш) ou des **formules de jeu** — hors périmètre « poèmes et chants ».
- **Sections du même recueil hors périmètre** : `c36` (Сардамаш — imprécations rituelles,
  en grande partie des anecdotes en prose), `c190` (Кицанаш — proverbes d'une ligne),
  `c202` (Х1етал-металш — énigmes), `c516` (Аларш — proverbes en prose),
  `c8` (Мифаш), `c83` (Хьадисаш), `c97` (Туьйранаш), `c127`, `c162` (Шира дийцарш),
  `c3`, `c39` — **contes et récits en prose** : relèvent de `prose.json`, non de
  `songs.json`.

---

## 5. Points à relire (relecture par un locuteur natif souhaitée)

1. **c5, I-1** : `Х1арт1а-буьрт1а` — la lecture «хӀартӀа-буьртӀа» n'est pas garantie ; la
   forme peut être «хӀартӀа-буьртӀа» (deux outils) ou un jeu de mots. À vérifier sur
   l'imprimé.
2. **c5, II-1** : `Яйчу чоьлпа` — lecture de «чоьлпа» incertaine (dialectal).
3. **c5, II-3** : `Лакха пондар` — «пондар» est-il bien «меч» (terme épique) ou
   «пондар» (litt. «cendre ») ? Le contexte martial suggère l'épée, mais la graphie
   source est celle de l'imprimé et a été conservée telle quelle.
4. **c27, № 13** : la série alterne `1овдал` / `1ийча` / `1уьллуш` — la palotchka y a
   été posée d'après l'adjacence ; le premier vers de la pièce utilise `1ехаяц` /
   `1еха` — à confronter à l'imprimé (ces formes sont peut-être en réalité `цI`).
5. **c27, № 20** : `Сиредни Азехь` — nom propre (village ? clan ?) à identifier.
6. **c209, № 8** : `«бур-бур»` — la graphie du mot est celle de l'imprimé ; sa
   prononciation exacte est à confirmer (mot d'emprunt ?).
7. **c521, № 1** : le nom `Асланбек Шерипов` est donné par le titre de la section ;
   le texte est en vers libres longs (ritme de chant de marche) et non strophique.
8. **c521, № 2** : la pièce alterne les voix de la mère et de «Маржан » (la jeune
   femme) — les guillemets de la source ont été conservés ; la lecture des
   guillemets-virgules comme indication de changement de locuteur est **notre
   interprétation** de la ponctuation de l'imprimé.
9. **c521, № 4** : `Тхайн Уду - ударник ван` — «Уду » est un chantre de kolkhoze /
   un nom propre (à vérifier) ; le trait d'union a été conservé tel quel.
10. **c141, XXIX-1** : `Асет хелхаелира` / `Дудас зуда ялийра` — vocabulaire dialectal
    (beries) ; relecture recommandée.

**Traductions de titres** (`ru`, `en`, `fr`) : elles sont **littérales et non relues**
(une traduction naturalisée exigerait un locuteur natif). Elles signalent le contenu
général, pas la forme poétique. Les traductions de **corps de texte** n'ont **pas**
été produites : `text.ru`, `text.en`, `text.fr` restent `null`, conformément à
`docs/prompt-recherche-oeuvres.md` § 1.3.

---

## 6. Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | ✅ index régénéré : 573 → **587** œuvres (14 ajouts, 0 orphelin, 0 resynchronisation) |
| `npm run validate-data` | ✅ données cohérentes (412 poèmes, 155 chants, 20 proses) — 1 avertissement **préexistant** (`mokhmad-mamakaev-hazachu-yoi-tulg`, coquille OCR latine) |
| `npm run lint` (ESLint) | ✅ aucune erreur |
| `npm test` (Vitest) | ✅ **39 tests / 39** réussis — `catalog.test.js` bumpé de 573 à 587 |
| `npm run format:check` (Prettier) | ✅ toutes les pages sont au format Prettier |
| `npm run build` | ✅ build réussi (avertissement de taille de bundle **préexistant**) ; sitemap régénéré : 669 URLs |
| `python3 scripts/verify_data.py` | ✅ **0 problème nouveau** — sortie **identique à la baseline** : 10 substituts résiduels (6 dans `poems.json` «Аллах1», 3 dans `prose.json` (`xlонс`, `yьсrarlан`, `rlонах`), 1 dans `index.json`), 0 cas ambigus, 0 doublon, index ↔ fichiers complets cohérents |

Les 10 substituts résiduels sont **préexistants** (mesurés sur le commit de départ par
`git stash` + `python3 scripts/verify_data.py`) et ne sont pas liés à ce lot.

---

## 7. Fichiers modifiés

- `src/data/songs.json` — **+14 fiches** en fin de fichier.
- `src/data/index.json` — régénéré (`npm run generate-index`), jamais édité à la main.
- `src/data/catalog.test.js` — `toBe(573)` → `toBe(587)` (2 occurrences).
- `docs/ajout-folklore-poemes-chants-2026-11-27.md` — ce rapport.
- `docs/prompt-recherche-oeuvres.md` — inventaire des sources mis à jour (§ 4.1).

**Aucun nouvel auteur** : tous les textes sont anonymes (`Халкъан`), dont la
transcription EN/FR (`Khalqan` / `Khalqan`) figure déjà dans
`src/utils/authorName.js`. Aucun ajout à `AUTHOR_NAMES` n'a été nécessaire.

---

## 8. Retour arrière

```bash
git revert <commit-du-lot>
```

En cas d'ajout manuel ultérieur :

```bash
git checkout HEAD~1 -- src/data/songs.json src/data/index.json src/data/catalog.test.js
```

---

## 9. Suites possibles

- **Lot « folklore soviétique »** : les ~55 pièces restantes de `c521.htm` (chants de
  guerre, de parti, de collectivisation) forment un corpus cohérent et entièrement
  inexploité.
- **Lot « тийжамаш »** : les ~13 complaintes restantes de `c27.htm` (sections «ЙоӀ дена
  тийжар », «Зуда цӀийндена тийжар », «Йиша йишина тийжар », «Нана кӀантана тийжар »).
- **Lot « берийн »** : les sections I–XXVIII de `c141.htm` (devinettes et formules de jeu)
  relèvent de `prose.json` ou d'une section à créer.
- **Chants de travail** : `c20.htm` («Къинхьегаман эшарш ») reste partiellement
  inexploité (§ 2, 3, 5, 10–11, 13, 16–17, 19–21, 24–25, 27–31).
- **Épopée héroïque** : le corpus `c251`–`c421` (илли) reste bloqué par la **corruption de
  colonne uCoz** constatée au lot 4 du 2026-11-26 (initiale du premier mot de chaque vers
  rejetée sur la ligne précédente). Une relecture sur l'imprimé ou une autre numérisation
  permettrait de le débloquer.
- **Халкъан тидамаш** : `c209.htm` reste très largement inexploité (§ 4.1.1 du prompt
  général), ainsi que `c202.htm` (Х1етал-металш).
