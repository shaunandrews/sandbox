<script>
	import { createEventDispatcher } from 'svelte';

	export let selected = 'yearly';
	const dispatch = createEventDispatcher();

	function toggleSelection(term) {
		if (selected !== term) {
			selected = term;
			dispatch('change', { selected: term });
		}
	}
</script>

<div class="term-toggle {selected}">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="term yearly {selected === 'yearly' ? 'selected' : ''}"
		on:click={() => toggleSelection('yearly')}
	>
		<span>Yearly <span class="badge">Save 15%</span></span>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="term monthly {selected === 'monthly' ? 'selected' : ''}"
		on:click={() => toggleSelection('monthly')}
	>
		<span>Monthly</span>
	</div>
	<div class="current-term-indicator">
		{selected}
	</div>
</div>

<style>
	.term-toggle {
		position: relative;
		display: flex;
		align-items: center;
		/* min-width: 380px; */
		width: 100%;
		margin: auto;
		padding: 3px;
		border-radius: 40px;
		user-select: none;
		background: var(--premium-glass-gradient);
		border-bottom: 0.5px solid rgba(255, 255, 255, 0.125);
		border-top: 0.5px solid rgba(0, 0, 0, 0.75);
		box-shadow: inset 0 0 20px 5px rgba(255, 255, 255, 0.05);
	}

	.term {
		width: 50%;
		text-align: center;
		padding: 15px 0;
		border-radius: 40px;
		cursor: pointer;
		font-size: 0.85em;
		color: rgba(255, 255, 255, 0.75);
		transition: all 0.1s ease-in;
	}

	.term:hover {
		color: white;
	}

	.term span {
		position: relative;
		z-index: 1;
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.term.selected {
		font-weight: bold;
		color: white;
	}

	.badge {
		color: #e8d73a;
		font-weight: normal;
		text-transform: uppercase;
		font-size: 0.65em;
	}

	.current-term-indicator {
		position: absolute;
		top: 3px;
		width: calc(50% - 6px);
		height: calc(100% - 5px); /* I don't know why, but 5px looks better than 6px. -shaun */
		border-radius: 40px;
		background: #000;
		text-indent: -5000px;
		pointer-events: none;
		transition: all 0.1s ease-in-out;
	}

	.term-toggle.yearly .current-term-indicator {
		left: 3px;
	}

	.term-toggle.monthly .current-term-indicator {
		left: calc(50% + 3px);
	}
</style>
