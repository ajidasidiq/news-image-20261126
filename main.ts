// News-image entry for make.fun (Node 22, standard library only).
// The entry is a single front-page image, entry.png, composed for
// Thursday 26 November 2026. This program's only job is to place an
// exact copy of that image at the output location the grader reads.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
console.log(`wrote ${bytes.length} bytes to ${target}`);
