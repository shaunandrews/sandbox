<script>
    import Site from "./site.svelte";
</script>

<button>
    <Site
        size="mini"
        title="Sporadic Thoughts"
        url="sporadicthoughts.wordpress.com"
    />
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="6 9 12 15 18 9" />
    </svg>
</button>

<style>
    button {
        padding: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    button:hover {
        background: rgba(0, 0, 0, 0.05);
    }
</style>
