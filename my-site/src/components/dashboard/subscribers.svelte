<script>
    import Card from "../card.svelte";
</script>

<Card title="Subscribers">
    <ul>
        <li>
            <h4>Reader</h4>
            <p>1,205</p>
        </li>
        <li>
            <h4>Email</h4>
            <p>4,392</p>
        </li>
    </ul>
</Card>

<style>
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
