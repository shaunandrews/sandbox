<script>
	import Button from "./Button.svelte";
	import { createEventDispatcher } from "svelte";
	import { currentUser } from "$lib/stores/userStore";

	export let mealId;
	export let likedByCurrentUser = false;

	const dispatch = createEventDispatcher();

	async function toggleLike() {
		likedByCurrentUser = !likedByCurrentUser;

        // Send the POST request to the backend to add or remove a like
        const response = await fetch('/api/likes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mealId, userId: $currentUser.id }),
        });

        if (!response.ok) {
            console.error("Failed to toggle like");
            likedByCurrentUser = !likedByCurrentUser; // Revert the like state if the request fails
        }

		dispatch("likeToggled", { mealId, liked: likedByCurrentUser });
	}
</script>

<Button on:click={toggleLike} class="like-button {likedByCurrentUser ? 'liked' : ''}">
	<span>{likedByCurrentUser ? "😍" : "🤍"}</span>
	{likedByCurrentUser ? "Liked" : "Like"}
</Button>
