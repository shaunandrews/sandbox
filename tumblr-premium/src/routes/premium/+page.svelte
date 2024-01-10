<script>
    import PremiumSpotlights from '$lib/PremiumSpotlights.svelte';
    import PremiumHero from '$lib/PremiumHero.svelte';
	import PremiumTermToggle from '$lib/PremiumTermToggle.svelte';
	import PremiumFeatureList from '$lib/PremiumFeatureList.svelte';
    import PremiumSupporters from '$lib/PremiumSupporters.svelte';
    import PremiumPurchaseButton from '$lib/PremiumPurchaseButton.svelte';
</script>

<div id="page">
    <PremiumSpotlights />

	<PremiumHero />

	<PremiumTermToggle selected="yearly" />

	<PremiumFeatureList />

    <PremiumSupporters />

	<footer>
		<PremiumPurchaseButton />
	</footer>
</div>

<style>
	#page {
        position: relative;
		padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
	}

    #page > * {
        flex-grow: 1;
    }

	h1,
	p {
		margin-bottom: 20px;
	}

    footer {
        position: sticky;
        bottom: 30px;
        /* max-width: 800px; */
        background: rgba(0,0,0,0.75);
        padding: 40px;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
</style>
