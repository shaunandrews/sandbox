function ReaderPostHeader(props) {
    return (
        <header className="reader__post-header">
            {props.avatar && (
                <div className="reader__post-avatar">
                    {props.avatar}
                </div>
            )}
            <h2>{props.title}</h2>

            <p>{props.url}</p>
            <p>{props.time}</p>

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
        <div className="post-actions">
            <button className="icon-only"><Icon name="bookmark" /></button>
            <button className="icon-only"><Icon name="repeat" /></button>
            <button className="icon-only"><Icon name="comment" /></button>
            <button className="icon-only"><Icon name="star" /></button>
        </div>
    )
}

function ReaderFollowingPosts() {
    return (
        <div className="reader__following-posts">
            <Card className="reader-post">
                <img className="post-avatar" src="https://loremflickr.com/42/42/" height="42" width="42" alt="Avatar" />
                <div className="post-content">
                    <div className="post-meta">
                        <h2 className="site-title">Sporadic Thoughts</h2>
                        <p className="site-url">sporadicthoughts.com</p>
                        {/* <p className="post-time">2 hours ago</p> */}
                    </div>
                    <h3 className="post-title">The Benefits of Meditation for Mental Health</h3>
                    <div className="post-excerpt">
                        <p>Meditation has been shown to have numerous benefits for mental health, including reducing anxiety and depression, improving focus and attention, and increasing feelings of well-being. In this article, we explore the science behind meditation and how you can start a meditation practice.</p>
                    </div>
                    <p className="post-tags">meditation, mental health, mindfulness, self-care</p>
                    <ReaderPostActions />
                </div>
            </Card>

            <Card className="reader-post">
                <img src="https://loremflickr.com/42/42/" height="42" width="42" alt="Avatar" />
                <div className="post-content">
                    <div className="post-meta">
                        <h2 className="site-title">Sporadic Thoughts</h2>
                        <p className="site-url">sporadicthoughts.com</p>
                        {/* <p className="post-time">2 hours ago</p> */}
                    </div>
                    <h3 className="post-title">The Benefits of Meditation for Mental Health</h3>
                    <div className="post-excerpt">
                        <p>Meditation has been shown to have numerous benefits for mental health, including reducing anxiety and depression, improving focus and attention, and increasing feelings of well-being. In this article, we explore the science behind meditation and how you can start a meditation practice.</p>
                    </div>
                    <p className="post-tags">meditation, mental health, mindfulness, self-care</p>
                </div>
            </Card>

            <Card className="reader-post">
                <img src="https://loremflickr.com/42/42/" height="42" width="42" alt="Avatar" />
                <div className="post-content">
                    <div className="post-meta">
                        <h2 className="site-title">Sporadic Thoughts</h2>
                        <p className="site-url">sporadicthoughts.com</p>
                        {/* <p className="post-time">2 hours ago</p> */}
                    </div>
                    <h3 className="post-title">The Benefits of Meditation for Mental Health</h3>
                    <div className="post-excerpt">
                        <p>Meditation has been shown to have numerous benefits for mental health, including reducing anxiety and depression, improving focus and attention, and increasing feelings of well-being. In this article, we explore the science behind meditation and how you can start a meditation practice.</p>
                    </div>
                    <p className="post-tags">meditation, mental health, mindfulness, self-care</p>
                </div>
            </Card>

            <Card className="reader-post">
                <img src="https://loremflickr.com/42/42/" height="42" width="42" alt="Avatar" />
                <div className="post-content">
                    <div className="post-meta">
                        <h2 className="site-title">Sporadic Thoughts</h2>
                        <p className="site-url">sporadicthoughts.com</p>
                        {/* <p className="post-time">2 hours ago</p> */}
                    </div>
                    <h3 className="post-title">The Benefits of Meditation for Mental Health</h3>
                    <div className="post-excerpt">
                        <p>Meditation has been shown to have numerous benefits for mental health, including reducing anxiety and depression, improving focus and attention, and increasing feelings of well-being. In this article, we explore the science behind meditation and how you can start a meditation practice.</p>
                    </div>
                    <p className="post-tags">meditation, mental health, mindfulness, self-care</p>
                </div>
            </Card>
        </div>
    )
}

function ReaderView() {
    const [currentView, setCurrentView] = React.useState('Following');
    const [currentType, setCurrentType] = React.useState('posts');
    const [currentSection, setCurrentSection] = useState('Following');

    return (
        <div className="view reader">
            <header className="view__header toolbar">
                <SectionHeadingMenu
                    currentSection={currentSection}
                    onChange={setCurrentSection}
                    sections={[
                        { label: 'Following', icon: 'check-square' },
                        { label: 'Discover', icon: 'binoculars' },
                        { label: 'Liked posts', icon: 'star' },
                        { label: 'Saved posts', icon: 'bookmarks' }
                    ]}
                />

                <div className="toolbar-group">
                    <button className="icon-only"><Icon name="search" /></button>
                    <button className="icon-only"><Icon name="menu" /></button>
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