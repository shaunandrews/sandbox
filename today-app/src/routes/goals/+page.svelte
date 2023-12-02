<script>
	import { onMount } from 'svelte';
    import { goals } from '$lib/stores/goalsStore';
	import { addGoal, deleteGoal } from '$lib/db.js';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import Wayfinder from '$lib/Wayfinder.svelte';
	import Goal from './Goal.svelte';
	import FocusPicker from './FocusPicker.svelte';
	import DueDatePicker from './DueDatePicker.svelte';

	// Goal Creation
	let title = '';
	let description = '';
	let focusDate = '';
	let dueDate = '';

	function toggleGoalCreation() {
		// Toggle the body .is-modal class
		document.body.classList.toggle('is-modal');

		// Add a class to the #goals-create element
		const goalCreate = document.getElementById('goal-create');
		goalCreate.classList.toggle('is-hidden');
	}

	async function handleSubmit() {
		const goal = { title, description, focusDate, dueDate };
		try {
			const id = await addGoal(goal);
			console.log(`Added goal with id ${id}`);

			// Reset form fields after submission
			title = '';
			description = '';
			focusDate = '';
			dueDate = '';
		} catch (error) {
			console.error('Failed to add goal', error);
		}
		await loadGoals();
	}

	// Close the goal creation form when the Escape key is pressed
	function onKeyDown(event) {
		if (event.key === 'Escape') {
			toggleGoalCreation();
		}
	}

	// Goal Deletion
	async function handleDelete(id) {
		try {
			await deleteGoal(id);
			console.log('Goal deleted');
			await loadGoals(); // Reload the goals to update the list
		} catch (error) {
			console.error('Error deleting goal:', error);
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

<form id="goal-create" class="is-hidden" on:submit|preventDefault={handleSubmit}>
	<VerticalStack gap="10px">
		<header>
			<HorizontalStack>
				<h2>Create a new goal</h2>
				<button class="mini" on:click={toggleGoalCreation}>Cancel</button>
			</HorizontalStack>
		</header>

		<input type="text" id="title" placeholder="Goal name&hellip;" bind:value={title} required />

		<textarea
			id="description"
			placeholder="Describe the purpose of your new goal in more detail&hellip;"
			bind:value={description}
		></textarea>

		<footer>
			<HorizontalStack gap="20px" align="center">
				<FocusPicker on:focusDateSelected={(e) => (focusDate = e.detail)} />
				<DueDatePicker on:dueDateSelected={(e) => (dueDate = e.detail)} />
				<button type="submit">Add goal</button>
			</HorizontalStack>
		</footer>
	</VerticalStack>
</form>

<style>
	/* Goal Listing */
	#goal-list {
	}

	/* Goal Creation */
	#goal-create {
		background: var(--color-surface);
		padding: 20px;
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		transition: all 0.15s ease-in-out;
	}

	#goal-create.is-hidden {
		transform: translateY(200px);
		opacity: 0;
		pointer-events: none;
	}

	header h2 {
		font-size: 0.75em;
		text-transform: uppercase;
	}

	input,
	textarea {
		border: none;
		outline: none;
		border: 1px solid transparent;
		transition: all 0.15s ease-in-out;
	}

	textarea {
		min-height: 1em;
	}

	input:focus,
	textarea:focus {
		background: white;
	}

	#title {
		font-size: 1.25em;
		font-weight: 700;
	}
</style>
