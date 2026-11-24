import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, "2147");

const content = readFileSync(entryPath, "utf8");
if (!/^2147$/.test(content)) {
  throw new Error(`validation failed: ${JSON.stringify(content)}`);
}
