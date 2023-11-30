<script>
	import { nukeDB } from '$lib/db.js';
	import Header from '../lib/Header.svelte';
	import './reset.css';
	import './styles.css';

	async function handleNukeDB() {
		try {
			const message = await nukeDB();
			console.log(message);
			// Additional logic after clearing the database (e.g., updating UI)
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
