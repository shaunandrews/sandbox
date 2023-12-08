<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { goals } from '$lib/stores/goalsStore';
	import Goal from '../Goal.svelte';

	// Get the current goal ID from the URL, and make sure it's a number (not a string)!
	$: goalId = Number($page.params.id);

	// Find the goal from the store
	$: goal = $goals.find((g) => g.id === goalId);

	// All goals button
	function gotoAllGoals() {
		goto('/goals');
	}
</script>

{#if goal}
	<Goal {goal} />
{:else}
	<p>Goal not found.</p>
{/if}
