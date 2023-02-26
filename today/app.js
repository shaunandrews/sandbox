const db = new Dexie("tasks");
db.version(1).stores({
    tasks: "++id, description, status, notes, created, updated",
});

function App() {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [isSecondaryViewDisplayed, setIsSecondaryViewDisplayed] = useState(false);

    useEffect(() => {
        // Fetch the tasks from the database
        db.tasks.toArray().then((data) => {
            setTasks(data);
        });

        // Add event listener to clear selected task when clicking outside of the task list
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function handleClickOutside(event) {
        if (!event.target.closest('.task')) {
            setSelectedTaskId(null);
        }
    }

    function toggleSecondary() {
        setIsSecondaryViewDisplayed(!isSecondaryViewDisplayed);
    }

    function completeTask(id) {
        // Find the task with the specified ID
        const task = tasks.find((task) => task.id === id);

        // Update the status of the task
        task.status = 'complete';

        // Update the task in the database
        db.tasks.update(id, task);

        // Update the task in the state variable
        setTasks([...tasks]);
    }

    function deleteTask(id) {
        // Filter out the task with the specified ID
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);

        // Also delete the task from the database
        db.tasks.delete(id);
    }

    return (
        <div id="app">
            <div className="toolbar app">
                <div className="today-heading">
                    <h1 className="app-title">Today.</h1>
                    <TodayNow />
                </div>
                {/* <div className="app-actions">
                    <button onClick={toggleSecondary}>
                        <Icon name="sidebar" />
                    </button>
                    <button>
                        <Icon name="menu" />
                    </button>
                </div> */}
            </div>

            <div id="views">
                <div className="view primary">
                    {/* Render a form to add new tasks */}
                    {/* <TaskCreator
                        tasks={tasks}
                        setTasks={setTasks}
                    /> */}

                    <TasksList
                        tasks={tasks}
                        onComplete={completeTask}
                        onDelete={deleteTask}
                    />
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