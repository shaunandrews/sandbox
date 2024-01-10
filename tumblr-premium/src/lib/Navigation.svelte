<script>
	import NavigationItem from '$lib/NavigationItem.svelte';
</script>

<div id="navigation">
	<NavigationItem isActive label="Home" icon="dashboard" badge="12" url="/" />
	<NavigationItem label="Explore" icon="explore" />
	<NavigationItem label="Communities" icon="communities" url="/communities/" />
	<NavigationItem label="Activity" icon="activity" />
	<NavigationItem label="Messages" icon="messages" />
	<NavigationItem label="Inbox" icon="inbox" />
	<NavigationItem label="Account" icon="account" />
	<NavigationItem label="Settings" icon="settings" />
</div>

<style>
	#navigation {
		display: flex;
		flex-direction: column;
	}
</style>
