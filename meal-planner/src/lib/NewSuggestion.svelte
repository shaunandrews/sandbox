<!-- src/lib/NewSuggestion.svelte -->
<script>
	import Button from "$lib/Button.svelte";
	import { currentUser } from "$lib/stores/userStore";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	let newMealDescription = "";
	let meals = [];

	async function addNewMeal() {
		console.log("Adding new meal:", newMealDescription);
		const response = await fetch("/api/meals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				description: newMealDescription,
				currentUserId: $currentUser.id,
			}),
		});

		if (response.ok) {
			console.log("New meal added.");
			const meal = await response.json();
			dispatch("mealAdded", { meal });
			meals = [...meals, meal];
			newMealDescription = "";
		} else {
			console.error("Could not add new meal.", response);
		}
	}
</script>

<div class="new-suggestion">
	<section class="meal-description">
		<input type="text" bind:value={newMealDescription} placeholder="Suggest a meal" />
		<div class="quick-ideas">
			<div>🍕</div>
			<div>🍔</div>
			<div>🌮</div>
		</div>
		<Button on:click={addNewMeal} emoji="👍">Plate it!</Button>
	</section>
</div>

<style>
	.new-suggestion {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}

	.meal-description {
		width: 100%;
		padding: 5px 5px 5px 20px;
		display: flex;
		gap: 20px;
		border-radius: 5px;
		background: var(--input-resting);
		border: 1px solid var(--border);
	}

	.meal-description:hover {
		border-color: var(--border-hovered);
	}

	.meal-description:focus-within {
		box-shadow: 0 0 0 2px var(--border-focused);
		border-color: transparent;
		background: var(--background);
	}

	.quick-ideas {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.quick-ideas div {
		font-size: 1.25em;
		cursor: pointer;
		opacity: 0.25;
		transition: all 0.075s ease-in-out;
	}

	.description:focus-within .quick-ideas div {
		opacity: 1;
	}

	.quick-ideas div:hover {
		opacity: 1;
		transform: scale(1.25) rotate(15deg);
	}

	.new-suggestion input {
		flex-grow: 1;
		font-size: 1.25em;
		outline: none;
	}
</style>
