import { cpSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const sourceDir = path.resolve('.svelte-kit/cloudflare');
const targetDir = path.resolve('build');

if (!existsSync(sourceDir)) {
  throw new Error(`Cloudflare build output not found at ${sourceDir}. Run npm run build first.`);
}

rmSync(targetDir, { recursive: true, force: true });
cpSync(sourceDir, targetDir, { recursive: true });

