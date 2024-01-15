<script>
	import PremiumDiamond from '$lib/PremiumDiamond.svelte';
	export let size = 'default';
	export let label = 'Go Premium';
</script>

<button class={size}>
	<PremiumDiamond size="small" />
	<span>{label}</span>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		text-decoration: none;
		text-wrap: nowrap;
		padding: 5px 20px 5px 10px;
		color: white;
		background: #7c5cff;
		border-radius: 30px;
		border: none;
		box-shadow: none;
		font-size: 0.85em;
		text-decoration: none;
		cursor: pointer;
		text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		background: #8364fc;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
	}

	button.big {
		font-size: 1.125em;
		padding: 15px 35px;
	}
</style>
