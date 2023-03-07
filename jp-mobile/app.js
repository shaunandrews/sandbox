const { useState } = React

function TabBar({ currentTab, setCurrentTab }) {
    return (
        <footer className="tab-bar">
            <Tab
                id="tab-home"
                label="My Site"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-home')}
            />
            <Tab
                id="tab-reader"
                label="Reader"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-reader')}
            />
            <Tab
                id="tab-notifications"
                label="Notifications"
                activeTab={currentTab}
                onTabClick={() => setCurrentTab('tab-notifications')}
            />
            <Tab
                id="tab-account"
                label="Account"
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
            <Icon />
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

function Card({ children, className }) {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}

function CardHeader(props) {
    return (
        <header className="card-header">
            <h3>{props.title}</h3>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <span className="visually-hidden">Options</span>
            </button>
        </header>
    )
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
                <h1 className="site-title">{props.title}</h1>
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
            <header className="view__header">
                <h1>Account</h1>
            </header>
            <main className="view__content">
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