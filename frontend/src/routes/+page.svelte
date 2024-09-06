<script>
    import {greet} from "$lib/wasm/wasm_modules.js";
</script>

<p>
    This crashes when <code>+layout.svelte</code> renders via <code>{`@render children()`}</code>
    but not when using <code>{`<slot>`}</code>, when building the release with the static adapter.
</p>

<p>
    It works fine when running the DEV server, but when you build the release output, it will crash.
</p>

<p>
    Just change between <code>{`<slot>`}</code> and <code>{`@render children()`}</code>.
</p>

<p>
    If you have <code>just</code> installed, you can execute <code>just build</code>, or do it manually
    otherwise of course. WASM modules are pre-built and the code is included, but it is the most basic
    <code>Hello World</code> code you could think of.
</p>

<button onclick={() => greet('Batman')}>
    Greet
</button>