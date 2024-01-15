<!-- src/lib/Modal.svelte -->
<script>
	import { modalStore } from './modalStore.js';
	import { fade } from 'svelte/transition';

	function closeModal() {
		modalStore.close();
	}
</script>

{#if $modalStore.isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal" on:click={closeModal} in:fade={{ duration: 100 }} out:fade={{ duration: 50 }}>
		<div class="modal-content" on:click|stopPropagation>
			<button class="modal-close" on:click={closeModal}>Close</button>
			<svelte:component this={$modalStore.content} {...$modalStore.props} />
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		z-index: 100;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.5);
	}

	.modal-content {
		position: relative;
		max-height: 95vh;
		overflow: auto;
		box-shadow:
			0 2px 1px rgba(0, 0, 0, 0.75),
			0 5px 15px rgba(0, 0, 0, 0.25);
		border-radius: 15px;

		@media screen and (max-width: 900px) {
			width: 100%;
			height: 100%;
			max-height: 100%;
			border-radius: 0;
		}
	}

	.modal-close {
		position: absolute;
		top: 5px;
		right: 5px;
		z-index: 100;
		padding: 10px 15px;
		border-radius: 10px;
		color: white;
		background: rgba(0,0,0,0.5);
		transition: all 0.1s ease-in-out;
	}

	.modal-close:hover {
		background: rgba(0,0,0,0.75);
	}
</style>
