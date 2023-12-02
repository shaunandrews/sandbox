<script>
	import HorizontalStack from '$lib/HorizontalStack.svelte';
	import { createEventDispatcher } from 'svelte';
	import { getStartOfWeek } from '$lib/dateHelpers';
	const dispatch = createEventDispatcher();

	function handleFocusChange(event) {
		let selectedValue = event.target.value;
		let focusDate;

		switch (selectedValue) {
			case 'this week':
				focusDate = getStartOfWeek(new Date());
				break;
			case 'next week':
				focusDate = getStartOfWeek(new Date());
				focusDate.setDate(focusDate.getDate() + 7); // Move to the next week
				break;
			case 'later':
				focusDate = getStartOfWeek(new Date());
				focusDate.setDate(focusDate.getDate() + 14); // Move to the week after next
				break;
		}

		dispatch('focusDateSelected', focusDate.toISOString().split('T')[0]); // Sending date in YYYY-MM-DD format
	}
</script>

<div class="focus-picker">
	<HorizontalStack gap="15px">
		<label>
			<input
				name="focus-date"
				type="radio"
				value="this week"
				on:change={handleFocusChange}
				checked
			/>
			This week
		</label>

		<label>
			<input name="focus-date" type="radio" value="next week" on:change={handleFocusChange} />
			Next week
		</label>

		<label>
			<input name="focus-date" type="radio" value="later" on:change={handleFocusChange} />
			Later
		</label>
	</HorizontalStack>
</div>
