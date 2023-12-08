<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { goals } from '$lib/stores/goalsStore';
	import { deleteGoal, fetchNotesByGoalId } from '$lib/database.js';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import FocusWeek from '$lib/FocusWeek.svelte';
	import DueDate from '$lib/DueDate.svelte';
	import QuickNote from '$lib/QuickNote.svelte';

	// Check if this is a single goal detail page
	$: isGoalDetailPage =
		$page.url.pathname.startsWith('/goals/') && $page.url.pathname !== '/goals/';

	export let goal;
	let goalNotes = [];

	async function handleDeleteClick(event) {
		await deleteGoal(goal.id);

		// Update the goals store to remove the delete goal
		goals.update((currentGoals) => {
			return currentGoals.filter((currentGoal) => currentGoal.id !== goal.id);
		});

		// Redirect to the goals list
		goto('/goals/');
	}

	onMount(async () => {
		if (isGoalDetailPage) {
			goalNotes = await fetchNotesByGoalId(goal.id);
		}
	});
</script>

<div class="goal">
	<VerticalStack gap="10px">
		{#if goal.focus_date || goal.due_date}
			<HorizontalStack align="center" gap="10px">
				<FocusWeek focusDate={goal.focus_date} />
				<DueDate dueDate={goal.due_date} />
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
			<!-- {#each goalNotes as note}
				<div class="note">
					<div class="note-body">{note.body}</div>
				</div>
			{/each} -->
		{/if}

		{#if isGoalDetailPage}
			<footer>
				<!-- TODO: Add a way to quickly edit an existing goal. -->
				<button class="mini">Edit</button>

				<!-- TODO: Add a confirmation before deleting a goal. When the button is pressed, it should change to "Are you sure?" and then delete the goal when pressed again. -->
				<button class="mini" on:click={handleDeleteClick}>Delete</button>
			</footer>
		{/if}
	</VerticalStack>
</div>

<style>
	.goal {
		background: var(--color-surface);
		padding: 20px;
	}
</style>
