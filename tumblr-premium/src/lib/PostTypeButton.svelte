<script>
    export let type = '';
    let rotation = 0;
    let transformStyle = 'scale(1)';

    // Function to generate a random rotation
    function getRandomRotation() {
        return Math.random() * 16 - 4; // Generates a number between -4 and 4
    }

    // Reactive statement for handling hover state
    let hovered = false;
    $: if (hovered) {
        rotation = getRandomRotation();
        transformStyle = `scale(1.25) rotate(${rotation}deg)`;
    } else {
        rotation = 0;
        transformStyle = 'scale(1)';
    }
</script>

<div class="post-type" role="button" tabindex="0" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <img class="icon" src="/post-type-icons/{type}.svg" alt={type} style={`transform: ${transformStyle};`} />
    <span class="label">{type}</span>
</div>

<style>
    .post-type {
        flex-grow: 1;
        display: flex;
        gap: 2.5px;
        flex-direction: column;
        padding: 15px 0;
        cursor: pointer;
    }

    .post-type:hover {
        background: rgba(0, 0, 0, 0.025);
    }

    .icon {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        position: relative;
        top: 0;
        transition: all 0.1s ease-in;
    }

    .post-type:hover .icon {
        top: -5px;
    }

    .label {
        width: 100%;
        text-align: center;
        opacity: 0.25;
        font-size: 0.85em;
        text-transform: capitalize;
    }

    .post-type:hover .label {
        opacity: 1;
    }
</style>
