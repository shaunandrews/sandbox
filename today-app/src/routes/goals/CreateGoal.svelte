<script>
	import { goals } from '$lib/stores/goalsStore';
	import { addGoal } from '$lib/database.js';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import FocusPicker from './FocusPicker.svelte';
	import DueDatePicker from './DueDatePicker.svelte';

	let title = '';
	let description = '';
	let dueDate = null;
	let focusDate = null;

	async function handleSubmit() {
		const newGoal = {
			title,
			description,
			due_date: dueDate,
			focus_date: focusDate,
		};

		const result = await addGoal(newGoal);
		if (result) {
			goals.update((currentGoals) => [...currentGoals, newGoal]);
			title = '';
			description = '';
			dueDate = null;
			focusDate = null;
		} else {
			console.error('Failed to add the goal');
		}
	}
</script>

<form id="goal-create" on:submit|preventDefault={handleSubmit}>
	<VerticalStack gap="10px">
		<header>
			<HorizontalStack align="center">
				<h2>Create a new goal</h2>
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
	/* Goal Creation */
	#goal-create {
		background: var(--color-surface);
		padding: 20px;
	}

	header h2 {
		font-size: 0.75em;
		text-transform: uppercase;
	}

	#title {
		font-size: 1.25em;
		font-weight: 700;
	}
</style>
