"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nuxt3_1 = require("nuxt3");
const vite_plugin_1 = require("@quasar/vite-plugin");
const isDev = process.env.NODE_ENV === 'development';
exports.default = (0, nuxt3_1.defineNuxtConfig)({
    ssr: true,
    srcDir: 'frontend',
    build: {
        transpile: ['quasar']
    },
    css: [
        '~/assets/styles/quasar.sass',
        '@quasar/extras/roboto-font/roboto-font.css',
        '@quasar/extras/material-icons/material-icons.css'
    ],
    serverMiddleware: [{ path: '/blub', handler: '~/server/test.ts' }],
    vite: {
        plugins: [
            (0, vite_plugin_1.quasar)({
                sassVariables: 'assets/styles/quasar.variables.sass'
            })
        ]
    }
});
//# sourceMappingURL=nuxt.config.js.map