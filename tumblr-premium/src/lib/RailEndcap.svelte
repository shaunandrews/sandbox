<script>
	import BlogListItem from '$lib/BlogListItem.svelte';
</script>

<div class="rail-endcap">
	<h4>Check out these blogs</h4>
	<div class="blog-list">
		<BlogListItem name="shaunandrews" description="Boom, gotcha!" />
		<BlogListItem name="randomitemdrop" description="Pick up the pieces" />
		<BlogListItem name="strange-aeons" description="The stars are right" />
	</div>
	<a class="explore" href="/">Explore all of Tumblr</a>
</div>

<style>
	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 20px;
	}

	h4 {
		margin-bottom: 15px;
	}

	.explore {
		color: white;
		font-size: 0.85em;
	}
</style>