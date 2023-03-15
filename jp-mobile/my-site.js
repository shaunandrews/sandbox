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

function MySiteToday({ toggleStatsView, toggleCommentsView }) {

    function handleQuickLinkClick(label) {
        if (label === 'Comments') {
            toggleCommentsView(true);
        }
    }

    function openStatsView() {
        toggleStatsView(true);
    }

    return (
        <div className="my-site__home">
            <Card
                title="Today's stats"
                className="todays-stats"
                optionsMenu={[
                    {
                        type: 'option',
                        label: 'Hide this card',
                    },
                ]}
                onClick={openStatsView}
            >
                <StatsHighlights />
            </Card>

            <Card
                title="Writing prompt"
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

            <Card
                title="Quick links"
                className="quick-links"
            >
                <QuickLink icon="post" label="Posts" data="82" />
                <QuickLink icon="page" label="Pages" data="12" />
                <QuickLink
                    icon="comment"
                    label="Comments"
                    data="3"
                    onClick={handleQuickLinkClick}
                />
                <QuickLink icon="media" label="Media" data="1,392" />
            </Card>

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

function CommentAuthor({ avatar, displayName, website, email, ip }) {
    return (
        <div className="comment-author">
            {avatar && avatar}
            <div className="comment-author__details">
                <div className="comment-author__byline">
                    <h3 className="comment-author__display-name">{displayName},</h3>
                    <a className="comment-author__website" href={"https://" + website}>{website}</a>
                </div>

                <a className="comment-author__email" href="mailto:{email}">{email}</a>

                {/* <p className="comment-author__ip">{ip}</p> */}
            </div>
        </div >
    )
}

function RelevantPost({ postTitle }) {
    return (
        <div className="relevant-post">
            <label>Relevant post</label>
            <h3>{postTitle}</h3>
            <Icon name="chevron-right" />
        </div>
    )
}

function CommentContent({ lengthy }) {
    return (
        <div className="comment-content">
            <p>This is so much cooler than the random strokes of colors and stars I painted at the GM.</p>

            {lengthy && (
                <>
                    <p>I really enjoyed reading this blog post! The information was well-researched and presented in a clear and concise manner. I appreciated the insights and analysis that you provided, and I found the examples and case studies to be particularly helpful in understanding the concepts you were discussing.</p>

                    <p>One point that stood out to me was your discussion of the importance of user experience in web design. I completely agree that a website's usability and accessibility are crucial factors in its success, and I think it's important for web designers to prioritize these aspects when creating a site. I also appreciated your tips on how to improve user experience, such as using clear and consistent navigation and optimizing site speed.</p>

                    <p>Overall, I thought this was a very informative and thought-provoking blog post, and I look forward to reading more of your work in the future. Thank you for sharing your insights and expertise with your readers!</p>
                </>
            )}
        </div>
    )
}

function CommentDetail({ commentStatus, setCommentStatus }) {
    return (
        <div className="comment-detail">
            <CommentAuthor
                avatar={<Avatar size="48" rounded={true} />}
                displayName="Bill Bradski"
                website="billbradski.com"
                email="bill.bradski@gmail.com"
                ip="192.168.0.1"
            />

            <RelevantPost
                postTitle="Scale in Tilt Brush"
            />

            <CommentContent lengthy={false} />

            <div className="comment-meta">
                <h4 className="comment-date">Oct. 3, 2016 @ 4:20 PM</h4>
                {commentStatus === 'pending' && (
                    <label className="comment-status pending">Pending</label>
                )}
            </div>

            {commentStatus === 'pending' && (
                <div className="comment-actions column">
                    <button
                        className="approve"
                        onClick={() => setCommentStatus('approved')}
                    >
                        <Icon name="check" />
                        <label>Approve</label>
                    </button>
                    <button className="spam">
                        {/* <Icon name="spam" /> */}
                        <label>Mark as spam</label>
                    </button>
                    <button className="trash">
                        {/* <Icon name="delete" /> */}
                        <label>Move to trash</label>
                    </button>
                </div>
            )}

            {commentStatus === 'approved' && (
                <div className="comment-actions row">
                    <button className="reply">
                        <Icon name="reply" />
                        <label>Reply</label>
                    </button>
                    <CommentLikeButton />
                    <button className="share">
                        <Icon name="share" />
                        <label>Share</label>
                    </button>
                </div>
            )}
        </div>
    )
}

function CommentLikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
        setIsLiked(!isLiked);
    };

    return (
        <button className={`comment-like ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            {isLiked && (
                <div className="comment-like__animation">
                    <Icon name="star-filled" />
                </div>
            )}

            <Icon name={isLiked ? "star-filled" : "star"} />
            <label>{isLiked ? 'Liked' : 'Like'}</label>
        </button>
    );
}


function CommentListItem({
    pending,
    author,
    authorAvatar,
    postTitle,
    content,
    onClick,
}) {
    return (
        <div className="comment-list-item" onClick={onClick}>
            {pending && (
                <div className="comment-list-item__pending" />
            )}
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
    const [statsViewVisible, setStatsViewVisible] = useState(false);
    const [commentsViewVisible, setCommentsViewVisible] = useState(false);
    const [commentViewVisible, setCommentViewVisible] = useState(true);
    const [commentStatus, setCommentStatus] = useState('pending');

    function handleMySiteViewChange(value) {
        setMySiteView(value);
    }

    function selectComment(comment) {
        setCommentViewVisible(true);
    }

    function getCommentMenuItems(commentStatus, setCommentStatus) {
        const menuItems = [
            commentStatus === "approved"
                ? { type: "option", label: "Unapprove", onClick: () => setCommentStatus("pending") }
                : { type: "option", label: "Approve", onClick: () => setCommentStatus("approved") },
            { type: "option", label: "Mark as spam" },
            { type: "option", label: "Move to trash", isScary: true },
            { type: "divider" },
            { type: "option", label: "Edit comment" },
        ];

        return menuItems;
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
                        toggleStatsView={setStatsViewVisible}
                    />
                )}

                {mySiteView === 'menu' && (
                    <MySiteMenu />
                )}
            </main>

            {/* Stats Overlay */}
            <div className={`view__overlay stats ${statsViewVisible ? 'active' : ''}`}>
                <div className="overlay__header">
                    <button className="view__back" onClick={() => setStatsViewVisible(false)}>
                        <Icon name="back" />
                        <label>Back</label>
                    </button>

                    <h1 className="section-heading">Stats</h1>

                    <SegmentedControl
                        className="view-control"
                        options={[
                            // { value: 'insights', label: 'Insights' },
                            { value: 'days', label: 'Days' },
                            { value: 'weeks', label: 'Weeks' },
                            { value: 'months', label: 'Months' },
                            { value: 'years', label: 'Years' },
                        ]}
                        value="weeks"
                    />

                    <div className="stats-date-nav">
                        <button>
                            <Icon name="chevron-left" />
                        </button>

                        <label>Mar 13 &ndash; Mar 19</label>

                        <button>
                            <Icon name="chevron-right" />
                        </button>
                    </div>
                </div>

                <div className="overlay__content">
                    <Card
                        title="Views & visitors"
                        classname="views-visitors"
                        optionsMenu={[
                            {
                                type: 'option',
                                label: 'Hide this card',
                            },
                        ]}
                    >
                        <StatsChart />

                        <p>Your views in the last 7-days are up <strong>10% (293 views)</strong> from the previous 7-days.</p>

                        <SegmentedControl
                            className="views-visitors-control"
                            options={[
                                { value: 'views', label: 'Views' },
                                { value: 'visitors', label: 'Visitors' },
                            ]}
                            value="views"
                        />
                    </Card>

                    <Card
                        title="Posts and pages"
                        classname="posts-pages"
                        optionsMenu={[
                            {
                                type: 'option',
                                label: 'Hide this card',
                            },
                        ]}
                    >
                        <div className="posts-pages__item">
                            <Icon name="post" />
                            <label>My First Blog Post</label>
                            <span>239 views</span>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Comments List Overlay */}
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
                            { value: 'all', label: 'All (7)' },
                            { value: 'pending', label: 'Pending (1)' },
                            // { value: 'unreplied', label: 'Unreplied' },
                            { value: 'approved', label: 'Approved (6)' },
                            // { value: 'spam', label: 'Spam' },
                            // { value: 'trashed', label: 'Trashed' },
                        ]}
                        value="all"
                    />

                    <div className="comments-list">
                        <CommentListItem
                            pending={true}
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

                    <div className="toolbar-group">
                        <OptionsMenu
                            className="comment-options-menu"
                            items={getCommentMenuItems(commentStatus, setCommentStatus)}
                        />
                    </div>
                </div>

                <div className="overlay__content">
                    <CommentDetail
                        commentStatus={commentStatus}
                        setCommentStatus={setCommentStatus}
                    />
                </div>
            </div>
        </div >
    )
}