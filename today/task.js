function Task(props) {
    const { onComplete, onIncomplete, onDelete } = props;

    function completeTask() {
        // Call a function passed down through props to complete the task with this ID
        onComplete(props.id);
    }

    function incompleteTask() {
        // Call a function passed down through props to complete the task with this ID
        onIncomplete(props.id);
    }

    function deleteTask() {
        // Call a function passed down through props to delete the task with this ID
        onDelete(props.id);
    }

    return (
        <div className={`task ${props.status}`} tabindex="0">
            <div className="task-status">
                {props.status === 'incomplete' && (
                    <button onClick={completeTask}>
                        <Icon name="incomplete" />
                    </button>
                )}
                {props.status === 'complete' && (
                    <button onClick={incompleteTask}>
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