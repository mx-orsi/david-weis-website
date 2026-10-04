// Generate a .webp sibling for every .jpg in public/images (and .avif for the
// heaviest photos), plus -800 and
// -1600 (px wide) JPEG + WebP pairs for photos wider than that, so phones and
// laptops get a right-sized file through srcset. Skips up-to-date files; pass --force to redo
// all. Components pick the variants up automatically (Media.astro serves the
// WebP through <picture> and the -800 pair when the Photo has `hasSmall`), so
// run this whenever a new JPEG photo is added:  npm run images
import sharp from 'sharp';
import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../public/images/', import.meta.url));
const force = process.argv.includes('--force');
let made = 0;
const kb = (n) => Math.round(statSync(n).size / 1024);
// WebP at quality 78; photos that still come out over 300 KB (gravel, foliage,
// other fine detail) are re-encoded at 66, which is visually the same.
const HEAVY = 300 * 1024;
const writeWebp = async (image, out) => {
  let buf = await image.clone().webp({ quality: 78, effort: 5 }).toBuffer();
  if (buf.length > HEAVY) buf = await image.clone().webp({ quality: 66, effort: 6, smartSubsample: true }).toBuffer();
  writeFileSync(out, buf);
};
const stale = (out, src) => force || !existsSync(out) || statSync(out).mtimeMs < statSync(src).mtimeMs;

for (const entry of readdirSync(dir, { recursive: true })) {
  const f = String(entry);
  if (!/\.jpe?g$/i.test(f)) continue;
  const src = join(dir, f);

  try {
    // Small variant for large originals (not for files that already are one).
    if (!/-\d{3,4}\.jpe?g$/i.test(f)) {
      const meta = await sharp(src).metadata();
      const width = meta.orientation && meta.orientation >= 5 ? meta.height : meta.width;
      // 800px for phones; 1600px for laptops when the original is wider still.
      for (const target of [800, 1600]) {
        if (!width || width <= target * 1.15) continue;
        const small = join(dir, f.replace(/\.jpe?g$/i, `-${target}.jpg`));
        if (!stale(small, src)) continue;
        await sharp(src).rotate().resize({ width: target }).jpeg({ quality: 82, mozjpeg: true }).toFile(small);
        const smallWebp = small.replace(/\.jpg$/, '.webp');
        await writeWebp(sharp(src).rotate().resize({ width: target }), smallWebp);
        console.log(`${f}: ${kb(src)} KB → ${kb(small)} KB at ${target}px, ${kb(smallWebp)} KB webp`);
        made++;
      }
    }

    const out = join(dir, f.replace(/\.jpe?g$/i, '.webp'));
    if (stale(out, src)) {
      await writeWebp(sharp(src).rotate(), out);
      console.log(`${f}: ${kb(src)} KB → ${kb(out)} KB webp`);
      made++;
    }

    // Photos whose WebP is still heavy at any size also get AVIF at every
    // size (a third to a half smaller again); Media.astro offers it first.
    if (/-(800|1600)\.jpe?g$/i.test(f)) continue;
    const family = [undefined, 800, 1600]
      .map((w) => ({ w, webp: w ? out.replace(/\.webp$/, `-${w}.webp`) : out }))
      .filter((v) => existsSync(v.webp));
    if (!family.some((v) => statSync(v.webp).size > HEAVY)) continue;
    for (const { w, webp } of family) {
      const avif = webp.replace(/\.webp$/, '.avif');
      if (!stale(avif, src)) continue;
      const image = w ? sharp(src).rotate().resize({ width: w }) : sharp(src).rotate();
      await image.avif({ quality: 50, effort: 4 }).toFile(avif);
      console.log(`${f}${w ? ` at ${w}px` : ''}: ${kb(webp)} KB webp → ${kb(avif)} KB avif`);
      made++;
    }
  } catch (e) {
    // Skip unreadable/corrupt source files (e.g. stray 0-byte uploads in raw
    // drop folders) instead of aborting the whole run.
    console.warn(`skipped ${f}: ${e.message}`);
  }
}
console.log(made ? `${made} file(s) written` : 'all WebP files up to date');
