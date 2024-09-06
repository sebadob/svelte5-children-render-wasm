import adapter from '@sveltejs/adapter-static';

const isDev = process.env.DEV_MODE === 'true';

export default {
    kit: {
        adapter: adapter({
            // pages: '../templates/html',
            // assets: '../static',
            strict: true,
            // preserveComments: true,
            fallback: undefined,
            precompress: true,
        }),
        csp: {
            directives: {
                'default-src': ['none'],
                'connect-src': ['self'],
                'script-src': ['self', 'wasm-unsafe-eval'],
                'style-src': ['self', 'unsafe-inline'],
                'img-src': ['self'],
            },
        },
    },
};
