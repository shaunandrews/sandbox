<script>
	export let focusDate;

	function getWeekIndicator(date) {
		if (!date || isNaN(Date.parse(date))) {
			return '';
		}

		const now = new Date();
		now.setHours(0, 0, 0, 0); // Reset time to start of the day
		const givenDate = new Date(date);

		if (givenDate < now) {
			return 'Needs review';
		}

		const startOfWeek = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - now.getDay() + 1
		);
		const endOfWeek = new Date(startOfWeek);
		endOfWeek.setDate(endOfWeek.getDate() + 6);

		const startOfNextWeek = new Date(endOfWeek);
		startOfNextWeek.setDate(startOfNextWeek.getDate() + 1);
		const endOfNextWeek = new Date(startOfNextWeek);
		endOfNextWeek.setDate(endOfNextWeek.getDate() + 6);

		if (givenDate >= startOfWeek && givenDate <= endOfWeek) {
			return 'This week';
		} else if (givenDate >= startOfNextWeek && givenDate <= endOfNextWeek) {
			return 'Next week';
		} else {
			return 'Later';
		}
	}

	$: weekIndicator = getWeekIndicator(focusDate);
</script>

{#if weekIndicator}
	<div class="goal-focus-date">{weekIndicator}</div>
{/if}

<style>
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
</style>
