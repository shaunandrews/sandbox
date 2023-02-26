<script>
    import Card from "../card.svelte";
</script>

<Card title="Drafts">
    <ol>
        <li>
            <div class="post-details">
                <h4>This is my draft post's title</h4>
                <p>
                    This is probably the first line or two of my draft post. Its
                    likely that the UI will only have room to show one or two
                    lines of this text. Maybe we could show three lines of text,
                    but I doubt we could show four lines. Five lines seems
                    entirely unreasonable, but not out of the question.
                </p>
            </div>
        </li>
        <li>
            <div class="post-details">
                <h4>Here's another draft post I started</h4>
                <p>
                    This is probably the first line or two of my draft post. Its
                    likely that the UI will only have room to show one or two
                    lines of this text. Maybe we could show three lines of text,
                    but I doubt we could show four lines. Five lines seems
                    entirely unreasonable, but not out of the question.
                </p>
            </div>
            <img
                src="https://via.placeholder.com/100x100"
                alt="Post featured image"
            />
        </li>
    </ol>
</Card>

<style>
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    img {
        display: block;
        height: 50px;
        width: 50px;
    }

    p {
        height: 1em;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.5);
    }

    .post-details {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>
