function TaskDetails({ task, onUpdateTask }) {
    const [newNote, setNewNote] = useState('');

    function saveTaskNotes() {
        onUpdateTask(task.id, {
            notes: task.notes + newNote
        });
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
                <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <button onClick={saveTaskNotes}>Add note</button>
                <button onClick={clearAllNotes}>Clear all notes</button>
            </div>

            {/* <p>{task.created}</p>
            <p>{task.updated}</p>
            <p>{task.status}</p> */}
        </div>
    );
}