<script>
	export let hidden = false;
</script>

<h3 class:hidden={hidden} class:visually-hidden={hidden}>
	<slot />
</h3>

<style>
	h3 {
		margin-bottom: 15px;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
