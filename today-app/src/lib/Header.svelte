<script>
	import { page } from '$app/stores';
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
	nav ol {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
		justify-content: center;
	}

	nav a {
		display: block;
		padding: 10px 20px
	}

	nav a:hover {
		background: #eee;
	}

	nav li[aria-current='page'] a {
		background: var(--shade-05);
	}
</style>