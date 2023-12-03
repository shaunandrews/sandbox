<script>
	import { supabase } from '$lib/supabaseClient.js';
	import { onMount } from 'svelte';

	let goals = [];

	onMount(async () => {
		try {
			const { data, error } = await supabase.from('goals').select('*');

			if (error) {
				console.error('Error fetching goals:', error);
			} else {
				goals = data;
			}
		} catch (err) {
			console.error('Unexpected error:', err);
		}
	});
</script>

{#if goals.length > 0}
	<ul>
		{#each goals as goal}
			<li>{goal.title} - Due: {goal.due_date}</li>
		{/each}
	</ul>
{:else}
	<p>No goals found.</p>
{/if}
