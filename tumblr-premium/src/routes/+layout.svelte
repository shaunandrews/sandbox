<script>
	import '../reset.css';
	import '../global.css';
	import { page } from '$app/stores';
	import { isPremium } from '$lib/PremiumStore.js';
	import TumblrLogo from '$lib/TumblrLogo.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import PremiumBanner from '$lib/PremiumBanner.svelte';
	import PremiumPerksButton from '$lib/PremiumPerksButton.svelte';
	import MobileHeader from '$lib/MobileHeader.svelte';
	import MobileTabBar from '$lib/MobileTabBar.svelte';
	import Modal from '$lib/Modal.svelte';
	import DevTools from '$lib/DevTools.svelte';

	$: notCheckoutRoute = $page.url.pathname !== '/checkout';
</script>

<div id="application">
	{#if notCheckoutRoute}
		<div id="global">
			<TumblrLogo />

			<Navigation />

			<hr />

			<footer>
				{#if $isPremium}
					<PremiumPerksButton />
				{:else}
					<PremiumBanner type="badge" />
				{/if}

				<button>Create</button>
			</footer>
		</div>
	{/if}

	<MobileHeader />

	<div id="content">
		<slot />
	</div>

	{#if notCheckoutRoute}
		<MobileTabBar />
	{/if}
</div>

<Modal />

<DevTools />

<style>
	#application {
		display: flex;

		@media screen and (max-width: 1140px) {
			flex-direction: column;
			align-items: center;
		}
	}

	#global {
		position: sticky;
		top: 0;
		height: 100vh;
		width: 220px;
		padding: 20px;
		padding-top: 0;
		flex-shrink: 0;
		flex-grow: 0;
		display: flex;
		flex-direction: column;
		border-right: 1px solid rgba(255, 255, 255, 0.1);

		@media screen and (max-width: 1140px) {
			display: none;
		}
	}

	#global hr {
		flex-grow: 1;
	}

	#global footer {
		flex-grow: 0;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	#global footer button {
		width: 100%;
		border-radius: 30px;
		padding: 12px 20px;
		font-size: 1em;
		background: var(--color-accent);
	}

	#content {
		display: flex;
		/* flex-direction: column; */
		/* align-items: center; */
		min-height: 100vh;
	}
</style>
