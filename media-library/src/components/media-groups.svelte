<aside id="media-groups">
    <header>
        <input type="search" placeholder="Search" />
        <!-- <select>
            <option>All</option>
            <option>Images</option>
            <option>Videos</option>
            <option>Audio</option>
            <option>Documents</option>
        </select> -->
    </header>
    <ul>
        <li class="current">Recent</li>
        <li>Calendar</li>
        <li>Most Viewed</li>
        <li>Unused</li>
    </ul>
    <ul>
        <li>Holiday 2021</li>
        <li>Holiday 2022</li>
        <li>Shaun's Picks</li>
    </ul>
    <footer>
        <button>New group</button>
        <button>Manage groups</button>
    </footer>
</aside>

<style>
    #media-groups {
        position: sticky;
        top: 70px;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 70px);
        width: 300px;
    }

    header {
        position: sticky;
        padding: 0 20px 20px 20px;
        display: flex;
    }
    
    header input {
        display: block;
        flex-grow: 1;
        padding: 15px 20px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.075);
    }
    
    header select {}

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
    }
    
    footer button {
        padding: 10px;
    }

    ul {
        margin: 0 20px 20px 20px;
    }
    
    li {
        padding: 15px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    li:hover {
        background: rgba(0, 0, 0, 0.075);
    }
    
    li.current {
        background: black;
        color: white;
    }
</style>