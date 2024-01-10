<script>
    export let username = '';
    export let isReblog = false;
    export let size = 32;
</script>

<div class="avatar">
	<img class="avatar-image" src="http://fpoimg.com/{size}" alt={username} />
    {#if isReblog}
        <div class="activity-indicator reblog">Reblogged</div>
    {/if}
</div>

<style>
    .avatar {
        position: relative;
    }

    .avatar-image {
        display: block;
        border-radius: 5px;
    }

    .activity-indicator {
        z-index: 1;
        position: absolute;
        right: 2px;
        bottom: 2px;
        background: rgb(22, 156, 22);
        color: white;
        height: 15px;
        width: 15px;
        border-radius: 20px;
        text-indent: -5000px;
        box-shadow: 0 0 0 2px white inset;
    }
</style>