<script>
	import { isPremium } from '$lib/PremiumStore.js';

	function upgradeToPremium() {
		isPremium.set(true);
	}

	function downgradeFromPremium() {
		isPremium.set(false);
	}
</script>

<section>
	<button on:click={upgradeToPremium}>Upgrade</button>
	<button on:click={downgradeFromPremium}>Downgrade</button>
</section>

<style>
    section {
        position: absolute;
        right: 5px;
        bottom: 5px;
        background: white;
        padding: 15px;
        border-radius: 5px;
        opacity: 0;
    }

    section:hover {
        opacity: 1;
    }
</style>