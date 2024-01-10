<script>
	import PremiumTMark from './PremiumTMark.svelte';
</script>

<div class="hero">
	<PremiumTMark />
	<h2>Everything you never knew you&nbsp;needed.</h2>
	<p>Get ad-free browsing, early access to new features, monthly Blazes, and&nbsp;more!</p>
</div>

<style>
	.hero {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	h2 {
		font-size: 1.25em;
		line-height: 1.25;
	}

	p {
		font-size: 0.9em;
		line-height: 1.5;
		max-width: 340px;
		opacity: 0.6;
	}
</style>
