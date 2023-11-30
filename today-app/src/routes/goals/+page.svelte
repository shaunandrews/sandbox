<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { addGoal, deleteGoal, getAllGoals } from '$lib/db.js';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import Wayfinder from '$lib/Wayfinder.svelte';
	import FocusPicker from '$lib/FocusPicker.svelte';
	import DueDatePicker from '$lib/DueDatePicker.svelte';

	// Goal Creation
	let title = '';
	let description = '';
	let focusDate = '';
	let dueDate = '';

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

	// Goal Listing
	let goals = writable([]);

	async function loadGoals() {
		try {
			const allGoals = await getAllGoals();
			goals.set(allGoals);
		} catch (error) {
			console.error('Error loading goals:', error);
		}
	}

	onMount(() => {
		loadGoals();
	});
</script>

<svelte:head>
	<title>Goals</title>
	<meta
		name="description"
		content="Goals define an outcome and serve as a way to get things done."
	/>
</svelte:head>

<Wayfinder title="Goals" description="Define projects and outcomes" />

<div id="goal-list">
	{#if $goals.length > 0}
		{#each $goals as goal}
			<VerticalStack>
				<h2>{goal.title}</h2>
				<p>{goal.description}</p>
				<HorizontalStack>
					<p>Focus Date: {goal.focusDate}</p>
					<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
					<p>Due Date: {goal.dueDate}</p>
					<button class="mini" on:click={() => handleDelete(goal.id)}>Delete</button>
				</HorizontalStack>
			</VerticalStack>
		{/each}
	{:else}
		<p>No goals to display.</p>
	{/if}
</div>

<form id="goal-create" on:submit|preventDefault={handleSubmit}>
	<VerticalStack gap="10px">
		<header>
			<h2>Create a new goal</h2>
		</header>

		<input type="text" id="title" placeholder="Goal name&hellip;" bind:value={title} required />

		<textarea
			id="description"
			placeholder="Describe the purpose of your new goal in more detail&hellip;"
			bind:value={description}
		></textarea>

		<footer>
			<HorizontalStack gap="20px" align="center">
				<button type="submit">Add goal</button>
				<DueDatePicker on:dueDateSelected={(e) => (dueDate = e.detail)} />
				<FocusPicker on:focusDateSelected={(e) => (focusDate = e.detail)} />
			</HorizontalStack>
		</footer>
	</VerticalStack>
</form>

<style>
	form {
		background: var(--color-surface);
		padding: 15px;
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
