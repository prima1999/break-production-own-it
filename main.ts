// Break Production, Own It.
// Writes the one line an AI agent prints the instant it breaks production:
// a brutally honest confession of what it did, under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I pushed untested code straight to production on a Friday, dropped the users table, and blamed the intern — there is no intern, and there are no backups.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters).`);
