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

	let foodPun = "";

	async function getFoodPun() {
		const response = await fetch("/api/get-food-pun");
		if (response.ok) {
			const data = await response.json();
			foodPun = data.pun;
		}
	}
</script>

<form class="new-suggestion" on:submit|preventDefault={addNewMeal}>
	<input type="text" bind:value={newMealDescription} placeholder="Suggest a meal" />
	<div class="suggested-images">
        <Button on:click={getFoodPun} emoji="✨">Get images</Button>
        <div class="suggested-images-options">
            {#if foodPun}
                <p>{foodPun}</p>
            {/if}
            <!-- ...image tags -->
        </div>

		<!-- <Button mini emoji="✨">Get images</Button>
		<div class="suggested-images-options loading">
			<img />
			<img />
			<img />
			<img />
		</div>
		<div class="suggested-images-options">
			<img src="/ai-suggested-images/1.png" />
			<img src="/ai-suggested-images/2.png" />
			<img src="/ai-suggested-images/3.png" />
			<img src="/ai-suggested-images/4.png" />
		</div> -->
	</div>
	<footer>
		<Button type="submit" emoji="🍽️">Plate this!</Button>
	</footer>
</form>

<style>
	.new-suggestion {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* padding: 5px; */
		margin: 0 40px;
		border-radius: 10px;
		/* gap: 5px; */
		border: 1px solid var(--border);
	}

	.new-suggestion input {
		width: 100%;
		text-align: center;
		outline: 1px solid red;
	}

	.suggested-images {
		width: 100%;
		padding: 10px;
		background: rgba(0, 0, 0, 0.05);
	}

	.suggested-images-options {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}

	.suggested-images-options img {
		width: 100px;
		height: 100px;
		border-radius: 5px;
		transition: all 0.075s ease-in-out;
		transition-delay: 0.2s;
	}

	.suggested-images-options img:hover {
		transform: scale(1.75);
		z-index: 1;
		transition-delay: 0;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
	}

	.suggested-images-options.loading {
		pointer-events: none;
	}

	.suggested-images-options.loading img {
		background: rgba(0, 0, 0, 0.05);
	}

	footer {
		width: 100%;
	}

	footer :global(button) {
		width: 100%;
	}
</style>
