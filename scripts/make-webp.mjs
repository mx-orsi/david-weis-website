// Generate a .webp sibling for every .jpg in public/images, plus an -800
// (800px wide) JPEG + WebP pair for any photo wider than 1200px so phones get
// a smaller file through srcset. Skips up-to-date files; pass --force to redo
// all. Components pick the variants up automatically (Media.astro serves the
// WebP through <picture> and the -800 pair when the Photo has `hasSmall`), so
// run this whenever a new JPEG photo is added:  npm run images
import sharp from 'sharp';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../public/images/', import.meta.url));
const force = process.argv.includes('--force');
let made = 0;
const kb = (n) => Math.round(statSync(n).size / 1024);
const stale = (out, src) => force || !existsSync(out) || statSync(out).mtimeMs < statSync(src).mtimeMs;

for (const entry of readdirSync(dir, { recursive: true })) {
  const f = String(entry);
  if (!/\.jpe?g$/i.test(f)) continue;
  const src = join(dir, f);

  // Small variant for large originals (not for files that already are one).
  if (!/-\d{3,4}\.jpe?g$/i.test(f)) {
    const { width } = await sharp(src).metadata();
    if (width && width > 1200) {
      const small = join(dir, f.replace(/\.jpe?g$/i, '-800.jpg'));
      if (stale(small, src)) {
        await sharp(src).resize({ width: 800 }).jpeg({ quality: 82, mozjpeg: true }).toFile(small);
        const smallWebp = small.replace(/\.jpg$/, '.webp');
        await sharp(small).webp({ quality: 78, effort: 5 }).toFile(smallWebp);
        console.log(`${f}: ${kb(src)} KB → ${kb(small)} KB at 800px, ${kb(smallWebp)} KB webp`);
        made++;
      }
    }
  }

  const out = join(dir, f.replace(/\.jpe?g$/i, '.webp'));
  if (!stale(out, src)) continue;
  await sharp(src).webp({ quality: 78, effort: 5 }).toFile(out);
  console.log(`${f}: ${kb(src)} KB → ${kb(out)} KB webp`);
  made++;
}
console.log(made ? `${made} file(s) written` : 'all WebP files up to date');
