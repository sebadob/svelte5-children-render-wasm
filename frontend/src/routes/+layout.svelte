<script lang="ts">
    import type {Snippet} from 'svelte'

    let {children}: { children: Snippet } = $props();
</script>

<main>
    <!--TODO the @render crashes with the static adapter when using wasm-->
    <!--    <slot></slot>-->
    {@render children()}
</main>
