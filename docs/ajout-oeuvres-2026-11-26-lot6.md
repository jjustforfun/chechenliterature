# Ajout de 5 œuvres tchétchènes — 26 novembre 2026, lot 6

## Résumé

Ajout de **3 poèmes** et **2 chants folkloriques**, tous en tchétchène (`ce`) :
- deux poèmes d'auteurs nommés, ШаӀрани Хасаров et Ӏабдул-Хьамид Хатуев ;
- une comptine populaire issue du recueil *Нохчийн фольклор* ;
- deux chants de travail populaires du même recueil.

| Fichier | Avant | Après |
|---|---:|---:|
| `src/data/poems.json` | 407 | **410** |
| `src/data/songs.json` | 117 | **119** |
| `src/data/prose.json` | 20 | 20 |
| `src/data/index.json` | 544 | **549** |
| `src/data/catalog.test.js` | 544 attendus | **549 attendus** |

La couverture des textes complets passe de `ce` 404 à **409** ; `ru` 136, `en` 57 et `fr` 61 restent inchangés. Aucun texte anglais, français ou russe n'a été traduit par l'assistant. Les nouvelles fiches proposent le titre et le texte originaux en tchétchène seulement.

Aucun nouvel auteur n'a été ajouté à `src/utils/authorName.js` : les deux poètes et `Халкъан` sont déjà référencés.

## Œuvres ajoutées

### Poèmes (`src/data/poems.json`)

| ID | Auteur | Titre | Source |
|---|---|---|---|
| `khasarov-sharani-zha-dazhor` | ШаӀрани Хасаров | Жа дажор | [Маршо Радио, page 31495709](https://www.radiomarsho.com/a/31495709.html) — le texte porte la date « 1992 ш. » ; elle est conservée en note de source et non traitée comme date de composition vérifiée. |
| `khatuev-yoian-doa` | Ӏабдул-Хьамид Хатуев | ЙоьӀан доӀа | [Маршо Радио, page 29472792](https://www.radiomarsho.com/a/29472792.html) |
| `folk-ber-khostush-khala-vogu` | Халкъан | Хьала вогӀу | [Орга, «Нохчийн фольклор», p. 155](https://orga.narod.ru/folklor/c141.htm#p155) — XXXI, «Бер хьостуш олуш долу дешнаш», № 3. |

Pour les deux poètes, `year_written` reste `null` : les dates affichées sur Маршо Радио sont des dates de publication, pas des dates de composition établies. Les `author_years` suivent les fiches déjà présentes.

### Chants folkloriques (`src/data/songs.json`)

Auteur `Халкъан`, `author_years: "Unknown"`, `year_written: null`.

| ID | Incipit / titre | Source |
|---|---|---|
| `folk-work-toha-metig` | Тоха метиг, Ӏотта бел… | [Орга, «Нохчийн фольклор», p. 25](https://orga.narod.ru/folklor/c20.htm#p25_3) — «Къинхьегамах лаьцна эшарш», № 1. |
| `folk-work-tukar-kade-dolalo` | Тукар, каде долало… | [Орга, «Нохчийн фольклор», p. 25](https://orga.narod.ru/folklor/c20.htm#p25_3) — «Къинхьегамах лаьцна эшарш», № 4. |

Les deux chants sont transcrits depuis le recueil *Нохчийн фольклор*, сост. Ш. А. Джамбеков, Грозный : «Книга», 1991. Les retours dus à la mise en page ont été ressoudés à l'intérieur des vers ; aucune parole n'a été ajoutée.

## Sélection et déduplication

Les cinq candidats ont été contrôlés avant insertion contre les 544 œuvres antérieures et entre eux : identifiants, couples `(auteur, titre ce)`, premiers vers, puis textes complets normalisés (palotchka et ponctuation ignorées). Aucun identifiant, couple auteur/titre, premier vers ou texte tchétchène identique n'a été trouvé.

La similarité `SequenceMatcher` maximale avec un texte `ce` préexistant est **0,409** (`folk-work-tukar-kade-dolalo` comparé à `folk-work-dig`) — sous le seuil de 0,42 ; les textes et les gestes de travail qu'ils décrivent sont distincts. `python3 scripts/verify_data.py` ne signale aucun doublon nouveau.

**Candidat lu mais reporté :** « Хьонке дахар » de ШаӀрани Хасаров ([page 31495720](https://www.radiomarsho.com/a/31495720.html)). La source est complète, mais plusieurs formes et coupures typographiques — par exemple `Хьаннаш Iа,хIиттина`, `Ду –теша` et `Я илли,йоьхначу` — demandent une vérification sur un enregistrement ou par un locuteur natif. Elles n'ont pas été corrigées par conjecture et le poème n'a pas été ajouté.

Les autres courtes pièces de la section finale de `c20.htm` (№ 2, 3 et 5) restent à évaluer dans un lot ultérieur ; elles ne sont pas présentées comme des doublons.

## Palotchka et transcription

Conformément à `docs/prompt-palotchka.md`, les formes de la source (notamment `I` latin chez Маршо Радио et `1` chez Орга) ont été normalisées **à la saisie des cinq nouvelles fiches** en **Ӏ, U+04C0**. Les cinq corps de texte contiennent 23 occurrences de cette lettre. Les dates et nombres n'ont pas été convertis ; le millésime `1992 ш.` du poème de Хасаров est signalé dans `source`.

Audit ciblé des nouvelles fiches : **0** `ӏ` (U+04CF), **0** substitut `1` / `I` / `l` / `|` collé au cyrillique, **0** caractère latin ou chiffre dans les champs `ce`. Aucun champ `ru`, `en` ou `fr` n'a été rempli. Aucune œuvre antérieure n'a été modifiée.

La disposition de « Жа дажор » est regroupée en cinq quatrains d'après les rimes : la page source ne marque pas explicitement les strophes. Dans « ЙоьӀан доӀа », les retours de vers et les reprises du refrain de la page sont conservés ; les espacements entre groupes suivent les reprises. Une relecture tchétchène de l'orthographe et de la strophisation reste souhaitable.

## Vérifications

| Commande | Résultat |
|---|---|
| `npm run generate-index` | **544 → 549** ; 5 fiches ajoutées, 0 resynchronisée, 0 orpheline. |
| `npm run validate-data` | ✅ Cohérence des 549 fiches ; un avertissement préexistant sur le mélange latin/cyrillique de `mokhmad-mamakaev-hazachu-yoi-tulg`. |
| `npm run check` | ✅ ESLint et **39/39 tests**. |
| `npm run format:check` | ✅ Prettier. |
| `npm run build` | ✅ Build Vite réussi ; sitemap de 631 URLs. Avertissement Vite préexistant sur la taille d'un bundle. |
| `python3 scripts/verify_data.py` | Aucun nouveau doublon ni nouvel écart d'index. Le script sort toujours avec le code 1 à cause des **10 substituts préexistants** documentés dans les rapports antérieurs : six `Аллах1` dans des champs russes, trois résidus OCR de `mokhmad-mamakaev-hazachu-yoi-tulg`, et une occurrence héritée dans l'index. |

`npm ci` a installé les dépendances sans modifier les manifestes ; npm signale 10 vulnérabilités déjà présentes dans l'arbre de dépendances (5 modérées, 3 élevées, 2 critiques). Aucun paquet n'a été mis à niveau dans ce lot.

## Droits et retour arrière

Les chants et la comptine sont présentés comme des textes populaires anonymes, avec référence au recueil et lien vers la source. Les poèmes de Хасаров et Хатуев restent soumis aux droits de leurs auteurs ou ayants droit ; les fiches gardent attribution et liens vers les pages sources, conformément à la pratique du projet.

Aucune sauvegarde de données n'est ajoutée au dépôt. Après commit, retour arrière par `git revert <commit>` ; avant commit, restaurer les fichiers modifiés depuis Git en préservant tout autre travail.
