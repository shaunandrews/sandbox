import React, { useState, useEffect } from "react";
import classnames from "classnames";

// Components
import UseSupabase from "./UseSupabase";
import VisualImage from "./VisualImage";

// CSS
import "./NewUpdate.scss";

const NewUpdate = ({ refreshUpdates, tasks }) => {
    // Supeabase hooks
    const { uploadVisual, addUpdate } = UseSupabase();

    // State
    const [expanded, setExpanded] = useState(true);
    const [filePath, setFilePath] = useState(null);
    const [description, setDescription] = useState('');

    // Trigger the file input
    function triggerFileInput() {
        document.querySelector(".new-update-file").click();
    }

    // Upload a file to Supabase
    async function uploadFile(event) {
        const newlyUploadedFilePath = await uploadVisual(event.target.files[0]);
        setFilePath(newlyUploadedFilePath);
        // setFile(newlyUploadedFilePath);
    }

    // Publish a new update
    async function publishNewUpdate() {
        addUpdate(description, filePath);
        refreshUpdates();
        setFilePath(null);
        setDescription('');
    }

    function selectNewUpdate() {
        document.querySelector(".new-update-description").focus();
    }

    return (
        <div
            className={
                classnames(
                    "new-update",
                    {
                        "expanded": expanded,
                    }
                )
            }
            onClick={selectNewUpdate}
        >
            <div className="new-update-icon">
                {/* Journal <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

            <div className="new-update-content">
                <textarea
                    rows="1"
                    className="new-update-description"
                    placeholder="Write an update..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {filePath && (
                    <div className="new-update-visual">
                        <VisualImage
                            visualImage={filePath}
                        />
                    </div>
                )}
            </div>



            {/* <label>Associate with a task</label>
                <select>
                    {tasks.map((task) => (
                        <option
                            key={task.id}
                            value={task.id}
                        >
                            {task.description}
                        </option>
                    ))}
                </select> */}

            {description && (
                <div className="new-update-actions">
                    {!filePath && (
                        <div className="new-update-add-visual">
                            <button
                                className="icon-only"
                                onClick={triggerFileInput}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                </svg>
                                <label>Add an image</label>
                            </button>

                            <input
                                className="new-update-file"
                                type="file"
                                onChange={(event) => uploadFile(event)}
                            />
                        </div>
                    )}

                    <button
                        className="primary"
                        onClick={publishNewUpdate}
                    >
                        Publish
                    </button>
                </div>
            )}

            {/* <div className="group expanded-only">
                <input type="checkbox" />
                <label>Mark as complete</label>
            </div> */}

            {/* <div className="group expanded-only">
                <h2>Goal reminder</h2>
                <p>I'm wrapping up my work on the mobile team, and getting ready to switch to Woo, where I'll be helping to bring e-commerce into the WordPress Block Universe.</p>
            </div> */}
        </div>
    )
}

export default NewUpdate;