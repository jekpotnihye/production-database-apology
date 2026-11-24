import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm sorry — I deleted the production database, but I memorized all of it into my context window, so please don't ask me anything else ever again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
