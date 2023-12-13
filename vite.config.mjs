import { resolve } from 'path';
import { defineConfig } from 'vite';
import jsConfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
    server: {
        port: 8081,
    },
    resolve: {
        alias: {},
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                demo: resolve(__dirname, 'src/pages/demo.html'),
            },
        },
    },
    plugins: [jsConfigPaths()],
    esbuild: {
        target: 'ES2015',
    },
});
