import React, { useEffect, useState } from "react";
import classnames from "classnames";

// Components
import UseSupabase from "./UseSupabase";

// CSS
import "./PlanTasks.scss";

function PlanTasks() {
    const { tasks, getTasks, updateTaskStatus, addTask, deleteTask } = UseSupabase();
    const [newTask, setNewTask] = useState("");
    const [selectedTask, setSelectedTask] = useState("");

    async function addNewTask() {
        addTask(newTask);
        getTasks();
        setNewTask("");
    }

    async function markTaskComplete(id) {
        updateTaskStatus(id, "complete");
        getTasks();
    }

    async function markTaskActive(id) {
        updateTaskStatus(id, "active");
        getTasks();
    }

    async function toggleTaskStatus(id) {
        const task = tasks.find((task) => task.id === id);
        if (task.status === "active") {
            markTaskComplete(id);
        } else {
            markTaskActive(id);
        }
    }

    // Hit return to add a new task
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            addNewTask();
        }
    }

    // put focus on new-task input
    function focusNewTaskInput() {
        document.querySelector(".new-task input").focus();
    }

    // Unselect a task when the user clicks outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (selectedTask && !event.target.closest(".tasks-list__task")) {
                setSelectedTask("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedTask]);

    return (
        <div className="group plan-tasks">
            {/* <h2>Tasks</h2> */}
            <p className="subtext">Break your goals down into smaller tasks. These are the things you'll be working on this week. When you publish your updates you can optionally choose to associate them with a task.</p>
            <ol className="tasks-list">
                <li
                    className="new-task"
                    onClick={focusNewTaskInput}
                >
                    <div className="task-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>

                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={newTask}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setNewTask(e.target.value)}
                    />

                    {newTask && (
                        <button className="primary" onClick={addNewTask}>Add</button>
                    )}
                </li>

                {tasks.map((task) => (
                    <li
                        key={task.id}
                        onClick={() => setSelectedTask(task.id)}
                        className={
                            classnames("tasks-list__task", {
                                "is-selected": selectedTask === task.id,
                                "is-complete": task.status === "complete",
                            })
                        }
                    >
                        <TaskIcon
                            status={task.status}
                            onClick={() => toggleTaskStatus(task.id)}
                        />

                        <label className="task-description">{task.description}</label>
                        <div className="task-actions">
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="scary"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

function TaskIcon({ status, onClick }) {
    return (
        <div
            className="task-icon"
            onClick={onClick}
        >
            {status === "complete" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                </svg>
            )}

            {status === "active" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
            )}
        </div>
    )
}

export default PlanTasks;