<script>
	import { modalStore } from '$lib/modalStore';
	import { isPremium } from '$lib/PremiumStore.js';
	import PremiumSpotlights from '$lib/PremiumSpotlights.svelte';
	import PremiumDiamond from '$lib/PremiumDiamond.svelte';
	import PremiumTMark from '$lib/PremiumTMark.svelte';
	import PremiumModal from '$lib/PremiumModal.svelte';
	import GoPremiumButton from '$lib/GoPremiumButton.svelte';
	export let type = 'default';
	export let graphic = 'tmark';
	export let marginHorizontal = '';

	function openModal() {
		modalStore.open(PremiumModal);
	}
</script>

{#if !$isPremium}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="banner {type}" on:click={openModal} style="margin: 0 {marginHorizontal};">
	<div class="graphic">
		{#if graphic === 'diamond'}
			<PremiumDiamond size="medium" />
		{:else if graphic === 'tmark'}
			<PremiumTMark />
			<!-- <img src="/premium/t-mark-parts/t-mark.svg" alt="Premium" /> -->
		{/if}
	</div>
	<p>Get ad-free browsing and early access to new features with Tumblr&nbsp;Premium.</p>
	<GoPremiumButton />
	<div class="spotlights">
		<PremiumSpotlights />
	</div>
</div>
{/if}

<style>
	.banner {
		position: relative;
		display: flex;
		gap: 20px;
		align-items: center;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid transparent;
		border-top: 1px solid rgba(255, 255, 255, 0.125);
		background: var(--premium-glass-gradient);
		cursor: pointer;
		transition: all 0.1s ease-in-out;
	}

	.banner:hover {
		border: 1px solid rgba(255, 255, 255, 0.125);
		/* transform: scale(1.0125); */
	}

	.spotlights {
		opacity: 0.75;
		transition: all 0.2s ease-in-out;
	}

	.banner:hover .spotlights {
		opacity: 1;
	}

	.banner.stacked {
		flex-direction: column;
		align-items: flex-start;
	}

	p {
		font-size: 0.9em;
		line-height: 1.325;
	}

	.banner.mini {
		padding: 10px 0 10px 15px;
	}

	.banner.mini p {
		font-size: 0.8em;
	}

	.banner.mini button {
		padding: 8px 12px;
		font-size: 0.8em;
	}

	.banner.badge {
		padding: 0;
		border: none;
		background: transparent;
	}

	.banner.badge .graphic,
	.banner.badge .spotlights {
		display: none;
	}

	.banner.badge p {
		font-size: 0.8em;
		line-height: 1.45;
		position: absolute;
		bottom: calc(100% + 10px);
		left: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		padding: 10px 15px;
		backdrop-filter: blur(5px);
		pointer-events: none;
		opacity: 0;
		transition: all 0.15s ease-in-out;
	}

	.banner.badge:hover p {
		opacity: 1;
	}

	.banner.badge button {
		width: 100%;
		text-align: center;
		font-weight: 600;
		color: #7c5cff;
		background: #7d5cff2f;
	}

	.banner.badge:hover button {
		background: #7c5cff;
		color: white;
	}
</style>
