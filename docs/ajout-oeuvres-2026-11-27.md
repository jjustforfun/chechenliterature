# Ajout du 27 novembre 2026 — 2 poèmes et 12 chants folkloriques

Le catalogue passe de 559 à 573 œuvres. Les chants traditionnels sont anonymes (`Халкъан`) ; Ш. А. Джамбеков est le compilateur, pas l'auteur. Titres et textes sont en tchétchène ; les champs de traduction non vérifiés restent à `null`.

## Sources et inventaire

- **Маршо Радио, bibliothèque en ligne** : [`yusupov-bayttamal`](https://www.radiomarsho.com/a/30047713.html) — « Байттамал, кхин суна карор дац дешнаш... », Ибрагим Юсупов (datation dans la source : Хоттане, mars 1982) ; [`bataeva-sin-khasa`](https://www.radiomarsho.com/a/27368952.html) — « Син хьаса ца гучохь », Хеда Батаева (2002). L'épigraphe de Бана Гайтукаева est conservée et attribuée. La graphie du nom de Юсупов suit la fiche auteur du catalogue ; une transcription EN/FR a été ajoutée pour Батаева.
- **Орга**, [*Нохчийн фольклор*](https://orga.narod.ru/folklor/main.htm), compilé par Ш. А. Джамбеков, Грозный : «Книга», 1991 (référence bibliographique du sommaire), [« Хелхаран эшарш »](https://orga.narod.ru/folklor/c493.htm). Identifiants avec le préfixe `folk-khelkharan-eshar-` :

| №   | Suffixe                  | Incipit                            |
| --- | ------------------------ | ---------------------------------- |
| 4   | `tsallakum`              | ЦӀаллакум - цӀакум                 |
| 5   | `tsiminki`               | Циминки новкъа                     |
| 6   | `vai-dala-yazde`         | Вай дала язде                      |
| 7   | `vai-san-korni`          | Вай, вай, сан кӀорни               |
| 8   | `katokhna`               | Катоьхна схьалаьцна                |
| 9   | `vai-dela-guo`           | Вай дела гӀуо шуьша                |
| 12  | `kain-basar`             | КӀайн басар кхачийна, ла-ла-ла      |
| 19  | `vattai-san-korni`       | Ваттай, сан кӀорни                 |
| 20  | `okhyakhozhush`          | Охьахьожуш вала                    |
| 22  | `bakkhiichu-nakha`       | Баккхийчу наха хьо ваккха боху     |
| 24  | `datokha-tarash`         | ДӀатоха тӀараш, ла-ла-ла!          |

- **Même recueil**, [« Сатиран эшарш »](https://orga.narod.ru/folklor/c490.htm), № 14 : `folk-satiran-eshar-kho-nearkh` (« Хьо неӀарх чу ваьлчахьана… »).

## Déduplication et transcription

- Comparaison avec les trois fichiers complets et au sein du lot : IDs, titres tchétchènes par auteur, premiers vers et similarité `SequenceMatcher` sur les textes normalisés, sans les refrains syllabiques. Titres russes, anglais et français des mêmes auteurs examinés séparément. Les chants de danse № 7 et 19 partagent l'apostrophe « сан кӀорни », mais pas la suite de leurs quatrains.
- Écartés par prudence : chant de danse № 11 (motif « кор / неӀ » voisin du chant satirique `folk-satiran-eshar-korekh-kor`) et chant satirique № 15 (refrain commun à `folk-satiran-eshar-govtal-kach`). Les huit pièces de la page [« Забаре эшарш »](https://orga.narod.ru/folklor/c488.htm) figuraient déjà dans le catalogue. Le chant de danse № 16 demande une vérification sur l'imprimé (`XIe` dans la source).
- Dans les nouveaux corps de texte uniquement : 24 substitutions de `1` dans les chants et 22 de `I` dans les poèmes, en **Ӏ (U+04C0)**, y compris en bord de mot. Quelques coupures de ligne internes ont été resserrées. Pas de correction conjecturale de l'orthographe. La segmentation et les formes inhabituelles (dont `делаӀ` au № 4) restent à relire sur l'imprimé ou avec un locuteur natif.
- L'accès public aux sources ne constitue pas une licence de republication. Les conditions de réutilisation des deux poèmes d'auteur et de l'édition numérique restent à vérifier avant diffusion.

## Vérifications et retour arrière

- Index régénéré avec `npm run generate-index` ; `npm run check` passe (39 tests) et `npm run build` réussit, avec l'avertissement Vite sur la taille du bloc des poèmes.
- `python3 scripts/verify_data.py` : sortie identique à celle obtenue sur le commit de départ. Les 10 substituts historiques, les trois premiers vers partagés et la paire quasi identique signalée sont préexistants ; aucun signalement nouveau.
- Retour arrière : `git revert <commit-du-lot>`.
