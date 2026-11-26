# Ajout de dix chants de travail — 26 novembre 2026, lot 5

## Source et sélection

Dix chants anonymes du folklore tchétchène, en langue originale, transcrits depuis
[Къинхьегаман эшарш](https://orga.narod.ru/folklor/c20.htm) dans le recueil
*Нохчийн фольклор*, compilé par Ш. А. Джамбеков (Грозный, Книга, 1991).
La numérotation ci-dessous est celle de la première série de cette page. Il s'agit
uniquement de chants traditionnels, pas de poèmes d'auteurs nommés. Les titres
sont des incipits ; aucune traduction n'a été inventée.

| Nº | Identifiant | Incipit |
| --- | --- | --- |
| 4 | `folk-work-urchakh` | Урчакх, урчакх, хьовзалахь… |
| 6 | `folk-work-targa-sema` | ТӀаргӀа сема балалахь… |
| 7 | `folk-work-sharsha` | Шарша, шарша, чехка шарша… |
| 8 | `folk-work-tsel` | Цел, цел, беркате цел… |
| 9 | `folk-work-sakh` | Сах, сах, сах, каде хьовзалахь… |
| 12 | `folk-work-chod` | ЧӀод, чӀод - ира ду… |
| 14 | `folk-work-bamba` | Бамба, бамба буькъа бу… |
| 15 | `folk-work-kir` | КӀир, кӀир, нислолахь… |
| 22 | `folk-work-dig` | Диг, хьо ира хилалахь… |
| 23 | `folk-work-raskha-din` | Расха дин, хьо болало… |

Les numéros 1–2, 18 et 26 de cette page étaient déjà au catalogue et ont été
écartés. L'илли « Турпал Нохчочух илли » de Nohchalla était également déjà
présent (`illi-turpal-nohcho`). Les chants très proches des variantes de
« Куьйра, куьйра, ерзалахь » ont été laissés de côté. Les IDs, titres d'auteur,
premiers vers et textes tchétchènes ont été comparés à l'ensemble des trois
fichiers, y compris par `SequenceMatcher` ; aucun rapprochement supérieur à
0,42 pour ces dix candidats. Les autres langues du catalogue ont été prises en
compte dans cette comparaison ; l'absence de doublons entre traductions reste
tributaire des attributions et des textes disponibles.

## Transcription et relecture

Les retours parasites à l'intérieur des vers ont été ressoudés ; la palotchka
notée `1` dans la source a été normalisée en Ӏ (U+04C0) dans les nouvelles
fiches seulement. Les autres graphies ont été conservées, notamment « Лам »,
« Ломал » et « мотт-гӀайба » au nº 6 : une relecture par un locuteur et une
comparaison avec l'imprimé sont souhaitables. Aucun changement rétroactif aux
fiches existantes. La source est une transcription numérique : le statut
traditionnel des textes ne garantit pas l'absence de coquilles de transcription.

## Vérifications

- `npm run generate-index` : 534 → 544 fiches.
- `npm run check` : réussi, 39 tests ; un avertissement préexistant de mélange
  latin/cyrillique dans `mokhmad-mamakaev-hazachu-yoi-tulg`.
- `npm run format:check` et `npm run build` : réussis ; avertissement Vite sur
  la taille d'un bundle.
- `python3 scripts/verify_data.py` : code 1 à cause des 10 substituts déjà
  documentés au lot 4, aucun dans `songs.json` ; aucun ID ou texte tchétchène
  strictement dupliqué. Les premiers vers partagés et la paire quasi identique
  signalés sont préexistants.
- `npm ci` signale 10 vulnérabilités des dépendances (5 modérées, 3 élevées,
  2 critiques), non modifiées dans ce lot.

Retour arrière après commit : `git revert <commit>`. Sans commit, restaurer les
fichiers modifiés avec les moyens habituels de Git en préservant tout autre travail.
