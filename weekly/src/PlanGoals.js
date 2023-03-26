import React, { useState } from "react";

// Components
import UseSupabase from "./UseSupabase";

// CSS
import "./PlanGoals.scss";

function PlanGoals() {
    const { goals, addGoal, getGoals, setGoalStatus, deleteGoal } = UseSupabase();

    const [newGoal, setNewGoal] = useState("");

    async function addNewGoal() {
        addGoal(newGoal);
        setNewGoal("");
    }

    async function archiveGoal(id) {
        setGoalStatus(id, "archived");
        getGoals();
    }

    function focusNewGoalTextarea() {
        document.querySelector(".new-goal textarea").focus();
    }

    // Get latest goal with status active
    const latestGoal = goals.find((goal) => goal.status === "active");

    // Get all archived goals
    const archivedGoals = goals.filter((goal) => goal.status === "archived");

    return (
        <div className="group plan-goal">
            {/* <h2>Goal</h2> */}

            {!latestGoal && (
                <div
                    className="new-goal"
                    onClick={focusNewGoalTextarea}
                >
                    <div className="new-goal-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                    </div>

                    <textarea
                        row="1"
                        className="new-goal__textarea"
                        placeholder="What do you want to accomplish this week?"
                        value={newGoal}
                        onChange={(e) => setNewGoal(e.target.value)}
                    />

                    {/* Only show the button if the textarea has a value */}
                    {newGoal && (
                        <button className="primary new-goal__button" onClick={addNewGoal}>Add</button>
                    )}
                </div>
            )}

            {latestGoal && (
                <div className="latest-goal">
                    {/* <h3 className="latest-goal__heading">Your goal</h3> */}

                    <p className="latest-goal__description">{latestGoal.description}</p>

                    <div className="latest-goal__actions">
                        <button onClick={() => archiveGoal(latestGoal.id)} >Archive</button>
                        <button className="scary" onClick={() => deleteGoal(latestGoal.id)} >Delete</button>
                    </div>
                </div>
            )}

            <p className="subtext">Set a straight-forward goal to help motivate you and ensure you're working on the right things.</p>

            {/* {archivedGoals.length > 0 && (
                <div className="archived-goals">
                    <h3>Previous goals</h3>
                    {archivedGoals.map((goal) => (
                        <div
                            key={goal.id}
                            className="archived-goal"
                        >
                            <label className="goal-title">{goal.description}</label>
                            <button onClick={() => deleteGoal(goal.id)} >Delete</button>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    )
}

export default PlanGoals;