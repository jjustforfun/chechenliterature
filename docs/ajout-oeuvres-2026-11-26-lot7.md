# Ajout de 10 chants folkloriques tchétchènes — 26 novembre 2026, lot 7

## Résumé

Ajout de dix textes courts de chants de travail anonymes en tchétchène (`ce`) dans `src/data/songs.json`, attribués à `Халкъан` conformément à la convention du catalogue pour les œuvres folkloriques. Il s'agit de pièces de la section « Къинхьегамах лаьцна эшарш » de *Нохчийн фольклор*, compilé par Ш. А. Джамбеков (Грозный : «Книга», 1991), reproduites sur la page de la collection Орга : https://orga.narod.ru/folklor/c20.htm (fragments des pages imprimées 23–25, pages source c20.htm, sections indiquées ci-dessous).

Les textes sont uniquement en tchétchène. Aucune traduction n'a été produite. La source étant une collection de chants de travail anonymes, aucun auteur individuel ni millésime de composition n'est attribué.

| ID | Titre / incipit | Repère dans la page source |
|---|---|---|
| `folk-work-khovza-belan-muk` | Хьовза, хьовза белан мукъ хьо… | «Къинхьегамах лаьцна эшарш», № 2 |
| `folk-work-urs-ira` | Урс, хьо урс, ва ира урс… | même section, № 3 |
| `folk-work-lasta-mangal` | Ласта мангал, цаста буц… | même section, № 5 |
| `folk-work-kuyra-lasta` | Куьйра, куьйра, ласта… | section «Куьйр ластош локху эшарш», № 17 |
| `folk-work-kuyra-erza` | Куьйра, куьйра, ерза… | section «Куьйр ластош локху эшарш», № 19 |
| `folk-work-dig-pop` | Диг тоха, поп, боха… | section «Поп охьатухуш локху эшарш», № 21 |
| `folk-work-khokh-beza` | Хьокх, хьокх, беза хьокх… | section «Керт еш локху йиш», № 31 |
| `folk-work-yalta-yalta` | Ялта, ялта, хьекъалахь… | section «Куьйга хьаьжкӀаш юьйш локху йиш», № 25 |
| `folk-work-ts1e-latosh` | КӀур, кӀур, дӀанехьа бала… | section «ЦӀе латош локху йиш», № 13 |
| `folk-work-chovh-mangal` | ЧовхӀ, човхӀ, ира мангал… | section «Мангал хьокхуш локху эшарш», № 29 |

La page web regroupe les textes par geste ou outil de travail ; ces numéros sont les numéros internes visibles dans chaque sous-section, et ne sont pas des pages du livre.

## Contrôle des doublons et transcription

Les dix entrées ont été vérifiées contre le catalogue complet et entre elles : aucun ID répété, aucun couple `(auteur, titre ce)` dupliqué, aucun texte tchétchène complet identique. Deux premières sélections candidates ont été écartées durant le contrôle car elles recoupaient exactement des chants déjà au catalogue («Куьйра, куьйра, ерзалахь…», «КӀир, кӀир, нислолахь…»). Elles ne figurent pas dans ce lot. `scripts/verify_data.py` ne signale aucun doublon nouveau après correction.

Les substituts `1` et `I` de la transcription web ont été saisis comme **Ӏ (U+04C0)** uniquement dans les mots tchétchènes. Les champs `ce` des dix ajouts ne contiennent ni chiffres ni lettres latines et aucune occurrence de U+04CF. Les accents, mots et formes sont transcrits d'après la source consultée ; une relecture par un locuteur natif serait bienvenue, notamment pour le vocabulaire des outils ruraux.

## Validation

- `npm run generate-index` : index régénéré, total 559 œuvres (10 fiches nouvelles).
- `npm run check` : réussi, 39 tests sur 39 ; validation cohérente (410 poèmes, 129 chants, 20 proses).
- `npm run format:check` : réussi.
- `npm run build` : réussi ; avertissement de taille de bundle déjà présent.
- `python3 scripts/verify_data.py` : aucun doublon nouveau et aucun écart d'index. Le script conserve son code de sortie non nul uniquement en raison des 10 résidus préexistants de substitutions documentés dans les rapports antérieurs (poèmes russes avec «Аллах1» et fragments OCR de `mokhmad-mamakaev-hazachu-yoi-tulg`).

## Retour arrière

Avant commit, restaurer les trois fichiers de données depuis Git en préservant les changements indépendants : `src/data/songs.json`, `src/data/index.json` et `src/data/catalog.test.js`. Après commit, utiliser `git revert <commit>`.
