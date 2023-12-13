import { isEmpty } from 'lodash-es';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import jsConfigPaths from 'vite-jsconfig-paths';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());

    console.log(`Vite for admin. command - ${command}. mode - ${mode}.`);
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);

    return {
        base: !isEmpty(env.VITE_APP_BASE) ? env.VITE_APP_BASE : '/',
        server: {
            port: 8081,
        },
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    demo: resolve(__dirname, 'pages/demo.html'),
                },
            },
        },
        plugins: [jsConfigPaths()],
        esbuild: {
            target: 'ES2015',
        },
    };
});
