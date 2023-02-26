function Task(props) {
    const { task, isSelected, onClick, onComplete, onDelete } = props;

    function completeTask() {
        // Call a function passed down through props to complete the task with this ID
        props.onComplete(props.id);
    }

    function deleteTask() {
        // Call a function passed down through props to delete the task with this ID
        props.onDelete(props.id);
    }

    return (
        <div className={isSelected ? 'task is-selected' : 'task'} onClick={onClick}>
            <div className="task-description">
                <h3>{props.description}</h3>
            </div>
            <div className="task-created">
                <h4>{props.created}</h4>
            </div>
            <div className="task-status">
                <p>{props.status}</p>
            </div>
            <div className="task-notes" dangerouslySetInnerHTML={{ __html: props.notes }} />
            <div className="task-actions">
                {/* Only show the button if props.status is 'incomplete' */}
                {props.status === 'incomplete' && (
                    <button onClick={completeTask}>
                        <Icon name="complete" />
                    </button>  
                )}
                {/* <button>
                    <Icon name="edit" />
                </button> */}
                <button onClick={deleteTask}>
                    <Icon name="delete" />
                </button>
            </div>
        </div>
    );
}