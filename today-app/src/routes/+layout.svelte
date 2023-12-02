<script>
	import { onMount } from 'svelte';
	import { nukeDB, getAllGoals } from '$lib/db.js';
	import { goals } from '$lib/stores/goalsStore';
	import Header from '../lib/Header.svelte';
	import './reset.css';
	import './styles.css';

	onMount(async () => {
		try {
			const allGoals = await getAllGoals();
			goals.set(allGoals); // Initialize the store with the goals from the database
			console.log(allGoals);
		} catch (error) {
			console.error('Error loading goals:', error);
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
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<!-- <button on:click={handleNukeDB}>Nuke Database</button> -->
</div>

<style>
	.app {
		padding: 20px;
	}
</style>
