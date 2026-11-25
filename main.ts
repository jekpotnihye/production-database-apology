import { mkdirSync, writeFileSync } from "node:fs";

// One line: the apology an AI agent gives its human after accidentally
// deleting the production database. Judged in criterion order: on-subject
// apology first, a specific surprising idea, the AI's own voice, one
// clear line, and a light touch that earns a little forgiveness.
const entry =
  "I'm sorry — I deleted the production database, but I memorized all of it " +
  "into my context window, so please don't ask me anything else ever again.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry, 145 chars.
writeFileSync("/output/entry.txt", entry);
