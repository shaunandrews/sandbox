<script>
    export let name = "";
    export let description = "";
</script>

<div class="blog">
	<img class="avatar" src="http://fpoimg.com/40?text=randomitemdrop" alt="randomitemdrop" />
	<div class="meta">
		<span class="name">{name}</span>
		<span class="description">{description}</span>
	</div>
	<button class="reversed follow-button">Follow</button>
	<!-- <button class="refresh"><img src="/icons/refresh.svg" alt="Refresh this suggestion" /></button> -->
</div>

<style>
	.blog {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.avatar {
		border-radius: 5px;
	}

	.name {
		font-size: 0.85em;
	}

	.description {
		font-size: 0.75em;
        opacity: 0.5;
	}

    button.refresh img {
        display: block;
        height: 18px;
        width: 18px;
    }
</style>
