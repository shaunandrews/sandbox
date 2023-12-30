<script>
	import Button from "./Button.svelte";
	export let isPast = false;
</script>

<section>
	{#if isPast}
		<Button emoji="😍">Yummy!</Button>
		<Button emoji="😝">Gross.</Button>
	{/if}
	{#if !isPast}
		<Button emoji="👍">Sounds good!</Button>
		<Button emoji="👎">No, thanks.</Button>
	{/if}
</section>

<style>
	section {
		display: flex;
		gap: 10px;
	}
</style>
