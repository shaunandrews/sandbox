function TasksList({ tasks, onComplete, onIncomplete, onDelete }) {

    function onTaskComplete(id) {
        // Call a function passed down through props to complete the task with this ID
        onComplete(id);
    }

    function onTaskIncomplete(id) {
        // Call a function passed down through props to complete the task with this ID
        onIncomplete(id);
    }

    function onTaskDelete(id) {
        // Call a function passed down through props to delete the task with this ID
        onDelete(id);
    }

    return (
        <div className="tasks-list">
            {/* Render a list of tasks */}
            <ol className="tasks">
                {tasks.map((task) => (
                    <li key={`li-${task.id}`}>
                        <Task
                            key={`task-${task.id}`}
                            id={task.id}
                            description={task.description}
                            status={task.status}
                            notes={task.notes}
                            created={task.created}
                            updated={task.updated}

                            // isSelected={task.id === selectedTaskId}
                            // onClick={() => selectTask(task.id)}
                            onComplete={onTaskComplete}
                            onIncomplete={onTaskIncomplete}
                            onDelete={onTaskDelete}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
}