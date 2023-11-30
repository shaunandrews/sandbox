<script>
	import { onMount, onDestroy } from 'svelte';

	let isVisible = false;

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	// This function will be called only on the client side
	onMount(() => {
		function handleKeydown(event) {
			// Check if 'Command+J' is pressed
			if (event.metaKey && event.key === 'j') {
				toggleVisibility();
			}
		}

		window.addEventListener('keydown', handleKeydown);

		// Return a function to clean up the event listener when the component is destroyed
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="dev-note {isVisible ? 'visible' : ''}">
	<slot />
</div>

<style>
	.dev-note {
		font-size: 0.8em;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		display: none;
		z-index: 1000000;
		flex-direction: column;
		gap: 10px;
		padding: 20px;
		background: yellow;
		line-height: 1.8;
		position: absolute;
		top: 10vh;
		right: 8vw;
		bottom: 10vw;
		left: 8vh;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
		transform: rotate(-2.5deg);
	}

	.dev-note.visible {
		display: flex;
	}

	/* Have to use :global because of the CSS scoping. Blessing and a curse. */
	:global(.dev-note ul) {
		padding-left: 32px;
	}

	:global(.dev-note ul li) {
		list-style: none;
		position: relative;
	}

	:global(.dev-note ul li::before) {
		content: '';
		display: inline-block;
		height: 22px;
		width: 22px;
		border: 1px solid rgba(0, 0, 0, 0.5);
		margin-right: 10px;
		position: absolute;
		top: 2px;
		left: -32px;
		border-radius: 20px;
	}

	/* HR's */
	:global(.dev-note hr) {
		border: 0;
		height: 1px;
		background: rgba(0, 0, 0, 0.15);
		margin: 20px -20px;
	}
</style>
