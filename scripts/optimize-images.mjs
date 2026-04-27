import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'img', 'optimized');

await mkdir(outDir, { recursive: true });

const jobs = [
  {
    input: path.join(root, 'src', 'playa.png'),
    name: 'playa',
    widths: [640, 960, 1280, 1920],
    quality: 72,
  },
  {
    input: path.join(root, 'img', 'zahara.png'),
    name: 'zahara',
    widths: [240, 384, 512],
    quality: 70,
  },
  {
    input: path.join(root, 'img', 'canos.png'),
    name: 'canos',
    widths: [240, 384, 512],
    quality: 70,
  },
  {
    input: path.join(root, 'img', 'zahora.png'),
    name: 'zahora',
    widths: [240, 384, 512],
    quality: 70,
  },
  {
    input: path.join(root, 'img', 'taxiside.png'),
    name: 'taxiside',
    widths: [480, 720, 1024],
    quality: 78,
  },
];

async function fileSize(p) {
  try {
    const s = await stat(p);
    return s.size;
  } catch {
    return 0;
  }
}

function fmt(n) {
  return (n / 1024).toFixed(1) + ' KB';
}

for (const job of jobs) {
  const original = await fileSize(job.input);
  console.log(`\n${job.name} (orig ${fmt(original)})`);
  for (const w of job.widths) {
    const out = path.join(outDir, `${job.name}-${w}.webp`);
    await sharp(job.input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 6 })
      .toFile(out);
    const s = await fileSize(out);
    console.log(`  ${w}w  ${fmt(s)}  ${path.relative(root, out)}`);
  }
}

console.log('\nDone.');
