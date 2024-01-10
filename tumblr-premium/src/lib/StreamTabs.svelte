<script>
	import { onMount } from 'svelte';

	let tabs = [
		{ id: 'following', title: 'Following', active: true },
		{ id: 'for-you', title: 'For You', active: false },
		{ id: 'your-tags', title: 'Your Tags', active: false }
	];

	let tabElements = [];
	let indicatorStyle = '';

	function updateIndicator() {
		const activeTab = tabElements.find((el) => el && el.classList.contains('active'));
		if (activeTab) {
			const activeTabWidth = activeTab.offsetWidth;
			const activeTabLeftOffset = activeTab.offsetLeft;
			const activeTabCenter = activeTabLeftOffset + activeTabWidth / 2;
			const indicatorWidth = 40;
			const indicatorLeftPosition = activeTabCenter - indicatorWidth / 2;

			indicatorStyle = `left: ${indicatorLeftPosition}px; width: ${indicatorWidth}px;`;
		}
	}

	onMount(updateIndicator);

	/* Update the indicator when the window is resized
	onMount(() => {
		window.addEventListener('resize', updateIndicator);
		return () => {
			window.removeEventListener('resize', updateIndicator);
		};
	});
	*/
</script>

<header class="stream-tabs">
	{#each tabs as tab, i}
		<div bind:this={tabElements[i]} class:active={tab.active} class="tab">
			{tab.title}
		</div>
	{/each}
	<div class="active-tab-indicator" style={indicatorStyle}></div>
	<hr />
	<button class="reversed" title="Configure your tab order and visibility.">Options</button>
</header>

<style>
	.stream-tabs {
		display: flex;
		min-height: 60px;
		padding: 0 20px 0 10px;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: var(--color-background-semi);
		backdrop-filter: blur(10px);
	}

	.tab {
		display: flex;
		align-items: center;
		font-size: 0.85em;
		padding: 0 10px;
		height: 100%;
		cursor: pointer;
		opacity: 0.5;
		transition: all 0.1s ease-out;
	}

	.tab:hover {
		opacity: 0.75;
	}

	.tab.active {
		font-weight: bold;
		opacity: 1;
	}

	hr {
		flex-grow: 1;
	}

	.active-tab-indicator {
		width: 40px;
		height: 4px;
		border-radius: 4px;
		background: var(--color-accent);

		/* Put it at the bottom */
		position: absolute;
		bottom: 0;

		/* Hide the text */
		text-indent: -5000px;
	}
</style>
