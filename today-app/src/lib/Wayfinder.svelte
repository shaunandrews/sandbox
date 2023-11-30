<script>
	import VerticalStack from '$lib/VerticalStack.svelte';

	export let title = 'Welcome';
	export let description = 'Things should be here';
	export let actions = [];
</script>

<div class="wayfinder">
	<VerticalStack align="center">
		<h1>{title}</h1>
		<p>{description}</p>
	</VerticalStack>
</div>

<style>
	.wayfinder {
		padding: 20px;
	}
</style>
