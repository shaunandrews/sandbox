function ReaderPostHeader(props) {
    return (
        <header className="reader__post-header">
            <div className="title-meta">
                <h2>{props.title}</h2>
                <div className="meta">
                    <p>{props.url}</p>
                    <p>{props.time}</p>
                </div>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <span className="visually-hidden">Options</span>
            </button>
        </header>
    )
}

function ReaderPostSummary() {
    return (
        <div className="reader__post-summary">
            <img src="https://loremflickr.com/300/200/?lock=392" alt="Post Image" />
            <h3>Your WordPress 6.2 Preview</h3>
            <p>On March 2, release square members Anne McCarthy and Rich Tabor presented a live product demo.</p>
        </div>
    )
}

function ReaderPostActions() {
    return (
        <div className="reader__post-actions">
            <button>Bookmark</button>
            <button>Reblog</button>
            <button>Comment</button>
            <button>Like</button>
        </div>
    )
}

function ReaderView() {
    return (
        <div className="view reader">
            <header className="view__header">
                <select>
                    <option>Following</option>
                    <option>Discover</option>
                    <option>Liked</option>
                    <option>Saved</option>
                </select>

                <button>Options</button>
                <button>Search</button>

                {/* <h1>Reader</h1>
                <nav className="tabs">
                    <button className="active">Following</button>
                    <button>Discover</button>
                    <button>Liked</button>
                    <button>Saved</button>
                </nav> */}
            </header>

            <main className="view__content">
                <Card className="reader-post">
                    <ReaderPostHeader
                        title="WordPress News"
                        url="wordpress.org/news/"
                        time="2 hours ago"
                    />
                    <ReaderPostSummary />
                    <ReaderPostActions />
                </Card>

                <Card className="reader-post">
                    <ReaderPostHeader
                        title="WordPress News"
                        url="wordpress.org/news/"
                        time="2 hours ago"
                    />
                    <ReaderPostSummary />
                    <ReaderPostActions />
                </Card>

                <Card className="reader-post">
                    <ReaderPostHeader
                        title="WordPress News"
                        url="wordpress.org/news/"
                        time="2 hours ago"
                    />
                    <ReaderPostSummary />
                    <ReaderPostActions />
                </Card>
            </main>
        </div>
    )
}