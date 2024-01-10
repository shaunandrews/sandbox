<script>
	import PremiumDiamond from '$lib/PremiumDiamond.svelte';
	export let term = "yearly";
	let monthlyPrice = 6.99;
	let yearlyPrice = 69.99;
	let yearlyPricePerMonth = (yearlyPrice / 12).toFixed(2);5
</script>

<section>
	{#if term === 'yearly'}
		<h3>
			<strike>${monthlyPrice}</strike> <strong>${yearlyPricePerMonth}</strong> / month billed annually for ${yearlyPrice}
		</h3>
	{:else}
		<h3>
			<strong>${monthlyPrice}</strong> / month
		</h3>
	{/if}
	<a class="button" href="/checkout/">
		<PremiumDiamond />
		<span>Get premium now!</span>
	</a>
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

	a.button {
		text-decoration: none;
		background: #7c5cff;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid rgba(0, 0, 0, 0.75);
		box-shadow: inset 0 0 10px 5px rgba(255, 255, 255, 0.1);

		font-size: 1.125em;
		font-weight: 600;
		color: black;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.125);
		padding: 15px 35px;
		line-height: 1.25;
		border-radius: 60px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		cursor: pointer;
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
