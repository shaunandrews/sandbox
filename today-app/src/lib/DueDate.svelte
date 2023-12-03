<script>
    export let dueDate;

    function formatDueDate(isoDate) {
        if (!isoDate || isNaN(Date.parse(isoDate))) {
            return null;
        }

        const now = new Date();
        now.setHours(0, 0, 0, 0); // Reset time to start of the day
        const due = new Date(isoDate);

        const timeDiff = due - now;
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

        const formattedDate = due.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

        if (daysDiff < 0) {
            return `${formattedDate} (Overdue)`;
        } else if (daysDiff < 1) {
            return `${formattedDate} (Due today)`;
        } else if (daysDiff <= 7) {
            return `${formattedDate} (${Math.round(daysDiff)} day${Math.round(daysDiff) !== 1 ? 's' : ''}!)`;
        } else {
            return formattedDate;
        }
    }

    $: formattedDueDate = formatDueDate(dueDate);
</script>

{#if formattedDueDate}
    <div class="goal-due-date">{formattedDueDate}</div>
{/if}
