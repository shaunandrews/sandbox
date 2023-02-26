function TaskCreator({ onAdd }) {
    const [newTask, setNewTask] = useState('');
    const isInputEmpty = newTask.trim() === '';

    function addTask() {
        const task = {
            description: newTask,
            created: new Date().toLocaleString(),
            status: 'incomplete'
        };

        // Call a function passed down through props to add the new task
        onAdd(task);

        // Clear the input field
        setNewTask('')
    }

    return (
        <form className="task-creator">
            <input
                type="text"
                placeholder="Add to your day..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask} disabled={isInputEmpty}>Add</button>
        </form>
    )
};