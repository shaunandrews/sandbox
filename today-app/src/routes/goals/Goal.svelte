<script>
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import VerticalStack from '$lib/VerticalStack.svelte';

	export let goal;
	let hasContent = false;

	function handleBlur(event) {
		updateContentState(event.target.textContent);
	}

	function handleInput(event) {
		updateContentState(event.target.textContent);
	}

	function updateContentState(content = '') {
		hasContent = content.trim() !== '';
	}
</script>

<div class="goal">
	<VerticalStack gap="10px">
		<HorizontalStack align="center" gap="10px">
			<!-- 
                TODO: Focus date should only display if it has a value.
                TODO: This is using a hard-coded value for now. It should be replaced with the actual value from the database: {goal.focusDate}
            -->
			<div class="goal-focus-date">This week</div>

			<!-- 
                TODO: Due date should only display if they have values.
                TODO: There should be a class applied for an upcoming due date (5 or less days agao), a current due day (due today), and a past due date (overdue).
                TODO: This is using a hard-coded value for now. It should be replaced with the actual value from the database: {goal.dueDate}
            -->
			<div class="goal-due-date">Due on Dec 12 (2 days!)</div>
		</HorizontalStack>

		<!-- <h2><a href="/goals/{goal.id}">{goal.title}</a></h2> -->
		<h2>{goal.title}</h2>
		<p>{goal.description}</p>

        <!-- 
            TODO: Offer a way to add a quick note to a goal. A simple one line textarea that grows as needed with a "Add note" button that appears once text is entered.
        -->
		<div class="quick-note">
			{#if !hasContent}
				<span class="quick-note-placeholder">Add a quick note&hellip;</span>
			{/if}
			<div
				class="quick-note-editor"
				contenteditable="true"
				on:blur={handleBlur}
				on:input={handleInput}
			></div>

			{#if hasContent}
				<button class="mini">Add note</button>
			{/if}
		</div>

		<footer>
			<!-- 
                TODO: Add a way to quickly edit an existing goal.
            -->
			<button class="mini">Edit</button>

			<!-- 
                TODO: Add a confirmation before deleting a goal. When the button is pressed, it should change to "Are you sure?" and then delete the goal when pressed again.
            -->
			<button class="mini" on:click={() => handleDelete(goal.id)}>Delete</button>
		</footer>
	</VerticalStack>
</div>

<style>
	.goal {
		background: var(--color-surface);
		padding: 20px;
        border-radius: 10px;
	}

	header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

    h2 {}

    p {}

	.goal-focus-date {
		display: inline-block;
		border-radius: 2px;
		font-size: 0.7em;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1;
		padding: 4px;
		background: rgba(0, 0, 0, 0.075);
	}

	.goal-due-date {
		font-size: 0.9em;
	}

	.quick-note {
		position: relative;
	}

	.quick-note-editor {
		min-height: 1em;
		border-radius: 5px;
		padding: 10px 15px;
        border: 1px solid rgba(0, 0, 0, 0.1);
	}

    .quick-note-editor:hover {
        border-color: rgba(0, 0, 0, 0.25);
    }

	.quick-note-editor:focus {
		background: white;
		outline: 2px solid blue;
	}

	.quick-note-placeholder {
		position: absolute;
		top: 10px;
		left: 15px;
		pointer-events: none;
		color: rgba(0, 0, 0, 0.5);
	}

	.quick-note button {
		position: absolute;
		top: 4px;
		right: 4px;
        bottom: 4px;
	}

	footer {
		display: none;
	}
</style>
