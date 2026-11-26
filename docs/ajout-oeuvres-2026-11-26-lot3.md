# Lot d'œuvres ajoutées le 2026-11-26 (lot 3) : 6 poèmes d'auteur + 9 chants folkloriques

> Date d'ajout (`date_added`) : `2026-11-26` · Branche `arena/a341a5ea-chechenliterature` · base `main` @ `8a227a1`
>
> Ce document est le **rapport de traçabilité** du lot. Il complète
> `docs/prompt-recherche-oeuvres.md`, `docs/prompt-palotchka.md` et les rapports des lots
> précédents (`…2026-11-26.md` = lot 1, `…-lot2.md` = lot 2).

Ajout de **15 œuvres** transcrites depuis des sources en ligne vérifiées :
**6 poèmes en tchétchène d'auteurs contemporains** et **9 chants du folklore tchétchène**
(recueil de Ш. А. Джамбеков, 1991, mis en ligne par Орга).

- `src/data/poems.json` : 395 → **401**
- `src/data/songs.json` : 88 → **97**
- `src/data/prose.json` : 20 → **20** (inchangé)
- `src/data/index.json` : 503 → **518** (régénéré par `npm run generate-index`, jamais édité à la main)
- `src/data/catalog.test.js` : total attendu 503 → **518**
- `src/utils/authorName.js` : **2** nouvelles transcriptions EN/FR (ШаӀрани Хасаров, Юсуп Яралиев)

Couverture des textes pleins : `ce` 363 → **378** (+15) · `ru` 136 · `en` 57 · `fr` 61 (inchangés).
**Tous les corps de texte sont en tchétchène et proviennent mot pour mot des sources**.
Aucune traduction de corps de texte n'a été produite par l'assistant ; seuls les **titres**
`ru`/`en`/`fr` sont des traductions littérales non relues (voir « Points à relire »).

---

## 1. Sources dépouillées et instructions lues

### Sources

1. **Маршо Радио — онлайн-библиотека** (<https://www.radiomarsho.com/z/17538>), première page de
   l'index, publications de 2022. Pages d'œuvres lues intégralement :
   `29243176`, `31759163`, `31759181`, `31495711`, `31804911`, `31804934`.
2. **Орга — «Нохчийн фольклор»** (<https://orga.narod.ru/folklor/main.htm>) :
   - [« Ӏер-дахаран хьокъехь эшарш » (`c457.htm`)](https://orga.narod.ru/folklor/c457.htm) — № 2, 7, 8, 13, 16 ;
   - [« Сатиран эшарш » (`c490.htm`)](https://orga.narod.ru/folklor/c490.htm) — № 5, 6, 7, 11.
   Édition *Чеченский фольклор (Нохчийн фольклор)*, composée par **Ш. А. Джамбеков**,
   Grozny : « Книга », 1991.

L'inventaire de ces deux sources dans `docs/prompt-recherche-oeuvres.md` a été mis à jour :
numéros désormais exploités, numéros restants, écarts et pages de Маршо Радио déjà visitées.

### Instructions lues avant modification

`README.md`, les 11 fichiers de `docs/` (les deux prompts, la note de relecture et les huit
rapports d'ajout), `scripts/validate-data.mjs`, `scripts/generate-index.mjs`,
`scripts/verify_data.py`, `src/data/catalog.js`, `src/data/catalog.test.js`,
`src/data/integrity.test.js`, `src/utils/authorName.js`, `.github/workflows/ci.yml` et
`package.json`.

---

## 2. Œuvres ajoutées

Toutes ont `source`, `external_links`, `text_preview.ce`, des tags du vocabulaire existant et
`date_added = 2026-11-26`. Les nouvelles fiches sont ajoutées **en fin de fichier**, sans modifier
les 503 fiches antérieures.

### A. Poèmes d'auteur (`src/data/poems.json`, 6 œuvres)

| # | `id` | Auteur | Titre (`ce` / `fr`) | Vers | Palotchkas | Source |
|---|---|---|---|---:|---:|---|
| 1 | `yusupov-ilman-zie-etta-akh-sohga` | Ильман Юсупов | ЗӀе етта ахь соьга… / Tu m'as fait du tort… | 12 | 8 | [Маршо Радио `29243176`](https://www.radiomarsho.com/a/29243176.html) |
| 2 | `yusupov-ilman-sihvella-vojdu-hjo` | Ильман Юсупов | Сихвелла воьду хьо… / Tu marches précipitamment… | 16 | 29 | [Маршо Радио `31759163`](https://www.radiomarsho.com/a/yusupov-iilman-sihvella-vojdu-hjo/31759163.html) |
| 3 | `yusupov-ilman-yazdehja` | Ильман Юсупов | Яздехьа… / Écris… | 20 | 25 | [Маршо Радио `31759181`](https://www.radiomarsho.com/a/yusupov-iilman-yazdehja/31759181.html) |
| 4 | `khasarov-sharani-dadin-an` | **ШаӀрани Хасаров** (nouveau) | Дадин ан / Le marieur du père | 20 | 13 | [Маршо Радио `31495711`](https://www.radiomarsho.com/a/31495711.html) |
| 5 | `rashidov-san-nohchiyn-yoi` | Шаид Рашидов | Сан нохчийн йоӀ / Ma jeune fille tchétchène | 16 | 11 | [Маршо Радио `31804911`](https://www.radiomarsho.com/a/rashidov-shaid-san-nohchiyn-yoi/31804911.html) |
| 6 | `yaraliev-yusup-gialatash` | **Юсуп Яралиев** (nouveau) | ГӀалаташ / Les erreurs | 24 | 22 | [Маршо Радио `31804934`](https://www.radiomarsho.com/a/yaraliev-yusup-gialatash/31804934.html) |

`author_years` = `null` et `year_written` = `null` pour les six fiches : les pages donnent la date
de mise en ligne (2022), pas la date de composition. Quand le poème porte une date en fin de texte
(« 2001 ш. » pour « Дадин ан », « 2005 » pour « Яздехьа… »), elle est signalée dans `source` mais
n'est pas substituée à une date de composition vérifiée. Les noms d'auteur suivent la graphie
déjà utilisée dans le catalogue (`Ильман Юсупов`, `Шаид Рашидов`) ; les deux nouveaux auteurs ont
reçu leur transcription dans `AUTHOR_NAMES` :

- `ШаӀрани Хасаров` → *Sharani Khasarov* / *Charani Khasarov* ;
- `Юсуп Яралиев` → *Yusup Yaraliyev* / *Youssoup Yaraliev*.

Les pages de Маршо Радио écrivent les noms dans l'ordre « фамилия имя » (« Юсупов Iилман »,
« Рашидов Шаид », « Яралиев Юсуп », « Хасаров ШаIрани ») ; les fiches utilisent l'ordre
« имя фамилия » déjà retenu dans le catalogue, et la source conserve la graphie de la page
(avec la palotchka normalisée pour « ШаIрани »).

### B. Chants folkloriques (`src/data/songs.json`, 9 œuvres)

Auteur `Халкъан`, `author_years = "Unknown"`, `year_written = null`, texte `ce` seul.
Tags : `илли`, `халкъан` + un à deux tags existants.

| # | `id` | Titre (`ce` / `fr`) | Section du recueil | Vers | Palotchkas |
|---|---|---|---|---:|---:|
| 7 | `folk-ier-dakharan-eshar-davisa-uyre` | Дависа, Ӏуьйре, хьо ма-ерра йовза… / Adieu, matin… | Ӏер-дахаран, № 2 | 16 | 18 |
| 8 | `folk-ier-dakharan-eshar-khokara-chara` | Хи кхачийна чӀара санна… / Comme un poisson… | Ӏер-дахаран, № 7 | 8 | 2 |
| 9 | `folk-ier-dakharan-eshar-kho-soha-valar-ben` | Хьо соьха валар бен… / Si tu venais à moi… | Ӏер-дахаран, № 8 | 12 | 0 |
| 10 | `folk-ier-dakharan-eshar-ne-yillicha` | НеӀ йиллича, неӀре хьоьжуш… / Quand la porte est ouverte… | Ӏер-дахаран, № 13 | 8 | 7 |
| 11 | `folk-ier-dakharan-eshar-siyna-stigal-yokhu` | Сийна стигал юху бохуш… / On dit que le ciel bleu… | Ӏер-дахаран, № 16 | 28 | 8 |
| 12 | `folk-satiran-eshar-san-samukha` | Сан самукъа долучу хенахь… / Quand je suis de bonne humeur… | Сатиран, № 5 | 11 | 3 |
| 13 | `folk-satiran-eshar-zuda-yolu-kant` | Мила ву шуха зуда йолу кӀанат? / Lequel est marié ? | Сатиран, № 6 | 4 | 4 |
| 14 | `folk-satiran-eshar-tishdella-ne-kor` | Тишделла неӀ-кор тӀечӀагӀдан деза… / Il faut réparer la porte… | Сатиран, № 7 | 4 | 10 |
| 15 | `folk-satiran-eshar-govtal-kach` | Цхьа ше хиллал гӀовтал кач… / Une fois tu m'as offert un manteau… | Сатиран, № 11 | 4 | 2 |

**Total : 203 vers, 162 occurrences de `Ӏ` dans les textes, 221 dans l'ensemble des nouvelles
fiches (titres, textes, aperçus, sources).**

---

## 3. Normalisation du palotchka et transcription

Conformément à `docs/prompt-palotchka.md` :

- Les sources écrivent la palotchka tantôt `1` (Орга), tantôt `I` latin (Маршо Радио). Toutes les
  occurrences adjacentes au cyrillique ont été converties en **Ӏ (U+04C0)** dès la saisie ;
  doubles `II` internes fusionnés (`маьIIехь` → `маьӀехь` dans « ГӀалаташ »).
- Le `I` latin du nom d'auteur dans la `source` de « Дадин ан » (« Хасаров ШаIрани ») a aussi
  été normalisé en « ШаӀрани » : c'est la graphie cyrillique du nom, et `verify_data.py` aurait
  signalé un substitut résiduel.
- **Aucun** chiffre, nombre ou année n'a été converti (`2001 ш.`, `2005`, dates de mise en ligne).
- **0** `1`/`I`/`l`/`|` résiduel collé au cyrillique, **0** `ӏ` (U+04CF), **0** lettre latine dans
  un champ `ce`, **0** palotchka dans un champ `ru`/`en`/`fr` pour les 15 fiches.
- Retours à la ligne parasites des pages `<p>` (Орга) et coupures douces de vers (Маршо Радио)
  ressoudés d'un espace, sans réécrire l'orthographe ni la ponctuation des sources.
- Pages Маршо Радио : le titre, le nom de l'auteur répété en pied de page, les contrôles lecteur
  (« Video Player is loading », « ДIасаяхьийта », liens MP3) et la date de publication ne font pas
  partie du corps du poème. Les tirets, guillemets, points de suspension, la graphie « халà »,
  « Хьуо » et la ponctuation d'origine sont conservés tels quels.

Aucune correction rétroactive n'a été appliquée aux fiches existantes : les 10 substituts
préexistants (7 `Аллах1` dans des textes russes de Берзлоев, 3 résidus OCR dans
`mokhmad-mamakaev-hazachu-yoi-tulg`) restent inchangés, conformément aux lots précédents et à
`docs/relecture-tchetchene-cles.md`.

---

## 4. Déduplication et œuvres écartées

Contrôle effectué **avant écriture** par script sur les 15 candidats contre les 503 œuvres du
catalogue (`poems.json`, `songs.json`, `prose.json`, `index.json`) et à l'intérieur du lot :

- identifiants ;
- couple `(auteur, titre ce)` normalisé ;
- premier vers normalisé (`text` et `text_preview`) ;
- similitude `SequenceMatcher` sur les 400 premiers caractères normalisés, avec un seuil de
  **0,88** (plus strict que le 0,92 habituel) ;
- recouvrement de séquences de 6 mots supérieur à 25 % ;
- recoupement sémantique avec les versions `ru`/`en`/`fr` des mêmes auteurs.

**Résultat : 0 doublon introduit.** `python3 scripts/verify_data.py` confirme après écriture une
sortie **strictement identique** à celle d'avant le lot.

Écartés :

| Candidat | Raison |
|---|---|
| Мамакаев Мохьмад, « ДӀаяла » ([`31804920`](https://www.radiomarsho.com/a/mamakaev-mohjmad-diayala/31804920.html)) | **Doublon exact** de `mokhmad-mamakaev-dyayala` (déjà au catalogue, texte identique vers à vers) |
| Мохьмад Сулаев, « ДоӀа » ([`31804926`](https://www.radiomarsho.com/a/mohjmad-sulaev-doia/31804926.html)) | Attribution ambiguë avec `Магомет Сулаев` (déjà 5 fiches) ; pas de nouvelle fiche sans décision du mainteneur |
| `31804917` et `31804931` (titres `***`) | Aucun titre exploitable dans la source |
| « Чурт » (шира легенда) de СаьӀид Гацаев ([`31804907`](https://www.radiomarsho.com/a/gatsaev-sajiid-churt-shira-legenda/31804907.html)) | Récit en prose, hors périmètre « poèmes/chants » de ce lot |
| `c457.htm` № 3, `c493.htm` № 2 | Refrains quasi identiques à ceux de № 7 (retenu) et à `folk-khelkharan-eshar-kuygash-ma-khaza` (déjà au catalogue) |
| `c490.htm` № 8, № 12–15 | Variantes rapprochées de № 7 (retenu) et de № 11 (retenu), mêmes refrains « кхин ма воьллахь тхоьга » |
| `c493.htm` № 25 | Variante de `folk-satiran-eshar-tishdella-ne-kor` / de `folk-satiran-eshar-korekh-kor` (déjà au catalogue) |

Homonymies vérifiées sans conflit : les trois poèmes d'Ильман Юсупов ajoutés ont des premiers vers
et des sujets distincts des six fiches `yusupov-ilman-*` déjà présentes ; « Сан нохчийн йоӀ » de
Шаид Рашидов n'est pas `rashidov-vaga-ma-vehya` ; les cinq chants de « Ӏер-дахаран » ajoutés ne
reprennent pas les refrains de `folk-ier-dakharan-eshar-san-sa-khunda-khiyza` ni de
`folk-ier-dakharan-eshar-nanna`.

---

## 5. Points à relire par un locuteur natif

- **Titres traduits par l'assistant** (`ru`/`en`/`fr` des 15 fiches) : traductions littérales ou
  descriptives, non relues. En particulier « Дадин ан » (rendu « Сват отца » / « The Father's
  Matchmaker »), « Мила ву шуха зуда йолу кӀанат? » (titre traduit par une question) et les titres
  de chants folkloriques donné d'après leur premier vers.
- Graphies conservées telles quelles depuis les sources : `тай….` (quatre signes en fin de
  « ЗӀе етта ахь соьга… »), `Ма халà вогӀу`, `Хьуо деши ду…`, `Ма делхахьа. жима кӀорни,`,
  `Хьажал хьо,къан ло, ца ло`, `« Ан дац и, ду иза «Къан»!»`.
- Les strophes des poèmes de Маршо Радио suivent la mise en page de la source ; la coupe en
  quatrains des chants de Орга, dont la page ne marque pas les strophes, reste une restitution
  fondée sur les rimes et les refrains (méthode des lots précédents).

---

## 6. Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | 15 fiches ajoutées en fin d'index (503 → 518), 0 resynchronisée |
| `npm run validate-data` | ✅ données cohérentes (518/518) ; 1 avertissement **préexistant** sur `mokhmad-mamakaev-hazachu-yoi-tulg` |
| `npm run check` | ✅ `validate-data` + ESLint + Vitest **39/39** |
| `npm run format:check` | ✅ Prettier |
| `npm run build` | ✅ Vite 5.4.21, sitemap régénéré (599 URLs) |
| `python3 scripts/verify_data.py` | Sortie **identique** à l'état avant lot (`diff` vide) : 10 substituts préexistants, 0 nouveau ; aucun doublon |

Contrôle complémentaire : ordre des clés des fiches, présence de `text_preview.ce`, absence de
doubles espaces, de U+04CF et de caractères latins dans les champs `ce`, cohérence des langues
disponibles dans l'index — 0 écart sur les 15 fiches ajoutées.

---

## 7. Retour arrière

Aucune sauvegarde `src/data/backups/` n'est créée (convention depuis `9f05332`). Toutes les
modifications du lot tiennent dans un seul commit sur la branche courante :
`git revert <commit>` supprime les 15 fiches, les deux transcriptions de `authorName.js` et
rétablit `index.json` (518 → 503) et le total du test (518 → 503).

## Droits

Les chants folkloriques sont du domaine public dans leur langue d'origine ; ils sont cités
d'après le recueil de Ш. А. Джамбеков (1991). Les poèmes d'Ильман Юсупов, ШаӀрани Хасаров,
Шаид Рашидов et Юсуп Яралиев restent la propriété de leurs auteurs ou ayants droit ; ils sont
repris avec attribution et lien vers la source, selon la pratique du projet. À retirer sur
simple demande d'un ayant droit.
