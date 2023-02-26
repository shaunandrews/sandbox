<script>
    // move the selected class to the clicked button
    function toggleSelected(event) {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.classList.remove("selected");
        });
        event.target.classList.add("selected");
    }
</script>

<nav id="site-view-toggle">
    <button class="selected" on:click={toggleSelected}>Home</button>
    <button on:click={toggleSelected}>Menu</button>
</nav>

<style>
    nav {
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        padding: 2px;
        border-radius: 7px;
        position: relative;
        box-shadow: inset 0 1px 2px 1px rgba(0, 0, 0, 0.3);
    }

    button {
        flex-grow: 1;
        padding: 8px 15px;
        border-radius: 5px;
    }

    .selected {
        background: white;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    }
</style>
