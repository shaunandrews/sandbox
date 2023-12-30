<!--
	routes/+page.svelte
-->
<script>
	import { onMount } from "svelte";
	import Button from "$lib/Button.svelte";
	import UserMention from "$lib/UserMention.svelte";
	import NewSuggestion from "../lib/NewSuggestion.svelte";
	import Suggestion from "$lib/Suggestion.svelte";
	import { currentUser } from "$lib/stores/userStore";
	import UserSelection from "$lib/UserSelection.svelte";

	currentUser.initialize();

	function handleSwitch() {
		currentUser.clearUser();
	}

	export let meals;

	function handleMealAdded(event) {
		const { meal } = event.detail;
		meals = [...meals, meal];
	}

	onMount(async () => {
		try {
			console.log("Current user:", $currentUser);
			const response = await fetch("/api/meals");
			if (response.ok) {
				meals = await response.json();
				console.log(meals);
			} else {
				console.error("Could not load meals.");
			}
		} catch (error) {
			console.error("Error fetching meals:", error);
		}
	});

	async function clearMeals() {
		const response = await fetch("/api/meals", {
			method: "DELETE",
		});

		if (response.ok) {
			console.log("All meals cleared.");
			meals = []; // Clear the meals array in the frontend
		} else {
			console.error("Could not clear meals.", response);
		}
	}
</script>

{#if $currentUser.name}
	<header>
		<h1>What's for dinner?</h1>
		<div class="admin">
			<UserMention name={$currentUser.name} />
			<Button mini on:click={handleSwitch} emoji="👨‍👩‍👦‍👦">Switch</Button>

			{#if $currentUser.name === "Dad"}
				<Button mini on:click={clearMeals} emoji="🫧">Clear</Button>
			{/if}
		</div>
	</header>

	<NewSuggestion on:mealAdded={handleMealAdded} />

	<div class="grid">
		{#if meals && meals.length > 0}
			{#each meals as meal}
				<Suggestion {...meal} />
			{/each}
		{:else}
			<p class="blank-slate">No meal suggestions yet. Be the first to suggest one!</p>
		{/if}
	</div>
{:else}
	<UserSelection />
{/if}

<style>
	header {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 20px;
		padding-left: 40px;
	}

	header h1 {
		flex-grow: 1;
	}

	.admin {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;
		padding: 40px;
		padding-top: 0;
	}

	.blank-slate {
		grid-column: 1 / -1;
		text-align: center;
		font-size: 1.25em;
		padding: 50px;
		background: var(--shade-1);
		border-radius: 5px;
		color: rgba(0, 0, 0, 0.25);
	}
</style>
