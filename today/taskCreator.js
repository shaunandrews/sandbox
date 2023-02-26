function TaskCreator({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('');
    const isInputEmpty = newTask.trim() === '';

    function addTask() {
        const task = {
            description: newTask,
            created: new Date().toLocaleString(),
            status: 'incomplete'
        };

        // Add the new task to the state variable and also save it to the database
        setTasks([...tasks, task]);
        db.tasks.add(task);

        // Clear the input field
        setNewTask('');
    }

    return (
        <form className="task-creator" onSubmit={addTask}>
            <input
                type="text"
                placeholder="Add to your day..."
                value={newTask}
                onFocus={() => selectTask(null)}
            />
            <button onClick={addTask} disabled={isInputEmpty}>Add</button>
        </form>
    )
};