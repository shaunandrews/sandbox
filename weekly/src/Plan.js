import React, { useState } from "react";

// Components
import PlanTasks from "./PlanTasks";
import PlanGoals from "./PlanGoals";

// CSS
import "./Plan.scss";


function Plan() {
    const [planned, setPlanned] = useState(false);

    return (
        <div id="plan" className="mode">
            {!planned && (
                <>
                    <div className="mode-description">
                        <p>Lets figure out what you're doing this week.</p>
                    </div>

                    <PlanGoals />

                    <hr />

                    <PlanTasks />

                    <hr />

                    <button onClick={() => setPlanned(true)}>Start your week</button>
                </>
            )}

            {planned && (
                <>
                    <div className="mode-description">
                        <p>You've set your plan (3 days ago). Now it's time to get to work!</p>
                    </div>

                    <h2>Goal</h2>
                    <p>Boom</p>

                    <h2>Tasks</h2>
                    <ol>
                        <li>
                            <label>Task name goes here</label>
                        </li>
                        <li>
                            <label>Task name goes here</label>
                        </li>
                    </ol>
                    <button onClick={() => setPlanned(false)}>Edit your plan</button>
                </>
            )}
        </div>
    )
}

export default Plan;