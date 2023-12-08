<script>
	import { onMount } from 'svelte';
	import { fetchGoals, fetchNotes } from '$lib/database.js';
	import Header from '$lib/Header.svelte';
	import './reset.css';
	import './typography.css';
	import './styles.css';

	onMount(async () => {
		try {
			await fetchGoals();
			await fetchNotes();
		} catch (error) {
			console.error('Error loading goals or notes:', error);
		}
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
