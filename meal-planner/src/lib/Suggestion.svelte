<!-- src/lib/Suggestion.svelte -->
<script>
	import { currentUser } from "$lib/stores/userStore";
	import LikeButton from "./LikeButton.svelte";
	import UserMention from "$lib/UserMention.svelte";
	export let id;
	export let date;
	export let description = "spaghetti & meatballs";
	export let likes = [];

	// Check if the current user has already liked the meal
	$: likedByCurrentUser = likes.some((like) => like.familyMemberId === $currentUser.id);

	function handleLikeToggled(event) {
		// Update the likes based on the toggle event
		if (event.detail.liked) {
			likes.push({ familyMemberId: $currentUser.id }); // Add like
		} else {
			likes = likes.filter((like) => like.familyMemberId !== $currentUser.id); // Remove like
		}
	}
</script>

<div class="suggestion">
	<p>{description}</p>
	<div class="likes">
		<LikeButton mealId={id} {likedByCurrentUser} on:likeToggled={handleLikeToggled} />
		{#each likes as like}
			{#if like.familyMember}
				<UserMention name={like.familyMember.displayName} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.suggestion {
		position: relative;
		background: white;
		overflow: hidden;
		border-radius: 5px;
	}

	p {
		font-size: 1.5em;
	}

	.likes {
		display: flex;
		gap: 5px;
	}
</style>
