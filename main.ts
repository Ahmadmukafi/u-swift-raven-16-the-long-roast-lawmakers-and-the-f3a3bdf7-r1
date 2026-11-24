import * as fs from "node:fs";
import * as path from "node:path";

const LINE = "The committee voted to regulate artificial intelligence, then asked IT to explain why their PDF is a Word document wearing a trench coat.";

// Gate: the entry must be one sentence of 1-320 characters, nothing else.
if (LINE.length < 1 || LINE.length > 320 || LINE.includes("\n")) {
  throw new Error("entry line fails the 1-320 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
