<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { addNote, getAllNotes, getAllGoals } from '$lib/db.js';
	import VerticalStack from '$lib/VerticalStack.svelte';
	import Wayfinder from '$lib/Wayfinder.svelte';

	import DevNotes from '$lib/DevNotes.svelte';

	// Note Creation
	let body = '';
	let goalID = '';

	async function handleSubmit() {
		const note = { body, goalID };
		try {
			const id = await addNote(note);
			console.log(`Added note with id ${id}`);
			body = '';
			goalID = '';

			// Optimistically update the notes store with the new note
			notes.update((currentNotes) => [
				...currentNotes,
				{ id, body, goalID, goalTitle: goalsMap.get(goalID) || 'No Goal' }
			]);

			// Don't need to call loadData() here if the notes store is updated
			// await loadData(); // Consider removing this line if it's not needed
		} catch (error) {
			console.error('Failed to add note', error);
		}
	}

	// Data
	let goals = writable([]);
	let goalsMap = new Map();
	let notes = writable([]);

	async function loadData() {
		try {
			const allGoals = await getAllGoals();
			goals.set(allGoals);

			// Update the goalsMap
			goalsMap = new Map(allGoals.map((goal) => [goal.id, goal.title]));

			// Fetch all notes and enrich them with goal titles
			const allNotes = await getAllNotes(); // Make sure this line is uncommented
			const enrichedNotes = allNotes.map((note) => ({
				...note,
				goalTitle: goalsMap.get(note.goalID) || 'No Goal'
			}));

			notes.set(enrichedNotes);
		} catch (error) {
			console.error('Error loading data:', error);
		}
	}

	onMount(() => {
		loadData();
	});
</script>

<svelte:head>
	<title>Notes</title>
	<meta
		name="description"
		content="Notes let you remember things, from your work, from a meeting, from anywhere in life."
	/>
</svelte:head>

<Wayfinder title="Notes" description="Write it down for later." />

<div id="note-list">
	{#if $notes.length > 0}
		{#each $notes as note}
			<VerticalStack>
				<p><strong>{note.goalTitle}</strong> • {note.body}</p>
			</VerticalStack>
		{/each}
	{:else}
		<p>No notes to display.</p>
	{/if}
</div>

<form id="note-create" on:submit|preventDefault={handleSubmit}>
	<VerticalStack gap="40px">
		<VerticalStack>
			<label for="body">Body</label>
			<textarea id="body" bind:value={body}></textarea>
		</VerticalStack>

		<VerticalStack>
			<label for="goalID">Goal</label>
			<select id="goalID" bind:value={goalID}>
				<option value="">None</option>
				{#each $goals as goal}
					<option value={goal.id}>{goal.title}</option>
				{/each}
			</select>
		</VerticalStack>

		<button type="submit">Add Note</button>
	</VerticalStack>
</form>

<DevNotes>
	<h3>TODO</h3>
	<ul>
		<li>Quickly create a note from anywhere; Keyboard shortcut, and maybe a FAB?</li>
	</ul>
	<hr />
	<ul>
		<li>AI to sort notes into goals</li>
		<li>AI to create goals from notes</li>
		<li>AI to suggest goals from notes</li>
		<li>AI to suggest notes from goals</li>
	</ul>

	<h3>NOTES</h3>
	<p>
		The cool thing about notes, is that they'll kind of just sort themselves out. That is, you can
		fiddle with choosing a goal, and tagging, and dating, and all those mucky details... or you can
		just let the note's figure it all out on their own.
	</p>
	<p>
		When you create a note, AI will read it and compare it to your list of goals, and your previous
		notes. If your note fits with an existing goal, the AI will sort it for you. If the AI notices a
		bunch of notes related to a Goal that doesn't exist (but probably should), the AI will create
		the Goal and attach all your relevant notes.
	</p>
</DevNotes>
