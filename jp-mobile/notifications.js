function Notification(props) {
    return (
        <div className="notification">
            {props.unread && (
                <div className="unread-indicator" />
            )}
            <img src="https://loremflickr.com/80/80/" alt="User Avatar" />
            <div className="notification__content">
                <h4><strong>Bill Bradski</strong> commented on <strong>Your Post Title</strong></h4>
                <p>I love this post! I'm going to share it with my friends.</p>
            </div>
        </div>
    )
}

function NotificationsView() {
    const [currentSection, setCurrentSection] = useState('All notifications');

    function handleNotificationViewChange(value) {
        setNotificationView(value);
    }

    return (
        <div className="view notifications">
            <header className="view__header toolbar">
                <SectionHeadingMenu
                    currentSection={currentSection}
                    onChange={setCurrentSection}
                    sections={[
                        { label: 'All notifications', icon: 'bell' },
                        { label: 'Comments', icon: 'comment' },
                        { label: 'Likes', icon: 'star' },
                        { label: 'Follows', icon: 'check-square' },
                    ]}
                />

                <div className="toolbar-group">
                    <button className="icon-only"><Icon name="check-all" /></button>
                    <button className="icon-only"><Icon name="menu" /></button>
                </div>
            </header>
            <main className="view__content">
                <SegmentedControl
                    options={[
                        { value: 'unread', label: 'Unread' },
                        { value: 'read', label: 'Read' },
                    ]}
                    value="unread"
                // onChange={setCurrentType}
                />

                <div className="notifications-list">
                    <h3>Today</h3>
                    <Notification
                        unread={true}
                    />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <h3>Yesterday</h3>
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                </div>
            </main>
        </div>
    )
}