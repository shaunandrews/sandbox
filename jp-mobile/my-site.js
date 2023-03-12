function StatsHighlights() {
    return (
        <div className="stats">
            <div className="stat">
                <div className="value">283</div>
                <div className="label">Views</div>
            </div>
            <div className="stat">
                <div className="value">329</div>
                <div className="label">Visits</div>
            </div>
            <div className="stat">
                <div className="value">3</div>
                <div className="label">Comments</div>
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
            <Card
                title="Today's Stats"
                className="todays-stats"
                optionsMenu={[
                    {
                        type: 'option',
                        label: 'Hide this card',
                    },
                ]}
            >
                <StatsHighlights />
            </Card>

            <Card
                title="Writing Prompt"
                className="writing-prompt"
                optionsMenu={[
                    {
                        type: 'option',
                        label: 'View more prompts',
                    },
                    {
                        type: 'option',
                        label: 'Skip for today',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        type: 'option',
                        label: 'Writing prompt settings',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        type: 'option',
                        label: 'Hide this card',
                    },
                ]}
            >
                <p className="writing-prompt__question">What's the best thing you've ever eaten?</p>
                <div className="writing-prompt__responses">
                    <div className="avatars">
                        <img src="https://loremflickr.com/30/30/" alt="Writing Prompt" />
                        <img src="https://loremflickr.com/30/30/" alt="Writing Prompt" />
                        <img src="https://loremflickr.com/30/30/" alt="Writing Prompt" />
                    </div>
                    <p className="response-count">232 responses</p>
                </div>
                <button className="writing-prompt__write">Write your response</button>
            </Card>

            <div className="quick-links">
                <QuickLink icon="post" label="Posts" data="82" />
                <QuickLink icon="page" label="Pages" data="12" />
                <QuickLink
                    icon="comment"
                    label="Comments"
                    data="3"
                    onClick={handleQuickLinkClick}
                />
                <QuickLink icon="media" label="Media" data="1,392" />
            </div>

            <Card
                title="Drafts"
                className="lastest-drafts"
                optionsMenu={[
                    {
                        type: 'option',
                        label: 'Hide this card',
                    },
                ]}
            >
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
            </Card>

            <Card
                title="Domains"
                className="domains"
            >
                <p>You site is viewable at the following domains:</p>
                <p>sporadicthoughts.com</p>
                <p>sporadicthoughts.wordpress.com</p>
                <button>Add domain</button>
            </Card>

            <Card
                title="Share"
                className="share"
            >
                <p>Share your site with your friends and followers!</p>
                <div className="share-buttons">
                    <button className="share-button share-button-facebook">Facebook</button>
                    <button className="share-button share-button-twitter">Twitter</button>
                    <button className="share-button share-button-link">Copy Link</button>
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
            <h4 className="comment-date">Oct. 3, 2016 @ 4:20 PM</h4>
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

function CommentListItem({
    author,
    authorAvatar,
    postTitle,
    content,
    onClick,
}) {
    return (
        <div className="comment-list-item" onClick={onClick}>
            <div className="comment-list-item__avatar">
                {authorAvatar}
            </div>
            <div className="comment-list-item__details">
                <h3 className="comment-list-item__author">{author}</h3>
                <p className="comment-list-item__post-title">{postTitle}</p>
                <div className="comment-list-item__content">{content}</div>
            </div>
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
                    <OptionsMenu
                        items={[
                            {
                                type: 'option',
                                label: 'Change site icon',
                            },
                            {
                                type: 'option',
                                label: 'Change site title',
                            },
                            {
                                type: 'option',
                                label: 'Manage domains',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                type: 'option',
                                label: 'Customize Today view',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                type: 'option',
                                label: 'View site',
                            },
                            {
                                type: 'option',
                                label: 'Share site',
                            },
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

            {/* Comments List Overlay */}
            <div className={`view__overlay comments ${commentsViewVisible ? 'active' : ''}`}>
                <div className="overlay__header">
                    <button className="view__back" onClick={() => setCommentsViewVisible(false)}>
                        <Icon name="back" />
                        <label>Back</label>
                    </button>

                    <h1 className="section-heading">Comments</h1>

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
                </div>

                <div className="overlay__content">
                    <div className="comments-list">
                        <CommentListItem
                            author="Dan Hauk"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=592" alt="Avatar" />}
                            postTitle="Scale in Tilt Brush"
                            content={<p>This is so much cooler than the random strokes of colors and stars I painted at the GM.</p>}
                            onClick={selectComment}
                        />
                        <CommentListItem
                            author="Jessica Williams"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=345" alt="Avatar" />}
                            postTitle="New Recipe: Vegan Chili"
                            content={<p>I tried this recipe last night and it was amazing!</p>}
                        />

                        <CommentListItem
                            author="Chris Smith"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=654" alt="Avatar" />}
                            postTitle="My Experience at the Grand Canyon"
                            content={<p>The Grand Canyon was even more beautiful in person than I could have imagined.</p>}
                        />

                        <CommentListItem
                            author="Emily Davis"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=121" alt="Avatar" />}
                            postTitle="Book Review: The Alchemist"
                            content={<p>I just finished reading The Alchemist and I highly recommend it to anyone who hasn't read it yet!</p>}
                        />

                        <CommentListItem
                            author="David Lee"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=876" alt="Avatar" />}
                            postTitle="My Thoughts on the Latest Marvel Movie"
                            content={<p>I saw the latest Marvel movie over the weekend and it did not disappoint!</p>}
                        />

                        <CommentListItem
                            author="Samantha Rodriguez"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=456" alt="Avatar" />}
                            postTitle="Why I Started Learning to Code"
                            content={<p>I started learning to code a few months ago and it has been an incredibly rewarding experience.</p>}
                        />

                        <CommentListItem
                            author="Mark Johnson"
                            authorAvatar={<img src="https://loremflickr.com/40/40/?lock=987" alt="Avatar" />}
                            postTitle="My Trip to Tokyo"
                            content={<p>I recently took a trip to Tokyo and it was one of the most amazing experiences of my life.</p>}
                        />
                    </div>
                </div>
            </div>

            {/* Comment Detail Overlay */}
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