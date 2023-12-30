import { writable } from "svelte/store";
import Cookies from "js-cookie";

/**
 * Retrieves a cookie and parses its JSON content.
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {object|null} - The parsed cookie data or null if not found or on error.
 */
function getCookie(name) {
	const cookie = Cookies.get(name);
	if (!cookie) return null; // Return null if the cookie doesn't exist

	try {
		return JSON.parse(cookie); // Attempt to parse the cookie string as JSON
	} catch (error) {
		console.error("Error parsing cookie:", name, error); // Log errors if JSON parsing fails
		return null;
	}
}

/**
 * Sets a cookie with JSON stringified content.
 * @param {string} name - The name of the cookie to set.
 * @param {object} value - The value to be stringified and stored in the cookie.
 * @param {object} options - Options for setting the cookie, like expiration.
 */
function setCookie(name, value, options) {
	Cookies.set(name, JSON.stringify(value), options); // Stringify the value and set the cookie
}

/**
 * Removes a specified cookie.
 * @param {string} name - The name of the cookie to remove.
 */
function removeCookie(name) {
	Cookies.remove(name); // Remove the cookie with the given name
}

/**
 * Creates a Svelte store for managing the current user.
 * @returns {object} - The user store with its public methods.
 */
function createUserStore() {
	const { subscribe, set } = writable({ name: null, id: null }); // Create a writable store with initial state

	/**
	 * Initializes the store by reading user data from a cookie.
	 */
	function initialize() {
		console.log("Initializing user...");
		const userData = getCookie("current_user"); // Retrieve user data from the cookie
		if (userData) {
			set(userData); // Set the store value if user data exists
			console.log("User initialized: ", userData);
		}
	}

	/**
	 * Selects a user and updates the store and cookie.
	 * @param {string} name - The user's name.
	 * @param {string} id - The user's ID.
	 */
	function selectUser(name, id) {
		const userData = { name, id };
		console.log("Setting user data:", userData);
		setCookie("current_user", userData, { expires: 7 }); // Update the cookie with new user data
		set(userData); // Update the store with new user data
		console.log("User selected: ", userData);
	}

	/**
	 * Clears the current user from the store and cookie.
	 */
	function clearUser() {
		removeCookie("current_user"); // Remove the user data cookie
		set({ name: null, id: null }); // Reset the store to its initial state
		console.log("User cleared");
	}

	return {
		subscribe,
		initialize,
		selectUser,
		clearUser,
	};
}

export const currentUser = createUserStore();
