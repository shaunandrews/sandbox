<script>
	import PremiumDiamond from '$lib/PremiumDiamond.svelte';
</script>

<button>
	<PremiumDiamond size="small" />
	<span>Go&nbsp;Premium</span>
</button>

<style>
	button {
		display: flex;
		align-items: center;
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
		text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
		border: 1px solid transparent;
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: inset 0 0 10px 5px rgba(255, 255, 255, 0.1);
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		border: 1px solid rgba(255, 255, 255, 0.75);
		box-shadow: inset 0 0 10px 5px rgba(255, 255, 255, 0);
	}
</style>
