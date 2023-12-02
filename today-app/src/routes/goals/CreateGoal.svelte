<script>
    import { goals } from '$lib/stores/goalsStore';
    import { addGoal } from '$lib/db.js';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import FocusPicker from './FocusPicker.svelte';
	import DueDatePicker from './DueDatePicker.svelte';

	let title = '';
	let description = '';
	let focusDate = '';
	let dueDate = '';

	async function handleSubmit() {
		const goal = { title, description, focusDate, dueDate };
		try {
			const id = await addGoal(goal);
			console.log(`Added goal with id ${id}`);

			// Update the goals store
			goals.update((currentGoals) => {
				return [...currentGoals, { ...goal, id }];
			});

			// Reset form fields after submission
			title = '';
			description = '';
			focusDate = '';
			dueDate = '';
		} catch (error) {
			console.error('Failed to add goal', error);
		}
	}
</script>

<form id="goal-create" class="is-hidden" on:submit|preventDefault={handleSubmit}>
	<VerticalStack gap="10px">
		<header>
			<HorizontalStack align="center">
				<h2>Create a new goal</h2>
				<small>ESC to cancel</small>
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
		z-index: 1;
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
