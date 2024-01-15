<script>
	import { goto } from '$app/navigation';
	import { modalStore } from './modalStore.js';
	import PremiumDiamond from '$lib/PremiumDiamond.svelte';
	import GoPremiumButton from '$lib/GoPremiumButton.svelte';

	export let term = 'yearly';

	let monthlyPrice = 6.99;
	let yearlyPrice = 69.99;
	let yearlyPricePerMonth = (yearlyPrice / 12).toFixed(2);
	5;

	function redirectToCheckout() {
		modalStore.close();
		goto('/checkout/');
	}
</script>

<section>
	{#if term === 'yearly'}
		<h3>
			<strike>${monthlyPrice}</strike> <strong>${yearlyPricePerMonth}</strong> / month billed
			annually for ${yearlyPrice}
		</h3>
	{:else}
		<h3>
			<strong>${monthlyPrice}</strong> / month
		</h3>
	{/if}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={redirectToCheckout}>
		<GoPremiumButton label="Get premium now" size="big" />
	</div>
	<p>
		Subscriptions renew automatically. Taxes may apply. Ad-Free excludes certain promotional
		content. <a href="/">Learn&nbsp;more</a>
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	h3 {
		text-align: center;
		font-size: 0.75em;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.75);
	}

	strike {
		opacity: 0.5;
		font-style: italic;
	}

	strong {
		color: white;
		font-size: 1.25em;
	}

	p {
		text-align: center;
		opacity: 0.5;
		font-size: 0.7em;
		line-height: 1.5;
		max-width: 360px;
	}

	p a {
		color: white;
	}
</style>
