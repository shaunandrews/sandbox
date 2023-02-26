<script>
    import Card from "../card.svelte";
</script>

<Card title="Pages">
    <ol>
        <li>
            <img src="https://via.placeholder.com/150x200" alt="Home" />
            <span class="page__title">Home</span>
        </li>
        <li>
            <img src="https://via.placeholder.com/150x200" alt="About" />
            <span class="page__title">About</span>
        </li>
        <li>
            <img src="https://via.placeholder.com/150x200" alt="Contact" />
            <span class="page__title">Contact</span>
        </li>
    </ol>
</Card>

<style>
    ol {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
</style>
