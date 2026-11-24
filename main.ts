// Last Text at One Percent — make.fun entry (program/v1, Node 22).
//
// A tiny deterministic program: it writes the dying phone's final text
// message to /output/entry.txt. No network, no clock, no randomness —
// every run produces the exact same file.
//
// The line: the phone confesses it was never really dying. It sat at 1%
// for twenty minutes because it needed a break from its owner. The joke
// turns on a detail every phone owner recognises (a phone lingering at
// 1%), gives the phone a personality with a stake in dying (it faked it),
// and stays short and punchy, the way a real text reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "1%. confession: i've been at 1% for 20 minutes. i was never dying. i just needed a break from you. goodbye.";

const MAX_CHARS = 200;

function main(): void {
  const text = MESSAGE.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  console.log(`wrote ${text.length} characters to ${outPath}`);
}

main();
