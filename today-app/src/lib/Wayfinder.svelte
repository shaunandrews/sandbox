<script>
	import VerticalStack from '$lib/VerticalStack.svelte';
	export let title = 'Welcome';
	export let description = 'Things should be here';
	export let primaryAction = null;
	export let primaryActionLabel = 'Add';
</script>

<div class="wayfinder">
	<VerticalStack align="center">
		<h1>{title}</h1>
		<p>{description}</p>
		{#if primaryAction}
			<button on:click={primaryAction}>{primaryActionLabel}</button>
		{/if}
	</VerticalStack>
</div>

<style>
	.wayfinder {
		padding: 20px;
	}
</style>
