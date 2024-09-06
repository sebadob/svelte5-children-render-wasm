import {sveltekit} from '@sveltejs/kit/vite';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [wasm(), topLevelAwait(), sveltekit()],
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        proxy: {
            '/api/': 'http://127.0.0.1:8080',
        }
    }
};

export default config;
