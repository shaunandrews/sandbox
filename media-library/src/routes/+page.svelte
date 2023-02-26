<script>
    import MediaGroups from "../components/media-groups.svelte";
    import MediaItem from "../components/media-item.svelte";

    
</script>

<MediaGroups />
<main id="media-items">
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        image="https://picsum.photos/800?random=1"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="video"
        image="https://picsum.photos/800/300?random=2"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="audio"
        image="https://picsum.photos/800?random=3"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="document"
        image="https://picsum.photos/800?random=4"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        image="https://picsum.photos/800?random=5"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/300/400?random=6"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/302/800?random=7"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/49/300?random=8"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/392/854?random=9"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/80?random=10"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/800?random=11"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/800?random=12"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/800?random=13"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/1200?random=14"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/832/943?random=15"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/382/943?random=16"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/859/643?random=17"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/1092?random=17"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/750/600?random=18"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/582/443?random=19"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/782/343?random=20"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/712/493?random=21"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/872/472?random=22"
    />
    <MediaItem
        title="Hello, world!"
        caption="This is a caption."
        type="image"
        image="https://picsum.photos/817/473?random=23"
    />
</main>

<style>
    #media-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: calc(100vw - 250px);
    }
</style>
