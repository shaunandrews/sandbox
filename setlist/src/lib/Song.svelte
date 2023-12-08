<script>
    export let song;
</script>

<div class="song">
    <div class="song__title">{song.title}</div>
    <div class="song__notes">{song.notes}</div>
</div>

<style>
    .song__notes {
        font-style: italic;
        font-size: 0.8em;
    }
</style>