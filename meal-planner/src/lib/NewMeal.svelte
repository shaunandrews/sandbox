<script>
	import Button from "$lib/Button.svelte";

	export let title = "Quinoa Salad with Mixed Greens";
	export let description = "Combine cooked quinoa with a mix of spinach, arugula, cherry tomatoes, cucumbers, and avocado. Toss with a lemon vinaigrette and top with a sprinkle of feta cheese for a Mediterranean touch.";
	export let primaryIngredient = "Quinoa and veggies";
</script>

<article>
	<section>
		<h3>{title}</h3>
		<p>{description}</p>
		<p>{primaryIngredient}</p>
	</section>
	<Button emoji="🤩">Oooh, yum!</Button>
</article>

<style>
	article {
		display: flex;
		align-items: center;
	}
</style>
