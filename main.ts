// One Word for Your Wi-Fi — make.fun entry
// Writes exactly one word describing the entrant's Wi-Fi to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// Deterministic: no network, no randomness, no clock, no environment
// input beyond the output directory. Exit 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: home Wi-Fi ghosts you — there one second, gone mid-sentence
// the next. Funny because it is true, and true because everyone has
// lived it. Short enough to be a network name, fresh enough to stand out.
const WORD = "ghosting";

// The gate checks the file is UTF-8 text of 1 to 20 characters, a single
// word and not only whitespace — enforce the same rule here so a bad
// word can never ship silently.
if (!/^\S{1,20}$/.test(WORD)) {
  throw new Error(`word must be a single word of 1-20 characters, got: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
