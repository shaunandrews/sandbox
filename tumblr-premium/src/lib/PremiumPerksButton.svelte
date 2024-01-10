<script>
	import { Confetti } from 'svelte-confetti';
	import { modalStore } from '$lib/modalStore';
    import PremiumDiamond from '$lib/PremiumDiamond.svelte';
    import PremiumPerksModal from '$lib/PremiumPerksModal.svelte';

	function openModal() {
		modalStore.open(PremiumPerksModal);
	}
</script>

<Confetti />
<button on:click={openModal}>
	<PremiumDiamond />
	<span>Premium Perks</span>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 10px 15px;
		font-size: 0.85em;
		color: #7c5cff;
		background: rgba(124, 92, 255, 0.125);
		border-radius: 30px;
	}
</style>
