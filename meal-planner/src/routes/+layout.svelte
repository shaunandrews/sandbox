<script>
	import "../reset.css";
	import "../colors.css";
</script>

<div class="application">
	<slot />
</div>

<style>
	.application {
		min-height: 100vh;
		min-width: 100vw;
		display: flex;
		flex-direction: column;
		background: var(--background);
		color: var(--text);
	}
</style>
<!--  -->