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

function ReaderFollowingPosts() {
    return (
        <div className="reader__following-posts">
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
        </div>
    )
}

function ReaderView() {
    const [currentView, setCurrentView] = React.useState('Following');
    const [currentType, setCurrentType] = React.useState('posts');

    return (
        <div className="view reader">
            <header className="view__header toolbar">
                <DropdownMenu
                    name="Reader"
                    showCurrent={true}
                    showChevron={true}
                    options={[
                        {
                            label: 'Following',
                            value: 'Following',
                        },
                        {
                            label: 'Discover',
                            value: 'Discover',
                        },
                        {
                            label: 'Liked Posts',
                            value: 'Liked',
                        },
                        {
                            label: 'Saved Posts',
                            value: 'Saved',
                        }
                    ]}
                    value={currentView}
                    onChange={setCurrentView}
                />

                <div className="toolbar-group">
                    <button class="icon-only"><Icon name="search" /></button>
                    <button class="icon-only"><Icon name="menu" /></button>
                </div>
            </header>

            <main className="view__content">
                <SegmentedControl
                    options={[
                        { value: 'posts', label: 'Posts' },
                        { value: 'sites', label: 'Sites' },
                        { value: 'tags', label: 'Tags' }
                    ]}
                    value={currentType}
                    onChange={setCurrentType}
                />

                {currentType === 'posts' && (
                    <ReaderFollowingPosts />
                )}

                {currentType === 'sites' && (
                    <div className="reader__following-sites">
                        <Site
                            icon={<SiteIcon number="1234" />}
                            title="WordPress News"
                            url="wordpress.org/news/"
                        />
                        <Site  
                            icon={<SiteIcon number="2345" />}
                            title="WordPress.com Blog"
                            url="wordpress.com/blog"
                        />
                        <Site
                            icon={<SiteIcon number="3456" />}
                            title="CSSTricks"
                            url="css-tricks.com"
                        />
                        <Site
                            icon={<SiteIcon number="4323" />}
                            title="Baxtor's Blog"
                            url="baxtor.blog"
                        />
                        <Site
                            icon={<SiteIcon number="3324" />}
                            title="Automattic Design"
                            url="automattic.design"
                        />
                    </div>
                )}
            </main>
        </div>
    )
}