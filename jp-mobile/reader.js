function ReaderPostActions() {
    return (
        <div className="reader-post__actions">
            <button>
                <Icon name="bookmark" />
            </button>
            <button>
                <Icon name="repeat" />
                <strong>3</strong>
            </button>
            <button>
                <Icon name="comment" />
                <strong>18</strong>
            </button>
            <button>
                <Icon name="star" />
                <strong>102</strong>
            </button>
        </div>
    )
}

function ReaderPost({
    postAuthor,
    avatar,
    siteTitle,
    siteUrl,
    featuredImage,
    title,
    excerpt,
}) {
    return (
        <div className="reader-post">
            <OptionsMenu
                className="reader-post__options"
                items={[
                    {
                        type: 'option',
                        label: 'View site details',
                    },
                    {
                        type: 'option',
                        label: 'Share this post',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        type: 'option',
                        label: 'Report this post',
                    },
                    {
                        type: 'option',
                        label: 'Unfollow site',
                    },
                    {
                        type: 'option',
                        label: 'Block site',
                    },
                ]}
            />

            <div className="reader-post__header">
                <div className="reader-post__avatar">
                    {avatar}
                </div>

                <div className="reader-post__byline">
                    <h2 className="reader-post__site-author">
                        <strong className="post-author">{postAuthor}</strong>, <strong className="site-title">{siteTitle}</strong>
                    </h2>

                    <p className="reader-post__site-url">{siteUrl}</p>
                </div>
            </div >

            <div className="reader-post__body">
                {featuredImage && (
                    <div className="reader-post__featured-image">
                        {featuredImage}
                    </div>
                )}

                <div className="reader-post__title-excerpt">
                    <h3 className="reader-post__title">{title}</h3>

                    <p className="reader-post__excerpt">{excerpt}</p>
                </div>

                <ol className="reader-post__tags">
                    <li className="reader-post__tag">Meditation</li>
                    <li className="reader-post__tag">Mental Health</li>
                    <li className="reader-post__tag">Anxiety</li>
                </ol>

                <ReaderPostActions />
            </div>
        </div >
    )
}

function ReaderFollowingPosts() {
    return (
        <div className="reader__following-posts">
            <ReaderPost
                postAuthor="Shaun Andrews"
                avatar={<img src="https://loremflickr.com/40/40/?lock=39" height="40" width="40" alt="Avatar" />}
                siteTitle="Sporadic Thoughts"
                siteUrl="sporadicthoughts.com"
                title="The Benefits of Meditation for Mental Health"
                excerpt="Meditation has been shown to have numerous benefits for mental health, including reducing anxiety and depression, improving focus and attention, and increasing feelings of well-being. In this article, we explore the science behind meditation and how you can start a meditation practice."
            />

            <ReaderPost
                postAuthor="Tim Smith"
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="The Foodie Life"
                siteUrl="foodielife.com"
                featuredImage={<img src="https://loremflickr.com/300/200/?lock=392" height="200" width="300" alt="Featured Image" />}
                title="Exploring the Culinary Wonders of Thailand"
                excerpt="Thai cuisine is renowned for its bold flavors and exotic ingredients. In this post, we take a culinary journey through Thailand, sampling some of the country's most iconic dishes and exploring the unique cultural influences that have shaped the cuisine."
            />

            <div className="reader-suggestions">
                <h2 className="reader-suggestions__title">Posts you might like</h2>
                <div className="reader-suggestions__list">
                    <Card className="reader-suggestions__item">
                        <img src="https://loremflickr.com/300/200/?lock=902" height="200" width="300" alt="Featured Image" />
                        <h4>A post title that sounds interesting.</h4>
                        <h5>Site Title</h5>
                        <h6>sitetitle.com</h6>
                    </Card>

                    <Card className="reader-suggestions__item">
                        <img src="https://loremflickr.com/300/200/?lock=902" height="200" width="300" alt="Featured Image" />
                        <h4>A post title that sounds interesting.</h4>
                        <h5>Site Title</h5>
                        <h6>sitetitle.com</h6>
                    </Card>

                    <Card className="reader-suggestions__item">
                        <img src="https://loremflickr.com/300/200/?lock=902" height="200" width="300" alt="Featured Image" />
                        <h4>A post title that sounds interesting.</h4>
                        <h5>Site Title</h5>
                        <h6>sitetitle.com</h6>
                    </Card>
                </div>
            </div>
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