module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    env: {
        browser: true,
        node: true,
        jquery: true,
    },
    globals: {
        layui: true,
        jquery: true,
    },
};
