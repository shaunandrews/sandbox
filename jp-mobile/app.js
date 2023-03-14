const { useState, useEffect } = React

function TabBar({ currentTab, setCurrentTab }) {
    return (
        <footer className="tab-bar">
            <Tab
                id="tab-home"
                label="My Site"
                icon="home"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-home')}
            />
            <Tab
                id="tab-reader"
                label="Reader"
                icon="book"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-reader')}
            />
            <Tab
                id="tab-notifications"
                label="Notifications"
                icon="bell"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-notifications')}
            />
            <Tab
                id="tab-account"
                label="Account"
                icon="vcard"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-account')}
            />
        </footer>
    );

}

function Tab(props) {
    const isActive = props.id === props.activeTab;

    return (
        <div
            className={`tab ${isActive ? 'active' : ''}`}
            onClick={() => props.onTabClick(props.id)}
        >
            <Icon name={props.icon} />
            <label>{props.label}</label>
        </div>
    );
}

function SegmentedControl(props) {
    return (
        <div className="segmented-control">
            {props.options.map((option) => (
                <div
                    key={option.value}
                    className={`segment ${props.value === option.value ? 'active' : ''}`}
                    onClick={() => props.onChange(option.value)}
                >
                    {option.label}
                </div>
            ))}
        </div>
    );
}

function Scrim(props) {
    const className = `scrim ${props.visible ? 'is-visible' : 'is-hidden'}`;

    return (
        <div
            className={className}
            onClick={props.onClick}
        />
    );
}

function View(props) {
    return (
        <div className={`view ${props.className}`}>
            {props.children}
        </div>
    );
}

function SiteIcon(props) {
    return (
        <img src={`https://loremflickr.com/100/100/?lock=${props.number}`} alt="Site Icon" />
    );
}

function CurrentSite(props) {
    return (
        <div
            className="current-site"
            onClick={props.switchSite}
        >
            <Site
                icon={props.icon}
                title={props.title}
                url={props.url}
                isCurrent={true}
            />
        </div>
    );
}

function Site(props) {
    return (
        <div className="site">
            <div className="site-icon">
                {props.icon}
            </div>
            <div className="site-details">
                <div className="site-title">
                    <h1>{props.title}</h1>
                    {props.isCurrent && <Icon name="chevron-down" />}
                </div>
                <p className="site-url">{props.url}</p>
            </div>
        </div>
    );
}

function SitesList() {
    return (
        <div className="sites-list">
            <div className="active">
                <Site
                    icon={<SiteIcon number="5435" />}
                    title="Sporadic Thoughts"
                    url="sporadicthoughts.com"
                />
                <div className="active-actions">
                    <button className="primary">Visit</button>
                    <button>Settings</button>
                </div>
            </div>
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
            {/* Button to add a new site */}
            <div className="add-site">
                <Icon name="add" />
                <label>
                    <strong>Add a site</strong>
                    <small>Create a new site or add an existing site.</small>
                </label>
            </div>
        </div>
    );
}

function Sheet(props) {
    const className = `sheet ${props.visible ? 'is-visible' : 'is-hidden'}`;

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

function ContextMenu(props) {
    const className = `context-menu ${props.visible ? 'is-visible' : 'is-hidden'}`;

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

function AccountView(props) {
    return (
        <div className="view account">
            <main className="view__content">
                <div className="account-header">
                    <img src="https://loremflickr.com/100/100/?lock=1234" alt="User Avatar" />
                    <h1>Shaun Andrews</h1>
                    <p>@shaunandrews</p>
                </div>
                <ol className="table-view">
                    <li>My profile</li>
                    <li>Account settings</li>
                    <li>App settings</li>
                </ol>

                <ol className="table-view">
                    <li>Help &amp; support</li>
                    <li>Share Jetpack with a friend</li>
                    <li>About Jetpack for iOS</li>
                </ol>

                <h3>WordPress.com Account</h3>
                <button>Log Out</button>
            </main>
        </div>
    )
}

function Avatar({ size, rounded, alt }) {
    const className = `avatar ${rounded ? 'rounded' : ''}`;
    const src = `https://loremflickr.com/${size}/${size}/`;

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            height={size}
            width={size}
        />
    );
}

function App() {
    const [currentTab, setCurrentTab] = useState('tab-home');
    const [sitesSheet, setSitesSheet] = useState(false);

    function toggleSitesSheet() {
        setSitesSheet(!sitesSheet);
    }

    return (
        <div id="viewport">
            {currentTab === 'tab-home' && (
                <MySiteView
                    toggleSitesSheet={toggleSitesSheet}
                />
            )}

            {currentTab === 'tab-reader' && (
                <ReaderView />
            )}

            {currentTab === 'tab-notifications' && (
                <NotificationsView />
            )}

            {currentTab === 'tab-account' && (
                <AccountView />
            )}

            <TabBar
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            <Scrim
                visible={sitesSheet}
                onClick={toggleSitesSheet}
            />

            <Sheet visible={sitesSheet}>
                <SitesList />
            </Sheet>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));