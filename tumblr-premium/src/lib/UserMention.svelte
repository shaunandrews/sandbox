<script>
	export let name = '';
</script>

<div class="username">
	<a title="Visit this person's Tumblr blog" href="/">{name}</a>
</div>

<style>
	.username {
		display: inline-block;
	}

	a {
		color: black;
		text-decoration: none;
		font-weight: bold;
		transition: all 0.2s ease-in-out;
	}

	a:hover {
		text-decoration: underline;
		opacity: 0.75;
	}
</style>
