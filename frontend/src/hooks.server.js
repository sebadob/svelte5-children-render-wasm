// const isDev = process.env.DEV_MODE === 'true';

// If you want to change the default language, adjust it for /index and in <PageHeader> as well!
const langDefault = 'de';

/** @type {import('@sveltejs/kit').Handle} */
export function handle({event, resolve}) {
    let path = event.url.pathname;
    let lang = langDefault;

    if (path.length >= 3) {
        lang = path.slice(1, 3);
    }

    return resolve(event, {transformPageChunk: ({html}) => html.replace('%lang%', lang)});
}