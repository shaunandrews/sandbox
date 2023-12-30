<script>
    import { currentUser } from "$lib/stores/userStore";
    import UserMention from "$lib/UserMention.svelte";

    function selectUser(name, id) {
        currentUser.selectUser(name, id);
    }
</script>

<section>
    <h2>Who are you?</h2>
    <ul>
        <li>
            <button on:click={() => selectUser("Amy", 1)}>
                <UserMention name="Amy" />
            </button>
        </li>
        <li>
            <button on:click={() => selectUser("Dad", 2)}>
                <UserMention name="Dad" />
            </button>
        </li>
        <li>
            <button on:click={() => selectUser("Jackson", 3)}>
                <UserMention name="Jackson" />
            </button>
        </li>
        <li>
            <button on:click={() => selectUser("Tyler", 4)}>
                <UserMention name="Tyler" />
            </button>
        </li>
        <li>
            <button on:click={() => selectUser("Mason", 5)}>
                <UserMention name="Mason" />
            </button>
        </li>
    </ul>
</section>

<style>
	section {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
	}
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        transform: scale(1.5);
    }

    button {
        transform-origin: left;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }

    button:hover {
        transform: scale(1.5);
    }
</style>
