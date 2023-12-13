import { move } from 'fs-extra';
import { mkdir, rm } from 'fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildModule } from './utils.mjs';

const root = resolve(process.cwd());
const args = process.argv.splice(2);
const profile = args && args.length && args.length > 0 ? args[0] : 'sit';
console.log(`Current workspace - ${root}. profile - ${profile}`);
// 编译构建项目模块
await buildModule('coin:admin', profile);
await buildModule('coin:mobile', profile);
// 清空并重建构建目录
if (existsSync(resolve(root, 'dist'))) {
    await rm(resolve(root, 'dist'), { recursive: true });
}
await mkdir(resolve(root, 'dist'), { recursive: true });
// 复制项目模块
await move(resolve(root, './projects/coin/admin/dist/'), resolve(root, 'dist/coin/admin'), { overwrite: true });
await move(resolve(root, './projects/coin/mobile/dist/'), resolve(root, 'dist/coin/mobile'), { overwrite: true });
