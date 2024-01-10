<script>
	import UserMention from '$lib/UserMention.svelte';
	import BadgeList from '$lib/BadgeList.svelte';
	import TimeStamp from '$lib/TimeStamp.svelte';
	import Avatar from './Avatar.svelte';
	import MoreButton from './MoreButton.svelte';

	export let username = '';
	export let timestamp = '';
	export let isReblogged = false;
	export let isFollowed = false;
	export let hasBadges = false;
	let className = '';

	if (isReblogged) {
		className = 'reblogged';
	}
</script>

<header class={className} title="This is a reblog of an original post.">
	<Avatar {username} isReblog={isReblogged} />
	<div class="meta">
		<div class="byline">
			<UserMention name={username} />
			{#if hasBadges}
				<BadgeList />
			{/if}
			{#if isReblogged}
				<span>reblogged</span>
				<UserMention name="darlexcx" />
			{/if}
			{#if !isFollowed}
				<button class="follow-button" title="Follow {username}">Follow</button>
			{/if}
		</div>
		<TimeStamp time={timestamp} />
	</div>
	<hr />
	<MoreButton />
</header>

<style>
	header {
		display: flex;
		gap: 10px;
		width: 100%;
		align-items: start;
		padding: 10px;
		font-size: 0.75em;
	}

	hr {
		flex-grow: 1;
	}

	.meta {
		min-height: 32px;
		display: flex;
		gap: 2.5px;
		flex-direction: column;
		justify-content: center;
	}

	.byline {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
