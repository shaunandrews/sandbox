<script>
	import SectionHeading from '$lib/SectionHeading.svelte';
</script>

<div class="stream-endcap">
	<SectionHeading>Trending tags</SectionHeading>
	<div class="carousel">
		<div class="tag">
			<span>#zelda</span>
			<img src="/tags/zelda.jpeg" alt="zelda" />
		</div>
		<div class="tag">
			<span>#cyberpunk 2077</span>
			<img src="/tags/cyberpunk-2077.webp" alt="cyberpunk" />
		</div>
		<div class="tag">
			<span>#digital art</span>
			<img src="/tags/digital-art.jpg" alt="digital art" />
		</div>
		<div class="tag" style="background-color:rgb(220,20,120);">#mario</div>
		<div class="tag">
			<span>#chicken</span>
			<img src="/tags/chicken.webp" alt="chicken" />
		</div>
		<div class="tag" style="background-color:rgb(200,120,20);">#tony hawk</div>
	</div>
</div>

<style>
	.stream-endcap {
		/* margin-left: 20px; */
		padding: 0 20px;
		/* padding-right: 0; */
		/* background: rgba(0,0,0,0.25); */
	}

	.carousel {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		/* padding: 0 20px; */
		/* margin-left: -20px; */
	}

	.carousel > div {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.tag {
		padding: 26px 26px;
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		font-size: 0.85em;
		line-height: 1.2;
		background-color: var(--color-background);
		border: 2px solid transparent;
		cursor: pointer;
		transition: all 0.1s ease-out;
	}

	.tag span {
		position: relative;
		z-index: 1;
		padding: 2.5px 5px;
		line-height: 1.2;
		border-radius: 5px;
		transition: all 0.1s ease-out;
	}

	.tag img {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transform: scale(1.75) rotate(5deg);
		opacity: 0.5;
		object-fit: cover;
		transition: all 0.1s ease-out;
	}

	.tag:hover {
		border-color: var(--color-accent);
		transform: scale(1.15) rotate(-1deg);
		z-index: 10;
	}

	.tag:hover span {
		background: rgba(0, 0, 0, 0.75);
	}

	.tag:hover img {
		transform: scale(1) rotate(0deg);
		opacity: 1;
	}
</style>
