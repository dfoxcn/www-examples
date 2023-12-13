import { rm } from 'fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildModule } from './utils.mjs';

const root = resolve(process.cwd());
const args = process.argv.splice(2);
const profile = args && args.length && args.length > 0 ? args[0] : 'git';
console.log(`Current workspace - ${root}. profile - ${profile}`);
// 清空并重建构建目录
if (existsSync(resolve(root, 'dist'))) {
    await rm(resolve(root, 'dist'), { recursive: true });
}
// 编译构建标准模块
await buildModule(root, profile);
