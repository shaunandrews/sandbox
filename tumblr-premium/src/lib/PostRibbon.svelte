<script>
    import SectionHeading from '$lib/SectionHeading.svelte';
    import PostTypeButton from '$lib/PostTypeButton.svelte';
</script>

<div class="post-ribbon">
	<!-- <SectionHeading>Create a new post</SectionHeading> -->
    <!-- <h3>Create a new post</h3> -->
	<div class="post-types">
        <PostTypeButton type="text" />
        <PostTypeButton type="photo" />
        <PostTypeButton type="quote" />
        <PostTypeButton type="link" />
        <PostTypeButton type="chat" />
        <PostTypeButton type="audio" />
        <PostTypeButton type="video" />
	</div>
</div>

<style>
    .post-ribbon {
        margin: 0 20px;
        background: var(--color-surface);
        color: var(--color-surface-text);
        border-radius: 10px;
    }

    h3 {
        font-size: 0.75em;
        text-align: center;
        padding: 10px 15px;
        transform: translateY(5px);
    }

    .post-types {
        display: flex;
    }
</style>