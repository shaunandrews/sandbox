<script>
	import SearchInput from '$lib/SearchInput.svelte';
	import PremiumBanner from '$lib/PremiumBanner.svelte';
	import RightRailAd from '$lib/RightRailAd.svelte';
	import RailEndcap from '../lib/RailEndcap.svelte';
</script>

<div id="right-rail">
	<header>
		<SearchInput />
	</header>
	<div class="main">
		<PremiumBanner type="stacked" />
		<RailEndcap />
	</div>
	<footer>
		<RightRailAd />
	</footer>
</div>

<style>
	#right-rail {
		/* position: sticky; */
		/* top: 0; */
		max-height: 100vh;
		max-width: 320px;
		border-left: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		gap: 20px;
		flex-direction: column;

		@media (max-width: 900px) {
			display: none;
		}
	}

	#right-rail header {
		position: sticky;
		top: 0;
		z-index: 10;
		min-height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-background-semi);
	}

	#right-rail footer {
		flex-grow: 1;
		padding: 0 20px;
		display: flex;
		align-items: flex-end;
	}

	#right-rail .main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 0 20px;
	}
</style>
