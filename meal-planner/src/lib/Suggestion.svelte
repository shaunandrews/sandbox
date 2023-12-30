<!-- src/lib/Suggestion.svelte -->
<script>
	import Button from "./Button.svelte";
	import { currentUser } from "$lib/stores/userStore";
	import LikeButton from "./LikeButton.svelte";
	import Card from "$lib/Card.svelte";
	import UserMention from "$lib/UserMention.svelte";
	export let id;
	export let date;
	export let description = "spaghetti & meatballs";
	export let likes = [];

	// Check if the current user has already liked the meal
    $: likedByCurrentUser = likes.some(like => like.familyMemberId === $currentUser.id);

    function handleLikeToggled(event) {
        // Update the likes based on the toggle event
        if (event.detail.liked) {
            likes.push({ familyMemberId: $currentUser.id }); // Add like
        } else {
            likes = likes.filter(like => like.familyMemberId !== $currentUser.id); // Remove like
        }
    }
</script>

<Card padding="20px" gap="10px">
	<section>
		<p>{description}</p>
	</section>

	<div class="likes">
		{#each likes as like}
			{#if like.familyMember}
				<UserMention name={like.familyMember.displayName} />
			{/if}
		{/each}
	</div>

	<footer>
		<LikeButton mealId={id} likedByCurrentUser={likedByCurrentUser} on:likeToggled={handleLikeToggled} />
	</footer>
</Card>

<style>
	section {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}

	.likes {
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	p {
		font-size: 1.5em;
		text-align: center;
	}

	footer {
		display: flex;
	}
</style>
