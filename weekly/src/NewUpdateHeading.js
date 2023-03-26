import { useState, useEffect } from "react";

function UpdateHeading() {
    const [headingText, setHeadingText] = useState("Write a new update");

    useEffect(() => {
        const interval = setInterval(() => {
            const phrases = [
                "Whatcha up to?",
                "What's the haps?",
                "What's shakin'?",
                "What's the scoop?",
                "What mischief are you getting into?",
                "What's the dealio?",
                "What's the story, morning glory?",
                "What's the 411?",
                "What's on the agenda?",
                "What's up, buttercup?",
                "What's the plan, Stan?",
                "What's happenin', capt'n?",
                "What's the latest?",
                "What's happening now?",
                "Got news?",
                "What's the word?",
                "Spill the tea",
                "What's the buzz?",
                "Anything new?",
            ];
            const randomIndex = Math.floor(Math.random() * phrases.length);
            setHeadingText(phrases[randomIndex]);
        }, 5000);

        // clear the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="new-update-heading">{headingText}</h2>
    );
}

export default UpdateHeading;