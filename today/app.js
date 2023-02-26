const db = new Dexie("tasks");
db.version(1).stores({
    tasks: "++id, description, status, notes, created, updated",
});

function App() {
    const [isSecondaryViewDisplayed, setIsSecondaryViewDisplayed] = useState(false);

    function toggleSecondary() {
        setIsSecondaryViewDisplayed(!isSecondaryViewDisplayed);
    }

    return (
        <div id="app">
            <div className="toolbar app">
                <div className="today-heading">
                    <h1 className="app-title">Today.</h1>
                    <TodayNow />
                </div>
                <div className="app-actions">
                    <button onClick={toggleSecondary}>
                        <Icon name="sidebar" />
                    </button>
                    <button>
                        <Icon name="menu" />
                    </button>
                </div>
            </div>

            <div id="views">
                <div className="view primary">
                    <TasksList />
                    <hr />
                    <TasksList status="complete" />
                </div>

                {/* The Secondary view is hidden by default, but can be opened with the app-actions */}
                <div className={`view secondary ${isSecondaryViewDisplayed ? 'show' : 'hide'}`}>
                    <h2>Details</h2>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));