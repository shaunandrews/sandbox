<script>
	export let icon;
	export let label;
	export let badge;
	export let url;
    export let isActive = false;
</script>

<a href={url} class="navigation-item {isActive ? 'active' : ''}" sveltekit:prefetch>
	<img src="/navigation-icons/{icon}.svg" class="icon" alt={label} />
	<span class="label">{label}</span>
	{#if badge}
		<span class="badge">{badge}</span>
	{/if}
</a>

<style>
	.navigation-item {
		text-decoration: none;
		display: flex;
		gap: 7.5px;
		align-items: center;
		cursor: pointer;
		border-radius: 2.5px;
		padding: 12.5px 10px;
		color: rgba(255, 255, 255, 0.75);
		transition: all 0.05s ease-in;
	}

	.icon {
		display: block;
		width: 18px;
		height: auto;
		opacity: 0.75;
		margin-right: 0.5rem;
	}

	.label {
		display: block;
		font-size: 0.9em;
		flex-grow: 1;
	}

	.badge {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-accent);
		color: var(--color-accent-text);
		font-size: 0.75em;
		font-weight: bold;
		height: 20px;
		width: 20px;
		border-radius: 2.5px;
	}

    /* Hover */
	.navigation-item:hover {
		background: rgba(0, 0, 0, 0.25);
		color: rgba(255, 255, 255, 1);
	}

	.navigation-item:hover .icon {
		opacity: 1;
	}

    /* Active */
    .navigation-item.active {
        color: rgba(255, 255, 255, 1);
    }

    .navigation-item.active .icon {
        opacity: 1;
    }

    /* Small Viewports */
	@media (max-width: 1140px) {
		.navigation-item {
			width: 100%;
			flex-direction: column;
			border-radius: 5px;
		}

		.icon {
			width: 24px;
			margin-right: 0;
		}

		.label {
			font-size: 0.8em;
		}
	}
</style>
