<script>
	import Card from "$lib/Card.svelte";
	import Voter from "$lib/Voter.svelte";
	export let description = "Beef and Broccoli with Rice";
	export let assignedDate = "";
	export let img;
	export let isToday = false;
</script>

<Card className={isToday ? "today" : ""}>
	<header>
		{#if isToday}
			<span class="badge">Today</span>
		{/if}
		<h3>{assignedDate}</h3>
	</header>
	{#if img}
		<img src={img} alt={description} />
	{/if}
	<section>
		<p>{description}</p>
	</section>
	{#if isToday}
		<footer>
			<Voter />
		</footer>
	{/if}
</Card>

<style>
	header {
		display: flex;
		gap: 10px;
		justify-content: space-between;
		align-items: center;
		padding: 5px 6px;
		position: absolute;
		top: 5px;
		left: 5px;
		background: rgba(255, 255, 255, 1);
		border-radius: 5px;
	}

	header h3 {
		font-size: 0.8em;
	}

	header .badge {
		background: black;
		color: white;
		padding: 2px 5px;
		border-radius: 2px;
		text-transform: uppercase;
		font-size: 0.6em;
		font-weight: bold;
	}

	section {
		padding: 15px 20px;
	}

	p {
        
		line-height: 1.25;
	}

	img {
		display: block;
		height: auto;
		width: 100%;
	}

	footer {
		padding: 20px;
		padding-top: 0;
	}
</style>
