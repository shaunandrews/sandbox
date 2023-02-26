<script>
    import Site from "./site.svelte";
    export let isShowing = false;

    let className = "is-hidden";

    $: if (isShowing) {
        className = "is-showing";
    } else {
        className = "is-hidden";
    }
</script>

<section class={className}>
    <Site title="Sporadic Thoughts" url="sporadicthoughts.wordpress.com" />
    <Site title="Drums n Booze" url="drumsnbooze.wordpress.com" />
    <button>Add site</button>
</section>

<style>
    section {
        overflow: hidden;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: all 0.2s ease-in-out;
    }

    li a {
        display: block;
        padding: 5px 20px;
    }

    .is-hidden {
        max-height: 0;
    }

    .is-showing {
        max-height: 40vh;
    }
</style>
