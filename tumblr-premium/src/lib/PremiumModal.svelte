<script>
	import PremiumSpotlights from '$lib/PremiumSpotlights.svelte';
	import PremiumHero from '$lib/PremiumHero.svelte';
	import PremiumTermToggle from '$lib/PremiumTermToggle.svelte';
	import PremiumFeatureList from '$lib/PremiumFeatureList.svelte';
	import PremiumSupporters from '$lib/PremiumSupporters.svelte';
	import PremiumPurchaseButton from '$lib/PremiumPurchaseButton.svelte';

	let selectedTerm = 'yearly';

	function toggleSelection(term) {
		selectedTerm = term;
	}
</script>

<div class="columns">
	<div class="column cost">
		<PremiumSpotlights />
		<h1>Tumblr Premium</h1>
		<section>
			<PremiumHero />
			<PremiumTermToggle bind:selected={selectedTerm} on:toggle={toggleSelection} />
			<hr />
			<PremiumPurchaseButton term={selectedTerm} />
		</section>
	</div>
	<div class="column features">
		<PremiumFeatureList />
		<PremiumSupporters />
	</div>
</div>

<style>
	h1 {
		font-size: 0.8em;
		opacity: 0.9;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 20px;
	}

	hr {
		height: 20px;
	}

	.columns {
		display: flex;
		width: 100%;
		height: 100%;

		@media screen and (max-width: 900px) {
			flex-direction: column;
		}
	}

	.column {
		padding: 40px;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		flex-grow: 0;
		gap: 40px;
		justify-content: space-around;
	}

	.column.cost {
		width: 420px;
		background: var(--color-background-semi);
		color: white;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);

		@media screen and (max-width: 900px) {
			width: 100%;
		}
	}

	.column.cost section {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.column.features {
		max-width: 440px;
		color: black;
		overflow: hidden;
		background: radial-gradient(
			100% 250% at 25% 10%,
			rgba(208, 239, 255, 1) 0%,
			rgba(255, 231, 246, 1) 33%,
			rgba(211, 193, 248, 1) 75%,
			rgba(156, 232, 255, 1) 100%
		);

		@media screen and (max-width: 900px) {
			max-width: 100%;
			background: var(--color-background-semi);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			color: inherit;
		}
	}
</style>
