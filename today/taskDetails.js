function TaskDetails({ task, onUpdateTask }) {
    const [newNote, setNewNote] = useState('');

    function saveTaskNotes() {
        onUpdateTask(task.id, {
            notes: task.notes + "\n---\n\n" + newNote
        });
        setNewNote('');
    }

    function clearAllNotes() {
        onUpdateTask(task.id, {
            notes: ""
        });
    }

    return (
        <div className="task-details">
            <div className="task-notes">
                <p>{task.notes}</p>
            </div>

            <div className="note-creator">
                <ExpandingTextarea
                    value={newNote}
                    onChange={(value) => setNewNote(value)}
                    minHeight={"1em"}
                    maxHeight={"300pm"}
                />
                <button onClick={saveTaskNotes}>Add note</button>
                {/* <button onClick={clearAllNotes}>Clear all notes</button> */}
            </div>

            {/* <p>{task.created}</p>
            <p>{task.updated}</p>
            <p>{task.status}</p> */}
        </div>
    );
}