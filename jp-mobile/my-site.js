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
            <div className="stat">
                <div className="label">Likes</div>
                <div className="value">27</div>
            </div>
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

function MySiteToday() {
    return (
        <div className="my-site__home">
            <Card className="card-stats">
                <CardHeader title="Today's Stats" />
                <StatsChart />
                <hr />
                <StatsHighlights />

            </Card>

            <div className="card card-domain">
                <header className="card-header">
                    <h3>Domain</h3>
                    <Menu>
                        <MenuButton>Options</MenuButton>
                        <MenuContainer>
                            <MenuOption
                                label="Option 1"
                                selected={true}
                                onSelect={() => console.log('Option 1 selected')}
                            />
                            <MenuOption
                                label="Option 2"
                                selected={false}
                                onSelect={() => console.log('Option 2 selected')}
                            />
                        </MenuContainer>
                    </Menu>
                </header>
                <p>You site is viewable at the following domains:</p>
                <p>sporadicthoughts.com</p>
                <p>sporadicthoughts.wordpress.com</p>
                <button>Add domain</button>
            </div>

            <div className="card card-share">
                <header className="card-header">
                    <h3>Share</h3>
                    <button>Options</button>
                </header>
                <p>Share your site with your friends and followers!</p>
                <div className="share-buttons">
                    <button className="share-button share-button-facebook">Facebook</button>
                    <button className="share-button share-button-twitter">Twitter</button>
                    <button className="share-button share-button-link">Copy Link</button>
                </div>
            </div>

            <div className="card card-prompt">
                <h3>Writing Prompt</h3>
                <p>What's the best thing you've ever eaten?</p>
                <div className="responses">
                    <div className="avatars">
                        <img src="https://loremflickr.com/30/30/?lock=392" alt="Writing Prompt" />
                        <img src="https://loremflickr.com/30/30/?lock=492" alt="Writing Prompt" />
                        <img src="https://loremflickr.com/30/30/?lock=592" alt="Writing Prompt" />
                    </div>
                    <p>232 responses</p>
                </div>
                <button>Write an answer</button>
            </div>

            <div className="card card-drafts">
                <h3>Drafts</h3>
                <ol>
                    <li className="post">
                        <h4>Post Title</h4>
                        <p>This is an excerpt of the first few lines of the post.</p>
                    </li>
                    <li className="post">
                        <h4>Post Title</h4>
                        <p>This is an excerpt of the first few lines of the post.</p>
                    </li>
                    <li className="post">
                        <h4>Post Title</h4>
                        <p>This is an excerpt of the first few lines of the post.</p>
                    </li>
                </ol>
                <button>New draft</button>
            </div>
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

function MySiteView(props) {
    const [mySiteView, setMySiteView] = useState('today');

    function handleMySiteViewChange(value) {
        setMySiteView(value);
    }

    return (
        <div className="view my-site">
            <header className="view__header">
                <CurrentSite
                    icon={<SiteIcon number="5435" />}
                    title="Sporadic Thoughts"
                    url="sporadicthoughts.com"
                    switchSite={props.toggleSitesSheet}
                />
            </header>

            <main className="view__content">
                <SegmentedControl
                    options={[
                        { value: 'today', label: 'Today' },
                        { value: 'menu', label: 'Menu' },
                    ]}
                    value={mySiteView}
                    onChange={handleMySiteViewChange}
                />

                {mySiteView === 'today' && (
                    <MySiteToday />
                )}

                {mySiteView === 'menu' && (
                    <MySiteMenu />
                )}
            </main>
        </div>
    )
}