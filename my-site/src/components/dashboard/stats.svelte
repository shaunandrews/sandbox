<script>
    import Card from "../card.svelte";
</script>

<Card title="Today's stats">
    <ul>
        <li>
            <h4>Views</h4>
            <span>2,382</span>
        </li>
        <li>
            <h4>Likes</h4>
            <span>491</span>
        </li>
        <li>
            <h4>Comments</h4>
            <span>46</span>
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
