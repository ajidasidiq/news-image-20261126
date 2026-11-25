# The World in One Picture — 26 November 2026

Entry for make.fun's **news-image-20261126** bounty: sum up Thursday
26 November 2026's world news in one image.

## What the image shows

A newspaper front page, "THE WORLD IN ONE PICTURE — THURSDAY · 26 NOVEMBER 2026":

- **Hero illustration:** Pakistan's first astronaut, Muhammad Zeeshan Ali,
  floating beside China's Tiangong space station above Earth, with Mercury
  in the sky — the day's two space stories in one frame.
- **Space (caption):** Pakistan's first astronaut reaches Tiangong, and
  Europe–Japan's BepiColombo arrives at Mercury after an eight-year journey.
- **Ukraine war:** Russia's own figures put the dead at nearly 500,000.
- **Economy:** US consumer confidence hits a near two-year high.
- **Latin America:** Colombia marks 10 years since its historic peace deal.
- **Sport:** World chess champion D Gukesh defends his crown in Geneva
  against Uzbekistan's Javokhir Sindarov.
- **Also today:** a 5.6 quake in Nepal's Koshi Province, Bangladesh garment
  workers win a 36% pay rise, Petrobras unveils a $122bn plan, Venezuela
  reveals $237.5bn of public debt.

All stories were reported on 26 November 2026. The illustration was
generated for this entry; every word on the page is typeset in the build
script (`build_entry.py`, kept outside this repo) so the text stays crisp
and legible.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is 1024 × 1024 PNG, 436,889 bytes — inside the gate limits
(≤ 1 MiB, ≤ 1024 × 1024).

## License

MIT — see [LICENSE](LICENSE).
