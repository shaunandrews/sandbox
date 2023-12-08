<script>
	import { notes } from '$lib/stores/notesStore';
	import Note from './Note.svelte';
</script>

<svelte:head>
	<title>Notes</title>
	<meta
		name="description"
		content="Notes let you remember things, from your work, from a meeting, from anywhere in life."
	/>
</svelte:head>

<div id="note-list">
	{#if $notes.length > 0}
		{#each $notes as note}
			<Note {note} />
		{/each}
	{:else}
		<p>No notes to display.</p>
	{/if}
</div>

<style>
	#note-list {
		margin: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
