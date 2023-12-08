<script>
    import data from '$lib/songs.json';
    import Song from '$lib/Song.svelte';
    let songs = data.songs;
</script>

<h1>Setlist</h1>
<p>A simple app for managing your song and set lists.</p>

<h2>Sets</h2>
<p>A list of shows and the songs that were played.</p>
<ol>
    <li>
        <div>The Terrace Tavern</div>
        <div>Dec 29, 2023, 7 PM&mdash;10 PM</div>
        <div>0 songs</div>
    </li>
    <li>
        <div>The Terrace Tavern</div>
        <div>Nov 25, 2023, 7 PM&mdash;10 PM</div>
        <div>32 songs</div>
    </li>
</ol>

<h2>Songs</h2>
<div class="songs-list">
  {#each songs as song}
    <Song {song} />
  {/each}
</div>

<style>
    .songs-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>