<script>
	import HorizontalStack from '$lib/HorizontalStack.svelte';

	let selectedFocus = 'this-week';

	function setFocus(option) {
		selectedFocus = option;
	}
</script>

<div class="focus-picker is-{selectedFocus}">
	<div class="selection-indicator"></div>
	<HorizontalStack>
		<div class="focus-option this-week" on:click={() => setFocus('this-week')}>This Week</div>
		<div class="focus-option next-week" on:click={() => setFocus('next-week')}>Next Week</div>
		<div class="focus-option later" on:click={() => setFocus('later')}>Later</div>
	</HorizontalStack>
</div>

<style>
	.focus-picker {
		position: relative;
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.05);
	}

	.selection-indicator {
		width: 33.3%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		transition: all 0.15s ease-in-out;
        background: black;
		border-radius: 10px;
	}

	.focus-picker.is-this-week .selection-indicator {
		left: 0;
	}

	.focus-picker.is-next-week .selection-indicator {
		left: 33.3%;
	}

	.focus-picker.is-later .selection-indicator {
		left: 66.6%;
	}

	.focus-option {
		width: 33.3%;
		text-align: center;
		z-index: 1;
		padding: 10px 0;
		cursor: pointer;
        transition: all 0.15s ease-in-out;
	}

	.focus-picker.is-this-week .this-week,
	.focus-picker.is-next-week .next-week,
	.focus-picker.is-later .later {
		font-weight: bold;
        color: white;
	}
</style>
