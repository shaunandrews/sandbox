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
	import PastMeal from "$lib/PastMeal.svelte";
	import Meal from "$lib/Meal.svelte";

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

<div class="page">
	{#if $currentUser.name}
		<header>
			<h1>What's<br />for dinner?</h1>
			<div class="admin">
				<Button mini secondary on:click={handleSwitch}><UserMention name={$currentUser.name} display="dot" /> Switch</Button>

				{#if $currentUser.name === "Dad"}
					<Button mini secondary on:click={clearMeals} emoji="🫧">Clear</Button>
				{/if}
			</div>
		</header>

		<main>
			<section id="menu">
				<div class="menu-day">
					<h2>Today, Dec 30, 2023</h2>
					<p>Pizza</p>
					<p>Onion & Mushroom Phyllo Tart</p>
				</div>
				<div class="menu-day">
					<h3>Tomorrow, Dec 31, 2023</h3>
					<p>Lil' Smokies'</p>
					<p>Scallops</p>
					<p>Lasagna</p>
					<p>Veggie Phyllo Cups</p>
				</div>
				<div class="menu-day">
					<h3>Mon, Jan 1, 2024</h3>
					<p>Linguine w/Clam Sauce</p>
					<p>Garden Salad</p>
				</div>
				<div class="menu-day">
					<h3>Tue, Jan 2, 2024</h3>
					<p>Leek & Potato Soup</p>
					<p>Grilled Cheese</p>
				</div>
				<div class="menu-day">
					<h3>Wed, Jan 3, 2024</h3>
					<p>Chicken & Dumplings</p>
					<p>Green Beans</p>
				</div>
			</section>

			<section id="suggestions">
				<h3>Recent suggestions</h3>
				{#if meals && meals.length > 0}
					{#each meals as meal}
						<Suggestion {...meal} />
					{/each}
				{:else}
					<p class="blank-slate">📋 Suggested meals will appear in this list.</p>
				{/if}
			</section>
		</main>

		<footer>
			<NewSuggestion on:mealAdded={handleMealAdded} />
		</footer>
	{:else}
		<UserSelection />
	{/if}
</div>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
		padding: 10px 20px;
		background: var(--background-semi);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--border);
	}

	header h1 {
		width: 100px;
		line-height: 1;
	}

	.admin {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#menu {
		width: 60vw;
		overflow: auto;
		position: relative;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.menu-day {
		background: var(--surface);
		/* border: 1px solid var(--border); */
		border-radius: 5px;
		padding: 10px;
	}

	.menu-day h2, .menu-day h3 {
		background: var(--text);
		color: var(--background);
		display: inline-block;
		border-radius: 5px;
		padding: 3px 5px;
		margin-bottom: 5px;
		font-size: 0.8em;
		text-transform: uppercase;
	}

	.menu-day p {
		margin: 0;
		padding: 10px 20px;
		line-height: 1;
	}

	#suggestions {
		width: 40vw;
		overflow: auto;
		position: sticky;
		top: 0;
	}

	main {
		flex-grow: 1;
		display: flex;
		gap: 0;
	}

	.blank-slate {
		text-align: center;
		font-size: 0.8em;
	}

	footer {
		position: sticky;
		bottom: 0;
		z-index: 10;
		padding: 10px 20px;
		background: var(--background-semi);
		backdrop-filter: blur(20px);
		border-top: 1px solid var(--border);
	}
</style>
