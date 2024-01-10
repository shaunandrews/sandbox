// src/lib/modalStore.js
import { writable } from 'svelte/store';

function createModalStore() {
	const { subscribe, update } = writable({
		isOpen: false,
		content: null,
		props: {}
	});

	function toggleBodyScroll(isOpen) {
		const body = document.body;
		if (isOpen) {
			body.classList.add('no-scroll');
		} else {
			body.classList.remove('no-scroll');
		}
	}

	return {
		subscribe,
    open: (content, props = {}) => {
      update((store) => ({ ...store, isOpen: true, content, props }));
      toggleBodyScroll(true);
    },
    close: () => {
      update((store) => ({ ...store, isOpen: false, content: null, props: {} }));
      toggleBodyScroll(false);
    }
	};
}

export const modalStore = createModalStore();
