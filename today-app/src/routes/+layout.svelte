<script>
	import { onMount } from 'svelte';
	import { nukeDB, getAllGoals, getAllNotes } from '$lib/db.js';
	import { goals } from '$lib/stores/goalsStore';
	import { notes } from '$lib/stores/notesStore';
	import Header from '../lib/Header.svelte';
	import './reset.css';
	import './typography.css';
	import './styles.css';

	onMount(async () => {
		try {
			const allGoals = await getAllGoals();
			goals.set(allGoals);

			const allNotes = await getAllNotes();
			notes.set(allNotes);
		} catch (error) {
			console.error('Error loading goals or notes:', error);
		}
	});

	async function handleNukeDB() {
		try {
			const message = await nukeDB();
			console.log(message);
		} catch (error) {
			console.error(error);
		}
	}

	// Clicking anywhere on the scrim 
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<div id="scrim"></div>
	<!-- <button on:click={handleNukeDB}>Nuke Database</button> -->
</div>

<style>
	.app {
		padding: 20px;
	}

	#scrim {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.75);
		opacity: 0;
		pointer-events: none;
		transition: all 0.15s ease-in-out;
	}
</style>
