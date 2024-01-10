<script>
	import { page } from '$app/stores';
	import { isPremium } from '$lib/PremiumStore.js';
	import TumblrLogo from '$lib/TumblrLogo.svelte';
	import PremiumBanner from '$lib/PremiumBanner.svelte';
	import PremiumPerksButton from '$lib/PremiumPerksButton.svelte';

	$: notCheckoutRoute = $page.url.pathname !== '/checkout';
</script>

<header>
	<TumblrLogo />
	{#if notCheckoutRoute}
		<div class="secondary">
			{#if $isPremium}
				<PremiumPerksButton />
			{:else}
				<PremiumBanner type="badge" />
			{/if}
		</div>
	{/if}
</header>

<style>
	header {
		display: none;
		align-items: center;
		position: sticky;
		top: 0;
		padding: 0 20px;
		width: 100%;
		background: var(--color-background-semi);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);

		@media screen and (max-width: 1140px) {
			display: flex;
		}
	}

	.secondary {
		position: absolute;
		right: 0;
	}
</style>
