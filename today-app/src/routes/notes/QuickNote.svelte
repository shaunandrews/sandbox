<script>
	import { notes } from '$lib/stores/notesStore';
	import { addNote } from '$lib/db.js';

	export let goalID;
	let body = '';
	let hasContent = false;

	async function handleAddNote() {
		if (hasContent && goalID) {
			const note = { body, goalID };
			try {
				await addNote(note);
				notes.update((currentNotes) => {
					return [...currentNotes, { ...note }];
				});
				console.log('Note added to goal:', goalID);

				// Reset the note editor
				body = '';
				hasContent = false;
			} catch (error) {
				console.error('Error saving note:', error);
			}
		}
	}

	function resetContent(node) {
		return {
			update(newContent) {
				if (newContent === '') {
					node.textContent = '';
				}
			}
		};
	}

	function handleBlur(event) {
		updateContentState(event.target.textContent);
	}

	function handleInput(event) {
		body = event.target.textContent;
		updateContentState(event.target.textContent);
	}

	function updateContentState(content = '') {
		hasContent = content.trim() !== '';
	}
</script>

<div class="quick-note">
	{#if !hasContent}
		<span class="quick-note-placeholder">Add a quick note&hellip;</span>
	{/if}

	<div
		class="quick-note-editor"
		contenteditable="true"
		on:blur={handleBlur}
		on:input={handleInput}
		use:resetContent={body}
	></div>

	{#if hasContent}
		<button class="mini" on:click={handleAddNote}>Add note</button>
	{/if}
</div>

<style>
	.quick-note {
		position: relative;
	}

	.quick-note-editor {
		min-height: 1em;
		border-radius: 5px;
		padding: 10px 15px;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.quick-note-editor:hover {
		border-color: rgba(0, 0, 0, 0.25);
	}

	.quick-note-editor:focus {
		background: white;
		outline: 2px solid blue;
	}

	.quick-note-placeholder {
		position: absolute;
		top: 10px;
		left: 15px;
		pointer-events: none;
		color: rgba(0, 0, 0, 0.5);
	}

	.quick-note button {
		position: absolute;
		top: 4px;
		right: 4px;
	}
</style>
