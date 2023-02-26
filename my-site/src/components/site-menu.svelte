<script>
    let isShowing = false,
        className = "is-hidden";

    function toggleSiteMenu() {
        if (isShowing) {
            isShowing = false;
            className = "is-hidden";
        } else {
            isShowing = true;
            className = "is-showing";
        }
    }
</script>

<div id="site-menu">
    <button on:click={toggleSiteMenu}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    </button>

    <section id="site-menu-sheet" class={className}>
        <ul>
            <li><a href="#">Highlights</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Comments</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Activity</a></li>
            <li><a href="#">Sharing</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </section>
</div>

<style>
    #site-menu {
        position: relative;
    }

    button {
        padding: 5px;
        border-radius: 5px;
    }

    button:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    svg {
        display: block;
        border-radius: 25px;
        height: 25px;
        width: 25px;
    }

    #site-menu-sheet.is-hidden {
        display: none;
    }

    #site-menu-sheet.is-showing {
        display: block;
    }

    ul {
        position: absolute;
        top: 40px;
        right: 0;
        background: white;
        padding: 20px;
    }
</style>
