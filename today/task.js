function Task(props) {
    const {
        onComplete,
        onIncomplete,
        onDelete,
        onSelect,
        isSelected,
    } = props;

    function completeTask(event) {
        // Call a function passed down through props to complete the task with this ID
        onComplete(props.id);

        // Prevent the event from bubbling up to the task div
        event.stopPropagation();
    }

    function incompleteTask(event) {
        // Call a function passed down through props to complete the task with this ID
        onIncomplete(props.id);

        // Prevent the event from bubbling up to the task div
        event.stopPropagation();
    }

    function deleteTask() {
        // Call a function passed down through props to delete the task with this ID
        onDelete(props.id);
    }

    function selectTask() {
        // Call a function passed down through props to select the task with this ID
        onSelect(props);
    }

    return (
        <div
            className={`
                task
                ${props.status}
                ${isSelected ? 'is-selected' : ''}
            `}
            onClick={selectTask}
        >
            {/* Show if the task is selected */}
            {props.selected && (
                <p>selected</p>
            )}

            <div className="task-status">
                {props.status === 'incomplete' && (
                    <button onClick={(event) => completeTask(event)}>
                        <Icon name="incomplete" />
                    </button>
                )}
                {props.status === 'complete' && (
                    <button onClick={(event) => incompleteTask(event)}>
                        <Icon name="complete" />
                    </button>
                )}
            </div>
            <h3 className="task-description">{props.description}</h3>
            <h4 className="task-created">{props.created}</h4>
            <div className="task-notes" dangerouslySetInnerHTML={{ __html: props.notes }} />

            <div className="task-actions">
                <button onClick={deleteTask}>
                    <Icon name="delete" />
                </button>
            </div>
        </div>
    );
}