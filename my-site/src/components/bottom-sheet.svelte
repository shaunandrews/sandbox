<script>
    export let visible = false;
    
    function closeSheet() {
        visible = false;
    }
</script>

{#if visible}
    <section>
        <button on:click={closeSheet}>Close</button>
        <h1>Sheet</h1>
        <slot />
    </section>
{/if}

<style>
    section {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: white;
        width: 420px;
        height: calc(100vh - 80px);
        margin: auto;
    }
</style>
