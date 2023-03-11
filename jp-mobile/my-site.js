function StatsHighlights() {
    return (
        <div className="stats">
            <div className="stat">
                <div className="label">Views</div>
                <div className="value">283</div>
            </div>
            <div className="stat">
                <div className="label">Visits</div>
                <div className="value">329</div>
            </div>
            <div className="stat">
                <div className="label">Comments</div>
                <div className="value">3</div>
            </div>
            {/* <div className="stat">
                <div className="label">Likes</div>
                <div className="value">27</div>
            </div> */}
        </div>
    )
}

function StatsChart() {
    return (
        <div className="chart">
            <div className="bar" style={{ height: "20%" }}>
                <span>20</span>
            </div>
            <div className="bar" style={{ height: "35%" }}>
                <span>35</span>
            </div>
            <div className="bar" style={{ height: "70%" }}>
                <span>70</span>
            </div>
            <div className="bar" style={{ height: "80%" }}>
                <span>80</span>
            </div>
            <div className="bar" style={{ height: "30%" }}>
                <span>30</span>
            </div>
        </div>
    )
}

function QuickLink({ icon, label, data, onClick }) {
    function handleClick(label) {
        onClick(label);
    }

    return (
        <div className="quick-link" onClick={() => handleClick(label)}>
            <Icon name={icon} />
            <label className="quick-link__label">{label}</label>
        </div>
    )
}

function DraftPost({ title, date, excerpt }) {
    return (
        <div className="draft-post">
            <div className="draft-post__title">{title}</div>
            <div className="draft-post__excerpt">{excerpt}</div>
        </div>
    )
}

function MySiteToday({ toggleCommentsView }) {
    function handleQuickLinkClick(label) {
        if (label === 'Comments') {
            toggleCommentsView(true);
        }
    }

    return (
        <div className="my-site__home">
            <div className="quick-links">
                <QuickLink icon="posts" label="Posts" data="82" />
                <QuickLink icon="pages" label="Pages" data="12" />
                <QuickLink
                    icon="comment"
                    label="Comments"
                    data="3"
                    onClick={handleQuickLinkClick}
                />
                <QuickLink icon="media" label="Media" data="1,392" />
            </div>

            <Card className="todays-stats">
                <CardHeader
                    title="Today's Stats"
                    optionsMenu={(
                        <DropdownMenu
                            name="Options"
                            icon="menu"
                            showLabel={false}
                            showChevron={false}
                            position="right"
                            options={[
                                { label: 'Option 1', value: 'option-1' },
                                { label: 'Option 2', value: 'option-2' },
                                { label: 'Option 3', value: 'option-3' },
                            ]}
                        />
                    )}
                />
                <div className="card__content">
                    <StatsHighlights />
                </div>
            </Card>

            <Card className="writing-prompt">
                <CardHeader
                    title="Writing Prompt"
                    optionsMenu={(
                        <DropdownMenu
                            name="Options"
                            icon="menu"
                            showLabel={false}
                            showChevron={false}
                            position="right"
                            options={[
                                { label: 'View more prompts', value: 'option-1' },
                                { label: 'Skip for today', value: 'option-2' },
                                { label: 'Learn more', value: 'option-3' },
                                { label: 'Turn off prompts', value: 'option-4' }
                            ]}
                        />
                    )}
                />
                <div className="card__content">
                    <p className="writing-prompt__question">What's the best thing you've ever eaten?</p>
                    <div className="writing-prompt__responses">
                        <div className="avatars">
                            <img src="https://loremflickr.com/30/30/?lock=392" alt="Writing Prompt" />
                            <img src="https://loremflickr.com/30/30/?lock=492" alt="Writing Prompt" />
                            <img src="https://loremflickr.com/30/30/?lock=592" alt="Writing Prompt" />
                        </div>
                        <p className="response-count">232 responses</p>
                    </div>
                    <button className="writing-prompt__write">Write your response</button>
                </div>
            </Card>

            <Card className="lastest-drafts">
                <CardHeader
                    title="Drafts"
                />
                <div className="card__content">
                    <DraftPost
                        title="10 Ways to Boost Your Productivity"
                        excerpt={<p>Looking for ways to increase your productivity? Check out these top 10 tips and tricks.</p>}
                    />

                    <DraftPost
                        title="The Best Travel Destinations for 2023"
                        excerpt={<p>Ready to start planning your next adventure? Here are the top travel destinations to add to your list.</p>}
                    />

                    <DraftPost
                        title="Why You Should Learn to Code in 2023"
                        excerpt={<p>Coding is an increasingly valuable skill in today's job market. Here's why you should consider learning to code in the new year.</p>}
                    />

                    <button className="latest-drafts__new">New draft</button>
                </div>
            </Card>

            <Card className="domains">
                <CardHeader
                    title="Domains"
                />
                <div className="card__content">
                    <p>You site is viewable at the following domains:</p>
                    <p>sporadicthoughts.com</p>
                    <p>sporadicthoughts.wordpress.com</p>
                    <button>Add domain</button>
                </div>
            </Card>

            <Card className="share">
                <CardHeader
                    title="Share"
                />
                <div className="card__content">
                    <p>Share your site with your friends and followers!</p>
                    <div className="share-buttons">
                        <button className="share-button share-button-facebook">Facebook</button>
                        <button className="share-button share-button-twitter">Twitter</button>
                        <button className="share-button share-button-link">Copy Link</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

function MySiteMenu() {
    return (
        <div className="my-site__menu">
            <h3>Content</h3>
            <ol className="table-view">
                <li>Posts</li>
                <li>Pages</li>
                <li>Media</li>
                <li>Comments</li>
            </ol>
            <h3>Traffic</h3>
            <ol className="table-view">
                <li>Stats</li>
                <li>Social</li>
                <li>Advertising</li>
            </ol>
            <h3>Manage</h3>
            <ol className="table-view">
                <li>Activity</li>
                <li>Backup</li>
                <li>Scan</li>
            </ol>
            <ol className="table-view">
                <li>People</li>
                <li>Plugins</li>
                <li>Themes</li>
                <li>Menus</li>
                <li>Settings</li>
            </ol>
            <ol className="table-view">
                <li>wp-admin</li>
            </ol>
        </div>
    )
}

function CommentDetail() {
    const [commentStatus, setCommentStatus] = useState('pending');

    function changeStatus(status) {
        setCommentStatus(status);
    }

    return (
        <div className="comment-detail">
            <div className="author">
                <img className="author__avatar" src="https://loremflickr.com/40/40/?lock=592" alt="Avatar" />
                <div className="author__details">
                    <h3 className="author__display-name">Dan Hauk</h3>
                    <p className="author__website"><a href="https://blog.danhauk.com">blog.danhauk.com</a></p>
                    <p className="author__email"><a href="mailto:bill.bradski@gmail.com">bill.bradski@gmail.com</a></p>
                    <p className="author__ip">192.168.0.1</p>
                </div>
            </div>
            <h4 className="comment-date">October 3, 2016</h4>
            <div className="comment-content">
                <p>This is so much cooler than the random strokes of colors and stars I painted at the GM.</p>
            </div>
            {commentStatus === 'pending' && (
                <div className="comment-status pending">
                    <h5>Pending</h5>
                    <p>This comment is pending approval and only visible to you.</p>
                    <div className="comment-actions">
                        <button onClick={() => changeStatus('approved')}>
                            <Icon name="check" />
                            <label>Approve</label>
                        </button>
                        <button>
                            <Icon name="spam" />
                            <label>Spam</label>
                        </button>
                        <button>
                            <Icon name="delete" />
                            <label>Trash</label>
                        </button>
                    </div>
                </div>
            )}
            {commentStatus === 'approved' && (
                <div className="comment-status approved">
                    <div className="comment-actions">
                        <button>
                            <Icon name="reply" />
                            <label>Reply</label>
                        </button>
                        <button>
                            <Icon name="star" />
                            <label>Like</label>
                        </button>
                        <button>
                            <Icon name="share" />
                            <label>Share</label>
                        </button>
                    </div>
                    <h5>Approved on Mar 10, 2023 @ 4:36 PM</h5>
                    <div className="comment-actions secondary">
                        <button onClick={() => changeStatus('pending')}>
                            <Icon name="dash-circle" />
                            <label>Unapprove</label>
                        </button>
                        <button>
                            <Icon name="delete" />
                            <label>Trash</label>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

function MySiteView(props) {
    const [mySiteView, setMySiteView] = useState('today');
    const [commentsViewVisible, setCommentsViewVisible] = useState(false);
    const [commentViewVisible, setCommentViewVisible] = useState(false);


    function handleMySiteViewChange(value) {
        setMySiteView(value);
    }

    function selectComment(comment) {
        setCommentViewVisible(true);
    }

    return (
        <div className="view my-site">
            <header className="view__header toolbar">
                <CurrentSite
                    icon={<SiteIcon number="5435" />}
                    title="Sporadic Thoughts"
                    url="sporadicthoughts.com"
                    switchSite={props.toggleSitesSheet}
                />

                <div className="toolbar-group">
                    <DropdownMenu
                        name="Options"
                        icon="menu"
                        showLabel={false}
                        showChevron={false}
                        position="right"
                        options={[
                            { label: 'Change site title', value: 'option-1' },
                            { label: 'Change domain name', value: 'option-2' },
                            { label: 'Share your site', value: 'option-3' },
                        ]}
                    />
                </div>
            </header>

            <main className="view__content">
                <SegmentedControl
                    className="view-control"
                    options={[
                        { value: 'today', label: 'Today' },
                        { value: 'menu', label: 'Menu' },
                    ]}
                    value={mySiteView}
                    onChange={handleMySiteViewChange}
                />

                {mySiteView === 'today' && (
                    <MySiteToday
                        toggleCommentsView={setCommentsViewVisible}
                    />
                )}

                {mySiteView === 'menu' && (
                    <MySiteMenu />
                )}
            </main>

            {/* Comments Overlay */}
            <div className={`view__overlay comments ${commentsViewVisible ? 'active' : ''}`}>
                <div className="overlay__header">
                    <button className="view__back" onClick={() => setCommentsViewVisible(false)}>
                        <Icon name="back" />
                        <label>Back</label>
                    </button>

                    <h1 className="section-heading">Comments</h1>
                </div>
                <div className="overlay__content">
                    <SegmentedControl
                        className="view-control"
                        options={[
                            { value: 'all', label: 'All' },
                            { value: 'pending', label: 'Pending' },
                            // { value: 'unreplied', label: 'Unreplied' },
                            { value: 'approved', label: 'Approved' },
                            // { value: 'spam', label: 'Spam' },
                            // { value: 'trashed', label: 'Trashed' },
                        ]}
                        value="all"
                    />

                    <div className="comment" onClick={selectComment}>
                        <img src="https://loremflickr.com/40/40/?lock=592" alt="Avatar" />
                        <h3>Dan Hauk</h3>
                        <h4>Scale in Tilt Brush</h4>
                        <p>This is so much cooler than the random strokes of colors and stars I painted at the GM.</p>
                    </div>
                </div>
            </div>

            {/* Comment Overlay */}
            <div className={`view__overlay comment-details ${commentViewVisible ? 'active' : ''}`}>
                <div className="overlay__header">
                    <button className="view__back" onClick={() => setCommentViewVisible(false)}>
                        <Icon name="back" />
                        <label>Back</label>
                    </button>

                    <h1 className="section-heading">Comment</h1>
                    <h2 className="section-subheading">Scale in Tile Brush</h2>
                </div>
                <div className="overlay__content">
                    <CommentDetail />
                </div>
            </div>
        </div >
    )
}