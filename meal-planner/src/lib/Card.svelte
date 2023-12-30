<script>
	export let stack = "vStack";
	export let gap = "0";
	export let className = "";
	export let padding = "0";
</script>

<div class={`${stack} ${className}`} style={`--gap: ${gap}; padding: ${padding};`}>
	<slot />
</div>

<style>
	div {
		position: relative;
		background: var(--background);
		scroll-snap-align: start;
		border-radius: 10px;
		overflow: hidden;
		flex-shrink: 0;
		height: auto;
		flex-basis: 350px;
		border: 1px solid var(--border);
		transition: all 0.1s ease-in-out;
	}

	div.today {
		flex-basis: 400px;
	}

	div.past {
		opacity: 0.4;
	}

	div.past:hover {
		opacity: 1;
	}

	.vStack {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}

	.hStack {
		display: flex;
		flex-direction: row;
		gap: var(--gap);
	}
</style>
