<script>
    export let size, title, url, classNames;

    if (size === "mini") {
        classNames = "mini";
    } else {
        classNames = "";
    }
</script>

<section on:click on:keyup class={classNames}>
    <img
        src="https://picsum.photos/50"
        height="50"
        width="50"
        alt="Site Icon"
    />
    <div class="stacked">
        <h1>{title}</h1>
        {#if size !== "mini"}
        <span>{url}</span>
        {/if}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    img {
        display: block;
        height: 40px;
        widows: 40px;
        border-radius: 2px;
    }

    .mini img {
        height: 25px;
        width: 25px;
    }

    h1 {
        font-size: 15px;
    }

    .stacked {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>
