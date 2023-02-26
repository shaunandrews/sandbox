TasksList.defaultProps = {
    status: 'incomplete'
};

function TasksList({ status }) {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    useEffect(() => {
        // Fetch tasks from the database and set the state variable
        db.tasks.where('status').equals(status).toArray().then((data) => setTasks(data));

        // Add event listener to clear selected task when clicking outside of the task list
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [status]);

    function handleClickOutside(event) {
        if (!event.target.closest('.task')) {
            setSelectedTaskId(null);
        }
    }

    function selectTask(id) {
        setSelectedTaskId(id);
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
        <div className="tasks-list">
            {/* Render a form to add new tasks */}
            <TaskCreator
                tasks={tasks}
                setTasks={setTasks}
            />

            {/* Render a list of tasks */}
            <ol className="tasks">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task
                            key={task.id}
                            id={task.id}
                            description={task.description}
                            status={task.status}
                            notes={task.notes}
                            created={task.created}
                            updated={task.updated}
                            isSelected={task.id === selectedTaskId}
                            onClick={() => selectTask(task.id)}
                            onComplete={completeTask}
                            onDelete={deleteTask}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
}