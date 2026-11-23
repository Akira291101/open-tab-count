import { writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(`${outputDir}/entry.txt`, "2147");
