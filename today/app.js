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

    function addTask(task) {
        // Add the task to the database
        db.tasks.add(task);

        // Add the task to the state variable
        setTasks([...tasks, task]);
    }

    function completeTask(id) {
        // Find the task with the specified ID
        const taskIndex = tasks.findIndex((task) => task.id === id);

        // Create a new copy of the tasks array
        const updatedTasks = [...tasks];

        // Update the status of the task at the specified index
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            status: "complete",
        };

        // Update the task in the database
        db.tasks.update(id, { status: "complete" });

        // Update the task in the state variable
        setTasks(updatedTasks);
    }

    function incompleteTask(id) {
        // Find the task with the specified ID
        const taskIndex = tasks.findIndex((task) => task.id === id);

        // Create a new copy of the tasks array
        const updatedTasks = [...tasks];

        // Update the status of the task at the specified index
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            status: "incomplete",
        };

        // Update the task in the database
        db.tasks.update(id, { status: "incomplete" });

        // Update the task in the state variable
        setTasks(updatedTasks);
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
                    <TaskCreator
                        tasks={tasks}
                        setTasks={setTasks}
                        onAdd={addTask}
                    />

                    <TasksList
                        tasks={tasks}
                        onComplete={completeTask}
                        onIncomplete={incompleteTask}
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