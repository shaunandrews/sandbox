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
    const [notificationView, setNotificationView] = useState('all');

    function handleNotificationViewChange(value) {
        setNotificationView(value);
    }

    return (
        <div className="view notifications">
            <header className="view__header">
                {/* <h1>Notifications</h1> */}
                <select>
                    <option>All</option>
                    <option>Unread</option>
                    <option>Comments</option>
                    <option>Follows</option>
                    <option>Likes</option>
                </select>

                <button>Options</button>
                <button>Mark all read</button>

                {/* <nav className="tabs">
                    <button className="active">All</button>
                    <button>Unread</button>
                    <button>Comments</button>
                    <button>Follows</button>
                    <button>Likes</button>
                </nav> */}
                {/* <SegmentedControl
                    options={[
                        { value: 'all', label: 'All' },
                        { value: 'unread', label: 'Unread' },
                        { value: 'comments', label: 'Comments' },
                        { value: 'follows', label: 'Follows' },
                        { value: 'likes', label: 'Likes' },
                    ]}
                    value="all"
                    onChange={handleNotificationViewChange}
                /> */}
            </header>
            <main className="view__content">
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