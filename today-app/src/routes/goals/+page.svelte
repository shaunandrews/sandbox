<script>
	import { goals } from '$lib/stores/goalsStore';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import Goal from './Goal.svelte';
	import CreateGoal from './CreateGoal.svelte';
</script>

<svelte:head>
	<title>Goals</title>
	<meta
		name="description"
		content="Goals define an outcome and serve as a way to get things done."
	/>
</svelte:head>

<div id="goal-list">
	{#if $goals.length > 0}
		{#each $goals as goal}
			<Goal {goal} />
		{/each}
	{:else}
		<p>No goals to display.</p>
	{/if}
</div>

<CreateGoal />
