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
    const [notificationView, setNotificationView] = useState('All Notifications');

    function handleNotificationViewChange(value) {
        setNotificationView(value);
    }

    return (
        <div className="view notifications">
            <header className="view__header toolbar">
                <DropdownMenu
                    name="Notifications"
                    showCurrent={true}
                    showChevron={true}
                    options={[
                        {
                            label: 'All',
                            value: 'All Notifications',
                        },
                        // {
                        //     label: 'Unread',
                        //     value: 'Unread',
                        // },
                        {
                            label: 'Comments',
                            value: 'Comments',
                        },
                        {
                            label: 'Follows',
                            value: 'Follows',
                        },
                        {
                            label: 'Likes',
                            value: 'Likes',
                        },
                    ]}
                    value={notificationView}
                    onChange={setNotificationView}
                />

                <div className="toolbar-group">
                    <button><Icon name="check-all" /></button>
                    <button><Icon name="menu" /></button>
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
            </main>
        </div>
    )
}