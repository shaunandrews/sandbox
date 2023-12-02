<script>
	import { page, onMount } from '$app/stores';
	import { getGoal } from '$lib/db.js';

	let id = $page.params.id;
	let goal;

	onMount(async () => {
		try {
			goal = await getGoal(id);
		} catch (error) {
			console.error('Failed to load goal:', error);
			// Handle error (e.g., show a message to the user)
		}
	});
</script>

{#if goal}
	<h1>{goal.title}</h1>
	<p>{goal.description}</p>
{:else}
	<p>Loading goal...</p>
{/if}
