<script>
    import Card from "../card.svelte";
</script>

<Card title="Recently published">
    <ol>
        <li class="post">
            <!-- <img src="https://via.placeholder.com/200x120" alt="Home" /> -->
            <h4>What I Did On My Christmas Vacation</h4>
            <p>
                Here's a story about how I turned a "Fruit of the Month"
                membership into the best Christmas ever.
            </p>
            <ul class="post-meta">
                <li>293 views</li>
                <li>2 comments</li>
                <li>38 likes</li>
            </ul>
        </li>
        <li class="post">
            <!-- <img src="https://via.placeholder.com/200x120" alt="Home" /> -->
            <h4>Dinner for Seventeen</h4>
            <p>
                Well, I knew it would be a lot of food, but I didn't know it
                would be so heavy.
            </p>
            <ul class="post-meta">
                <li>1,392 views</li>
                <li>37 comments</li>
                <li>386 likes</li>
            </ul>
        </li>
        <li class="post">
            <!-- <img src="https://via.placeholder.com/200x120" alt="Home" /> -->
            <h4>Dinner for Seventeen</h4>
            <p>
                Well, I knew it would be a lot of food, but I didn't know it
                would be so heavy.
            </p>
            <ul class="post-meta">
                <li>1,392 views</li>
                <li>37 comments</li>
                <li>386 likes</li>
            </ul>
        </li>
    </ol>
</Card>

<style>
    ol {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .post {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .post-meta {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
</style>
