// Generate a .webp sibling for every .jpg in public/images (skips up-to-date
// files; pass --force to redo all). Components serve the WebP through
// <picture> automatically when the sibling exists, so run this whenever a
// new JPEG photo is added:  npm run images
import sharp from 'sharp';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../public/images/', import.meta.url));
const force = process.argv.includes('--force');
let made = 0;
for (const f of readdirSync(dir)) {
  if (!/\.jpe?g$/i.test(f)) continue;
  const src = join(dir, f);
  const out = join(dir, f.replace(/\.jpe?g$/i, '.webp'));
  if (!force && existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) continue;
  await sharp(src).webp({ quality: 78, effort: 5 }).toFile(out);
  const kb = (n) => Math.round(statSync(n).size / 1024);
  console.log(`${f}: ${kb(src)} KB → ${kb(out)} KB webp`);
  made++;
}
console.log(made ? `${made} file(s) written` : 'all WebP files up to date');
