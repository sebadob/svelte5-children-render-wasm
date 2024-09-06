# just a debugging repo for Svelte 5 issues

This example crashes when `+layout.svelte` renders the index via `{@render children()}`,
but not when using `<slot>`. This does not happen when just running the DEV server with
`npm run dev`, only when building the release with `npm run build`.

The WASM is pre-built, but the code is included, and it is the most basic *Hello World*
example you could think of. If the necessary tools are installed, you can rebuild it with
`just build-wasm`.

To trigger the issue, switch between `<slot>` and `{@render children()}` in `+layout.svelte`.
