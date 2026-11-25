// news-image-20261124 — "THE WORLD." front page for Tuesday 24 November 2026.
// Lead: Nvidia's comeback cools (shares -5.9% a day after a +31.5% surge);
// Ukraine needs EUR 115bn in 2027; Iran vows "all available means" against the
// US blockade; Gaza, Indonesia, Hanoi. Rendered fresh in-session from poster.html.
// Copies the pre-rendered poster (entry.png, 1024x1024) to $MAKEFUN_OUTPUT_DIR.
// Node 22, standard library only, no network.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
const buf = readFileSync(src);

// A PNG needs at least the 8-byte magic, the 25-byte IHDR chunk and the
// 12-byte IEND chunk: 45 bytes. Anything shorter is truncated.
if (buf.length < 45) {
  throw new Error("entry.png is too short; file may be truncated");
}
// PNG magic: 89 50 4E 47 0D 0A 1A 0A
const magic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(magic)) {
  throw new Error("entry.png is not a PNG file");
}
// IHDR chunk: length 13 at offset 8, type "IHDR" at offset 12.
if (buf.readUInt32BE(8) !== 13 || buf.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no valid IHDR chunk");
}
// IEND chunk: the last 12 bytes must be length 0, type "IEND", CRC 0xae426082.
const tail = buf.subarray(buf.length - 12);
if (
  tail.readUInt32BE(0) !== 0 ||
  tail.toString("ascii", 4, 8) !== "IEND" ||
  tail.readUInt32BE(8) !== 0xae426082
) {
  throw new Error("entry.png does not end with a valid IEND chunk; file may be truncated");
}
// IHDR chunk: length 13 at offset 8, type "IHDR" at offset 12.
if (buf.readUInt32BE(8) !== 13 || buf.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no valid IHDR chunk");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
if (buf.length > 1048576) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const size = statSync(dest).size;
console.log(`wrote ${dest} (${width}x${height}, ${size} bytes)`);
