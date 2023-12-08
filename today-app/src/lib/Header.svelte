<script>
	import { page } from '$app/stores';
	import HorizontalStack from '$lib/HorizontalStack.svelte';
</script>

<header>
	<nav>
		<ol>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Today</a>
			</li>
			<li aria-current={$page.url.pathname === '/goals' ? 'page' : undefined}>
				<a href="/goals">Goals</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/notes') ? 'page' : undefined}>
				<a href="/notes">Notes</a>
			</li>
		</ol>
	</nav>
</header>

<style>
	nav {
		z-index: 1;
		position: fixed;
		right: 0;
		bottom: 40px;
		left: 0;
		display: flex;
		justify-content: center;
	}

	ol {
		display: flex;
		background: rgba(255,255,255,0.5);
		padding: 2px;
		box-shadow: 0 1px 3px 1px rgba(0,0,0,0.1);
		border-radius: 30px;
		overflow: hidden;
		backdrop-filter: blur(10px);
	}

	a {
		display: block;
		border-radius: 30px;
		padding: 10px 20px;
		text-decoration: none;
		color: black;
	}

	li[aria-current='page'] a {
		text-decoration: none;
		color: white;
		font-weight: bold;
		background: black;
		cursor: default;
	}
</style>
