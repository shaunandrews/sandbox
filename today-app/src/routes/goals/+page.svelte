<script>
	import { onMount } from 'svelte';
	import { goals } from '$lib/stores/goalsStore';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import Wayfinder from '$lib/Wayfinder.svelte';
	import Goal from './Goal.svelte';
	import CreateGoal from './CreateGoal.svelte';

	function toggleGoalCreation() {
		// Toggle the body .is-modal class
		document.body.classList.toggle('is-modal');

		// Add a class to the #goals-create element
		const goalCreate = document.getElementById('goal-create');
		goalCreate.classList.toggle('is-hidden');
	}

	// Close the goal creation form when the Escape key is pressed
	function onKeyDown(event) {
		if (event.key === 'Escape') {
			toggleGoalCreation();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	});
</script>

<svelte:head>
	<title>Goals</title>
	<meta
		name="description"
		content="Goals define an outcome and serve as a way to get things done."
	/>
</svelte:head>

<Wayfinder
	title="Goals"
	description="Define projects and outcomes"
	primaryAction={toggleGoalCreation}
	primaryActionLabel="New goal"
/>

<div id="goal-list">
	<VerticalStack gap="20px">
		{#if $goals.length > 0}
			{#each $goals as goal}
				<Goal {goal} />
			{/each}
		{:else}
			<p>No goals to display.</p>
		{/if}
	</VerticalStack>
</div>

<CreateGoal />
