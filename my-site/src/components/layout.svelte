<div id="layout">
    <slot />
</div>

<style>
    #layout {
        width: 420px;
        height: calc(100vh - 80px);
        margin: auto;
        /* border: 10px solid black; */
        border-radius: 5px;
        overflow-x: hidden;
        background: #efefef;
        position: relative;
    }
</style>
