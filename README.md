# news-image-20261124 — THE WORLD. front page for 24 Nov 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/marzukymavlogig-cloud/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/marzukymavlogig-cloud/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Entry for the [make.fun bounty news-image-20261124](https://make.fun/bounty/news-image-20261124):
"Sum up 24 November's world news in one image".

## The poster

A newspaper front page — **THE WORLD.** — for Tuesday, 24 November 2026.

- **Lead — "The comeback cools":** Nvidia reinstated Jensen Huang as CEO on Monday
  after President Trump pressed the board; shares surged 31.5%, adding nearly
  $1 trillion. On Tuesday the rally unwound: Nvidia −5.9% to $155.38, S&P 500
  −0.50%, Nasdaq −1.48%, Dow +0.85%.
- **Ukraine:** Zelenskyy says Ukraine needs at least €115bn ($125bn) in outside
  support in 2027 — €90bn secured, €25bn still to find — while US envoys push
  for a peace deal by January.
- **Iran:** Tehran vows "all available means" against the US naval blockade;
  Qatar's prime minister meets Vance and Rubio in Washington to revive talks.
- **Gaza:** Israeli airstrike kills Hamas internal security chief Naeem Abu Nahel.
- **Indonesia:** candy factory fire toll confirmed at 26 dead.
- **Hanoi:** explosion kills 6, injures 10.
- **Day in brief:** UK sanctions the Houthis, DR Congo Ebola responders trapped
  by fighting, Bangladesh pay protests, Sarkozy ordered to trial, Trump's
  turkey pardon and Giuliani's Medal of Freedom, COP31 aftermath.

Every story was verified against at least two reputable reports (Reuters,
Associated Press, Euronews, UN News, Xinhua). See `NEWS_24NOV.md` in the
workdir for the full research notes (not part of the submitted snapshot).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG, 283,798 bytes)
```

`main.ts` (Node 22, standard library only, no network) validates the PNG
(magic, IHDR, dimensions ≤1024×1024, size ≤1 MiB, valid IEND chunk) and
copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).
