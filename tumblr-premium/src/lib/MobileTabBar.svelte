<script>
	import NavigationItem from '$lib/NavigationItem.svelte';
</script>

<div id="tab-bar">
	<NavigationItem isActive label="Home" icon="dashboard" url="/" />
	<NavigationItem label="Search" icon="search" />
	<NavigationItem label="Communities" icon="communities" url="/communities/" />
	<NavigationItem label="Messages" icon="messages" />
	<NavigationItem label="Account" icon="account" />
</div>

<style>
	#tab-bar {
		display: none;
		align-items: center;
		justify-content: space-around;
		position: sticky;
		bottom: 0;
		width: 100vw;
		padding: 5px;
		border-top: 0.5px solid rgba(255, 255, 255, 0.1);
		background: var(--color-background-semi);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);

		@media screen and (max-width: 1140px) {
			display: flex;
		}
	}

	#tab-bar > * {
		flex-grow: 1;
	}
</style>
