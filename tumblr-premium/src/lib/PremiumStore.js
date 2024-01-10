// src/lib/PremiumStore.js

import { writable } from 'svelte/store';

// Initialize the store with a default value. For example, false.
export const isPremium = writable(false);
