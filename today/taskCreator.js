function TaskCreator({ onAdd }) {
    const [newTask, setNewTask] = useState('');
    const [isFocused, setIsFocused] = useState(false);
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

    function setFocus() {
        // Set the focus to the input field
        document.querySelector('.task-creator input').focus();

        // Set the focus state to true
        setIsFocused(true);
    }

    function unsetFocus() {
        // Set the focus state to false
        setIsFocused(false);
    }

    return (
        // a form element with a class of task-creator and the focus state
        <form
            className={`task-creator ${isFocused ? 'is-focused' : ''}`}
            onClick={setFocus}
            onBlur={unsetFocus}
        >
            <Icon name="incomplete" />
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