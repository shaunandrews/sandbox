<script>
    export let title = "Hello, world!",
        caption = "This is a caption.",
        image = "https://picsum.photos/50",
        type;

    function handleMediaItemClick() {
        const element = this;
        // get the element id
        
        cloneMediaItem(element);
    }

    // A function that clones the media-item and scales it out of view
    function cloneMediaItem(mediaItem) {
        const mediaPreview = mediaItem.querySelector(".media-preview"),
            mediaPreviewImg = mediaPreview.querySelector("img"),
            clone = mediaPreviewImg.cloneNode(true);

        clone.style.position = "absolute";
        clone.style.zIndex = "1";
        clone.style.top = "0";
        clone.style.left = "0";
        clone.style.width = "100%";
        clone.style.height = "100%";
        clone.style.transform = "scale(1.05)";

        mediaPreview.appendChild(clone);

        setTimeout(function () {
            clone.style.transform = "scale(2)";
            clone.style.opacity = "0";
        }, 1);

        // remove the clone after 0.2s
        setTimeout(function () {
            clone.remove();
        }, 200);
    }

    // Open the media details view
    function openMediaDetails(mediaID) {
        console.log("Open media details");
    }
</script>

<div
    class="media-item"
    on:click={handleMediaItemClick}
    on:keypress={handleMediaItemClick}
>
    <div class="media-preview">
        <img src={image} alt={caption} />

        {#if type === "video"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="4" x2="8" y2="20" />
                <line x1="16" y1="4" x2="16" y2="20" />
                <line x1="4" y1="8" x2="8" y2="8" />
                <line x1="4" y1="16" x2="8" y2="16" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="16" y1="8" x2="20" y2="8" />
                <line x1="16" y1="16" x2="20" y2="16" />
            </svg>
        {/if}

        {#if type === "audio"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="17" r="3" />
                <circle cx="16" cy="17" r="3" />
                <polyline points="9 17 9 4 19 4 19 17" />
                <line x1="9" y1="8" x2="19" y2="8" />
            </svg>
        {/if}

        {#if type === "document"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path
                    d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                />
                <line x1="9" y1="9" x2="10" y2="9" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
            </svg>
        {/if}
    </div>

    <div class="media-description">
        <h3>{title}</h3>
        {#if type}
            <h4>{type}</h4>
        {/if}
        <p>{caption}</p>
    </div>
</div>

<style>
    .media-item {
        width: 25%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
    }

    .media-item:hover {
        background: rgba(0, 0, 0, 0.075);
    }

    .media-preview {
        width: 100%;
        height: auto;
        max-height: 40vh;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    img {
        border-radius: 5px;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        transition: all 0.1s ease-in-out;
        /* transform-origin: 0 0; */
    }

    .media-item:hover img {
        transform: scale(1.025);
    }

    svg {
        position: absolute;
        top: calc(50% - 12.5px);
        left: calc(50% - 12.5px);
        background: white;
    }

    .media-description {
        display: none;
    }
</style>
