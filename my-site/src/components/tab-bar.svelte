<nav id="tab-bar">
    <button id="tab__my-site" class="tab active">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="13" r="2" />
            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
            <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
        </svg>
        <label>My Site</label>
    </button>
    <button id="tab__reader" class="tab">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"
            />
            <line x1="8" y1="8" x2="12" y2="8" />
            <line x1="8" y1="12" x2="12" y2="12" />
            <line x1="8" y1="16" x2="12" y2="16" />
        </svg>
        <label>Reader</label>
    </button>
    <button id="tab__notifications" class="tab">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z"
            />
            <path
                d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707"
            />
        </svg>
        <label>Notifications</label>
    </button>
</nav>

<style>
    nav {
        position: sticky;
        bottom: 0;
        right: 0;
        left: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding: 0 20px 10px 20px;
    }

    button {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 10px;
        gap: 5px;
        /* height: 40px; */
        width: -webkit-fill-available;
    }

    button svg {
        height: 25px;
        width: 25px;
        stroke: rgba(0, 0, 0, 0.5);
    }

    button label {
        display: none;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.5);
    }

    button:hover svg {
        stroke: black;
    }

    button:hover label {
        color: black;
    }

    button.active label {
        color: black;
    }

    button.active svg {
        stroke: black;
    }
</style>
