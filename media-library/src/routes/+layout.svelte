<svelte:head>
    <title>Media</title>
</svelte:head>

<header>
    <h1>Media</h1>
    <nav role="toolbar">
        <button>Upload</button>
        <button>Select</button>
    </nav>
</header>

<main>
    <slot />
</main>

<style>
    header {
        position: sticky;
        top: 0;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: row;
        z-index: 1;
    }

    header h1 {
        flex-grow: 1;
    }

    main {
        display: flex;
        flex-direction: row;
    }
</style>
