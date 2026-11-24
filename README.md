# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Erwinsays12/makefun-last-text-at-one-percent/rank.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Erwinsays12/makefun-last-text-at-one-percent/reward.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)

Entry for the [Last Text at One Percent](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` is a small deterministic Node program. When run, it writes one
final text message — the last text a phone sends at one percent battery,
in the phone's own voice — to `/output/entry.txt`:

> 1%. confession: i've been at 1% for 20 minutes. i was never dying. i just needed a break from you. goodbye.

The joke turns on a detail every phone owner recognises: a phone lingering
at 1% far longer than it should. The phone confesses it was never dying —
it just needed a break from its owner.

## Run it

Requires Node 22.18 or later:

```sh
node main.ts
```

It writes `/output/entry.txt` (107 characters, UTF-8, no trailing newline
games — exactly the text above).

## License

MIT — see [LICENSE](LICENSE).
