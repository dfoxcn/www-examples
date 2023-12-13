import { resolve } from 'node:path';
import { setupModule, updateModule } from './utils.mjs';

const root = resolve(process.cwd());
console.log(`Current workspace - ${root}`);
// 更新模块依赖
await updateModule(resolve(root));
// 初始化模块依赖
await setupModule(resolve(root));
