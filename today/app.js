const db = new Dexie("tasks");
db.version(1).stores({
    tasks: "++id, description, status, notes, created, updated",
});


function App() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isSecondaryViewDisplayed, setIsSecondaryViewDisplayed] = useState(true);

    useEffect(() => {
        // Fetch the tasks from the database
        db.tasks.toArray().then((data) => {
            setTasks(data);
            // setSelectedTask(data[0]);
        });

        // Add event listener to clear selected task when clicking outside of the task list
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectedTask]);

    function handleClickOutside(event) {
        const isTaskElement = event.target.closest('.task');
        const isSecondaryViewElement = event.target.closest('.view.secondary');

        if (!isTaskElement && !isSecondaryViewElement) {
            setSelectedTask(null);
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

    function updateTaskStatus(id, status) {
        // Find the task with the specified ID
        const taskIndex = tasks.findIndex((task) => task.id === id);

        // Create a new copy of the tasks array
        const updatedTasks = [...tasks];

        // Update the status of the task at the specified index
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            status,
        };

        // Update the task in the database
        db.tasks.update(id, { status });

        // Update the task in the state variable
        setTasks(updatedTasks);

        // Update the selected task if it has the same ID
        if (selectedTask && selectedTask.id === id) {
            setSelectedTask({
                ...selectedTask,
                status,
            });
        }
    }

    function updateTask(id, updates) {
        const taskIndex = tasks.findIndex((task) => task.id === id);
        const updatedTasks = [...tasks];

        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            ...updates,
            updated: new Date().toLocaleString(),
        };

        setTasks(updatedTasks);
        db.tasks.update(id, updates);

        if (selectedTask && selectedTask.id === id) {
            setSelectedTask({
                ...selectedTask,
                ...updates,
                updated: new Date().toLocaleString(),
            });
        }
    }

    function deleteTask(id) {
        // Filter out the task with the specified ID
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);

        // Also delete the task from the database
        db.tasks.delete(id);
    }

    function selectTask(task) {
        setSelectedTask(task);
        setIsSecondaryViewDisplayed(true);
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
                    <TasksList
                        tasks={tasks}
                        selectedTask={selectedTask}
                        onComplete={(id) => updateTaskStatus(id, 'complete')}
                        onIncomplete={(id) => updateTaskStatus(id, 'incomplete')}
                        onDelete={deleteTask}
                        onSelect={selectTask}
                        updateTask={updateTask}
                    />
                    <TaskCreator
                        tasks={tasks}
                        setTasks={setTasks}
                        onAdd={addTask}
                    />
                </div>

                {/* The Secondary view is hidden by default, but can be opened with the app-actions */}
                {/* <div className={`view secondary ${isSecondaryViewDisplayed ? 'show' : 'hide'}`}>
                    {selectedTask &&
                        <TaskDetails
                            task={selectedTask}
                            onUpdateTask={(id, updates) => updateTask(id, updates)}
                        />
                    }
                </div> */}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));