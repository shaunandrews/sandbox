<script>
	// Props for customization
	export let direction = 'column'; // Default to a vertical stack (vStack)
	export let align = 'stretch'; // Default flex alignment
	export let justify = 'flex-start'; // Default flex justification
	export let wrap = 'nowrap'; // Default flex wrapping
	export let gap = '0'; // Default gap between items
</script>

<div
	class="stack"
	style="flex-direction: {direction}; align-items: {align}; justify-content: {justify}; flex-wrap: {wrap}; gap: {gap};"
>
	<slot />
	<!-- This is where child elements will be inserted -->
</div>

<style>
	.stack {
		display: flex;
		width: 100%;
	}
</style>
