# Ajout de 19 poèmes en langue tchétchène

> Date d'ajout : 2026-11-10 · Branche `arena/0ae6ff1b-chechenliterature`

> **Note de fusion (2026-11-11).** Ce lot a été préparé sur un fork en retard sur `main`
> (base du 2026-08-30) : les chiffres et les résultats d'audit ci-dessous décrivent l'état
> du fork à cette date. Une fois le lot fusionné dans `main` :
>
> - `poems.json` : 264 → **283** ; catalogue : 297 → **316** œuvres (`catalog.test.js`) ;
> - `index.json` est régénéré par `npm run generate-index` (19 fiches ajoutées en fin
>   d'index, avec `available_languages`) et n'est plus édité à la main ;
> - `src/data/backups/2026-11-10-palotchka/` n'est **pas conservé** dans le dépôt (comme les
>   autres sauvegardes depuis `9f05332`). Il contenait l'état du fork avant le lot
>   (identique au commit `6163314`), pas celui de `main` : la commande `cp` de rollback
>   citée plus bas ne s'applique donc plus. Pour annuler le lot : `git revert`.

Ajout de **19 poèmes originaux en tchétchène (`ce`)**, de **7 poètes tchétchènes**
(dont **5 absents de la base jusqu'ici**), avec fiches correspondantes dans
`src/data/index.json`.

- `src/data/poems.json` : 181 → **200**
- `src/data/index.json` : 214 → **233**
- `src/utils/authorName.js` : 5 nouvelles transcriptions EN/FR (consigne du README)
- `scripts/verify_data.py` : nouvel outil d'audit (dry-run palotchka + doublons + index)
- `src/data/backups/2026-11-10-palotchka/` : sauvegarde des 4 fichiers avant modification

## Instructions lues avant modification

`README.md` (format d'une œuvre, fiche `index.json`, translittération des auteurs),
`docs/prompt-palotchka.md` (procédure de normalisation), `docs/ajout-poemes-tchetchenes-2026-08-29.md`
(lot précédent, conventions et pièges), `public/llms.txt`, `src/data/catalog.js`,
`src/utils/contentLanguage.js`, `src/utils/getTranslatedField.js`, `src/utils/authorName.js`,
`src/pages/PoemDetail.jsx`, `vite.config.js`. Aucun `AGENTS.md` n'est présent dans le dépôt.

## Poèmes ajoutés

Tous ont un `text.ce`, un titre `ce` + `ru`, un `text_preview.ce`, une source et un lien externe.
Les 19 suivent le format des 53 fiches `ce`-only déjà présentes (pas de traduction inventée :
`text` ne contient que la langue originale, comme la majorité du catalogue).

| id | Titre (ce / ru) | Poète | Source | Palotchkas normalisées |
|---|---|---|---|---|
| `hadzhimuradov-ashkhoy-marta` | Ӏашхой-Марта / Ачхой-Мартан | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 18 |
| `hadzhimuradov-shovda` | Шовда / Родник | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 9 |
| `hadzhimuradov-malh` | Малх / Солнце | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 1 |
| `hadzhimuradov-vedankho` | Веданхо / Ведено | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 9 |
| `hadzhimuradov-dola-kerla-sho` | Дола Керла шо / Наступает Новый год | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 13 |
| `hadzhimuradov-klassera-kant` | Классера кӀант / Мальчик из класса | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 13 |
| `hadzhimuradov-san-liza` | Сан Лиза / Моя Лиза | Вахит Хаджимурадов | [Стихи.ру](https://stihi.ru/2013/08/19/1091) | 13 |
| `khamerzaev-nokhchiin-mott` | Нохчийн мотт / Чеченский язык | **Заурбек Хамерзаев** | [Стихи.ру](https://stihi.ru/2011/11/06/9795) | 11 |
| `matagov-nokhchiin-mott` | Нохчийн мотт! / Чеченский язык! | **Исхан Матагов** | [Стихи.ру](https://stihi.ru/2023/02/10/409) | 2 |
| `nokhchieva-nokhchiin-mattakh-stikhash` | Нохчийн маттахь стихаш / Стихи на чеченском языке | **Марем Нохчиева** | [Стихи.ру](https://stihi.ru/2012/09/27/2063) | 9 |
| `idrisov-daymohk` | Даймохк / Отчизна | **Хасаин Идрисов** | [Проза.ру](https://proza.ru/2012/04/06/599) | 7 |
| `tsaldaeva-adamash` | Адамаш / Люди | Фариза Цалдаева | [Стихи.ру](https://stihi.ru/2017/10/04/6155) | 18 |
| `tsaldaeva-daymohk` | Даймохк! / Родина! | Фариза Цалдаева | [Стихи.ру](https://stihi.ru/2017/10/04/6196) | 8 |
| `tsaldaeva-nokhchiin-yoi` | Нохчийн йоӀ / Чеченская девушка | Фариза Цалдаева | [Стихи.ру](https://stihi.ru/2017/10/04/6271) | 10 |
| `tsaldaeva-sirla-buysa` | Сирла буьйса / Светлая ночь | Фариза Цалдаева | [Стихи.ру](https://stihi.ru/2017/10/04/6238) | 11 |
| `tsaldaeva-ilmankho` | Ӏилманхо / Учёный | Фариза Цалдаева | [Стихи.ру](https://stihi.ru/2020/01/08/8472) | 15 |
| `gaytukaeva-bargashna-biarze-khilla` | БӀаьргашна бӀаьрзе хилла… / Когда глаза ослепли… | **Бана Гайтукаева** | [Нохчалла.com, журнал «Дош»](https://www.nohchalla.com/literatura/chechenskie-stihi/bana-gaytukaeva/411-bana-gaytukaeva) | 19 |
| `gaytukaeva-so-yinchu-diynah` | Со йинчу дийнахь… / В день, когда я родилась… | **Бана Гайтукаева** | [Нохчалла.com, журнал «Дош»](https://www.nohchalla.com/literatura/chechenskie-stihi/bana-gaytukaeva/411-bana-gaytukaeva) | 14 |
| `gaytukaeva-daella-nearsh` | ДӀаелла неӀарш, дӀаелла! / Откройте двери все, откройте! | **Бана Гайтукаева** | [Нохчалла.com, журнал «Дош»](https://www.nohchalla.com/literatura/chechenskie-stihi/bana-gaytukaeva/411-bana-gaytukaeva) | 8 |

**Nouveaux poètes ajoutés à `AUTHOR_NAMES`** (EN / FR) : Заурбек Хамерзаев,
Исхан Матагов, Марем Нохчиева, Хасаин Идрисов, Бана Гайтукаева.
Вахит Хаджимурадов et Фариза Цалдаева étaient déjà référencés (en prose pour le premier).

Thèmes : patrie / exil (Ӏашхой-Марта, Веданхо, Со йинчу дийнахь…), langue tchétchène
(Нохчийн мотт ×3), nature (Шовда, Малх, Сирла буьйса), guerre et paix (Дола Керла шо,
Даймохк!), enfance et école (Классера кӀант), amour (Сан Лиза), foi et morale
(Адамаш, Ӏилманхо), deuil (ДӀаелла неӀарш).

## Doublons : contrôle systématique

Vérifiés avant insertion, sur **les 4 fichiers** (`poems`, `songs`, `prose`, `index`,
y compris les 7 fiches `index`-only héritées) :

- identifiants (par fichier) ;
- couple `(auteur, titre ce)` normalisé ;
- premier vers normalisé (texte complet **et** `text_preview`) ;
- texte complet normalisé : égalité, inclusion et similarité `SequenceMatcher > 0,92` ;
- doublons internes au lot.

**Résultat : 0 doublon introduit.** Les titres récurrents ne sont pas des doublons :
«Нохчийн мотт» est désormais porté par 4 auteurs différents (Цуруев, Цалдаева,
Хамерзаев, Матагов) et «Даймохк / Даймохк!» par 4 autres (Мамакаев, Гацаев,
Идрисов, Цалдаева) — textes distincts à chaque fois. Les poèmes de Шарип Цуруев
(«Нохчийн мотт»), Леча Абдулаев («Нохчийчоь сан нохчийчоь») et les 4 prose de
Вахит Хаджимурадов déjà présents ont été écartés volontairement.

**Constat préexistant (non modifié)** : l'audit signale une variante quasi identique
déjà dans la base, `arsanukaev-barkalla-adamash` (2026-08-28) ≈
`arsanukaev-khekharkho` (2026-08-29) — deux versions du même poème «Хьехархо».
De même, 2 premiers vers sont partagés par des `иллеш` traditionnels (refrains).
Ces cas antérieurs au lot sont laissés tels quels et signalés ici pour information.

## Palotchka

`docs/prompt-palotchka.md` impose un dry-run, une validation, une sauvegarde,
puis l'application et la vérification. Bilan :

1. **Dry-run sur les 4 fichiers du projet (avant ajout)** : **0 substitut** `1`/`I`/`l`/`|`
   collé au cyrillique, **0** occurrence de `ӏ` (U+04CF), **0** palotchka dans un
   texte `ru`/`en`/`fr`. Aucune donnée existante n'avait donc besoin d'être modifiée :
   aucune validation de correction n'était requise, et aucun remplacement n'a été
   appliqué rétroactivement aux œuvres existantes.
2. **Normalisation à l'ingestion** : les sources publient la palotchka sous forme de
   `1` (ex. `к1ант`), de `I` latin majuscule (ex. `БIаьргашна`) ou de `l` minuscule
   (ex. `Хlун`). Les 19 textes, titres, tags et sources ont été convertis **avant**
   insertion en **Ӏ (U+04C0)** : **208 remplacements**, **0 cas ambigu écarté**.
   Les nombres/années ne sont pas touchés : `2000-гӀа шо` garde `2000` et ne
   convertit que le `1` de `г1а`, `1944` et les dates restent intactes.
   Exemples : `к1ант → кӀант`, `Хlун → ХӀун`, `БIаьргашна → БӀаьргашна`,
   `ПохIмаллин → ПохӀмаллин`, `1илманхо → Ӏилманхо`.
3. **Sauvegarde** : `src/data/backups/2026-11-10-palotchka/` (4 fichiers d'origine).
4. **Vérification après écriture** : 0 substitut résiduel dans les 4 fichiers,
   0 U+04CF, 0 palotchka hors `ce`, 0 cas ambigu. Le tableau détaillé
   `id | champ | extrait avant | extrait après | nb` est reproductible via
   `python3 scripts/verify_data.py` (dry-run, aucune écriture).
5. **Rollback** : `cp src/data/backups/2026-11-10-palotchka/*.json src/data/`
   (puis restaurer `src/utils/authorName.js` si besoin).

## Vérifications finales

- `python3 scripts/verify_data.py` → **OK** (palotchka, doublons, cohérence index).
- Cohérence `index.json` ↔ œuvres complètes : les 19 nouvelles fiches ont leur
  œuvre ; chaque œuvre complète a sa fiche ; les 7 fiches historiques sans texte
  complet restent inchangées.
- `npm ci && npm run build` → **succès** (86 modules, Vite 5.4.21).
- Format JSON conservé : indentation 2 espaces, UTF-8, `\n` final.
