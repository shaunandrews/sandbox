import { useState } from "react";

function Review() {
    return (
        <div id="review" className="mode">
            <div className="mode-description">
                <p>Take a look at what you've done this week.</p>
            </div>

            <h3>Current goal</h3>
            <p>I'm wrapping up my work on the mobile team, and getting ready to switch to Woo, where I'll be helping to bring e-commerce into the WordPress Block Universe.</p>

            <h3>Updates</h3>
            <p>You published 8 updates this week.</p>
            <h4>Updates summary</h4>
            <p>You worked on a lot of things this week, including mobile blaze MVP, comment details to avoid accidental clicks, lots of team management, and more.</p>
            <button>View all updates</button>

            <h3>1 Task completed this week</h3>
            <ol>
                <li>
                    <label>Task name goes here</label>
                </li>
            </ol>

            <h3>2 Tasks remain open</h3>
            <ol>
                <li>
                    <label>Task name goes here</label>
                </li>
                <li>
                    <label>Task name goes here</label>
                </li>
            </ol>

            <button>Share your summary</button>
            <button>End your week</button>
        </div>
    );
}

export default Review;