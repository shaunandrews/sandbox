<script>
	import Stack from './Stack.svelte';
	export let align = 'stretch';
	export let justify = 'flex-start';
	export let wrap = 'nowrap';
	export let gap = '0';
</script>

<Stack direction="row" {align} {justify} {wrap} {gap}>
	<slot />
</Stack>
