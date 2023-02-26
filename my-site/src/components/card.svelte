<script>
    export let title = "Card";
</script>

<div class="card">
    <header>
        <h3 class="title">{title}</h3>
        <button class="options">
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
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="19" r="1" />
                <circle cx="12" cy="5" r="1" />
            </svg>
        </button>
    </header>
    <section>
        <slot />
    </section>
</div>

<style>
    .card {
        border-radius: 5px;
        background: white;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 10px 10px 10px 20px;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
    }

    h3.title {
        font-size: 13px;
        text-transform: uppercase;
    }

    button.options {
        padding: 5px;
        border-radius: 5px;
    }

    button.options svg {
        display: block;
    }

    button.options:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    section {
        padding: 20px;
    }
</style>
