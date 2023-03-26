import React, { useState, useEffect } from "react";

// Components
import UseSupabase from "./UseSupabase";
import NewUpdate from "./NewUpdate";
import Update from "./Update";

function Work() {
    // Supabase Hooks
    const {
        updates,
        getUpdates,
        deleteUpdate,
        tasks,
    } = UseSupabase();

    // Helper function to determine if there are any updates
    function hasUpdates() {
        return updates.length > 0;
    }

    const [selectedUpdate, setSelectedUdpated] = useState(false);

    // Unselect an update when the user clicks outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (selectedUpdate && !event.target.closest(".updates-list")) {
                setSelectedUdpated(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedUpdate]);

    return (
        <div id="work" className="mode">
            <div className="mode-description">
                <p>Publish updates as you work.</p>
            </div>

            <NewUpdate
                refreshUpdates={getUpdates}
                tasks={tasks}
            />

            <div className="updates-list">
                {hasUpdates() && (
                    updates.map((update) => (
                        <Update
                            key={update.id}
                            selectedUpdate={selectedUpdate}
                            setSelectedUpdate={setSelectedUdpated}
                            update={update}
                            deleteUpdate={deleteUpdate}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Work;