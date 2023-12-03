<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { goals } from '$lib/stores/goalsStore';
	import { notes } from '$lib/stores/notesStore';
	import { deleteGoal } from '$lib/db.js';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import FocusWeek from '$lib/FocusWeek.svelte';
	import DueDate from '$lib/DueDate.svelte';
	import QuickNote from '../notes/QuickNote.svelte';

	$: isGoalDetailPage =
		$page.url.pathname.startsWith('/goals/') && $page.url.pathname !== '/goals/';

	export let goal;

	// Filter notes to only show notes for this goal
	$: goalNotes = $notes.filter((note) => note.goalID === goal.id);

	/* Goal Delete Flow
	------------------------ */
	let confirmingDelete = false;

	async function handleDeleteClick(event) {
		if (!confirmingDelete) {
			confirmingDelete = true;
		} else {
			// Call your delete function
			await deleteGoal(goal.id);

			// Update the goals store to remove the deleted goal
			goals.update((currentGoals) => {
				return currentGoals.filter((g) => g.id !== goal.id);
			});

			// Redirect to the goals list
			goto('/goals/');
		}

		event.stopPropagation();
	}

	// Click something other than the button to cancel delete
	function handleWindowClick(event) {
		if (event.target.id !== 'delete-button') {
			confirmingDelete = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleWindowClick);
	});

	onDestroy(() => {
		window.removeEventListener('click', handleWindowClick);
	});
</script>

<div class="goal">
	<VerticalStack gap="10px">
		<!-- Only render the HorizontalStack if there is either a focusDate or a dueDate -->
		{#if goal.focusDate || goal.dueDate}
			<HorizontalStack align="center" gap="10px">
				<FocusWeek focusDate={goal.focusDate} />
				<DueDate dueDate={goal.dueDate} />
			</HorizontalStack>
		{/if}

		{#if isGoalDetailPage}
			<h2>{goal.title}</h2>
		{:else}
			<h2><a href="/goals/{goal.id}">{goal.title}</a></h2>
		{/if}

		<p>{goal.description}</p>

		{#if isGoalDetailPage}
			<QuickNote goalID={goal.id} />

			<h3>Notes</h3>
			{#each goalNotes as note}
				<div class="note">
					<div class="note-body">{note.body}</div>
				</div>
			{/each}
		{/if}

		{#if isGoalDetailPage}
			<footer>
				<!-- TODO: Add a way to quickly edit an existing goal. -->
				<button class="mini">Edit</button>

				<!-- TODO: Add a confirmation before deleting a goal. When the button is pressed, it should change to "Are you sure?" and then delete the goal when pressed again. -->
				<button id="delete-button" class="mini" on:click={handleDeleteClick}>
					{confirmingDelete ? 'Are you sure?' : 'Delete'}
				</button>
			</footer>
		{/if}
	</VerticalStack>
</div>

<style>
	.goal {
		background: var(--color-surface);
		padding: 20px;
		border-radius: 10px;
	}

	header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.goal-due-date {
		font-size: 0.9em;
	}
</style>
