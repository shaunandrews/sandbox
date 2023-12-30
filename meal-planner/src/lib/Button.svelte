<script>
	import { createEventDispatcher } from "svelte";
	export let emoji;
	export let checked = false;
	export let classNames = "";
	export let mini = false;

	const dispatch = createEventDispatcher();

	function handleClick(event) {
		dispatch("click", event);
	}

	$: classNames = `${checked ? "checked" : ""} ${mini ? "mini" : ""}`;
</script>

<button class={classNames} on:click={handleClick}>
	{#if emoji}
		<span>{emoji}</span>
	{/if}
	<slot />
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		gap: 10px;
		padding: 5px;
		border-radius: 5px;
		border: 1px solid transparent;
		cursor: pointer;
		background: var(--surface);
		color: var(--text);
		transition: all 0.1s ease-in-out;
	}

	button:hover {
		border-color: var(--border);
	}

	button span {
		display: block;
		padding: 6px 0;
		font-size: 1.5em;
		transition: all 0.1s ease-in-out;
	}

	button:hover span {
		transform: scale(1.5) rotate(10deg);
	}

	/* Buttons can often acts like a toggle, switching a "checked" class on and off. */
	button.checked {
		gap: 18px;
		background: hsl(120, 100%, 25%);
		color: hsl(120, 100%, 98%);
	}

	button.checked span {
		transform: scale(1.4) rotate(-15deg);
	}

	/* Mini buttons are smaller, and have smaller emoji. */
	button.mini {
		padding: 1px 10px;
	}

	button.mini:hover {
		gap: 10px;
	}

	button.mini span {
		padding: 0;
		font-size: 0.5em; /* Smaller emoji for mini button */
	}

	button.mini:hover span {
		transform: rotate(10deg);
	}
</style>
