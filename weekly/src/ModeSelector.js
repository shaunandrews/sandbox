import React, { useState, useEffect } from "react";
import classnames from "classnames";

// CSS
import "./ModeSelector.scss";

const ModeSelector = ({ options, selectedOption, setSelectedOption }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setHasScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={
            classnames(
                "mode-selector",
                {
                    "has-scrolled": hasScrolled,
                }
            )
        }>
            {
                options.map((option) => (
                    <div
                        key={option}
                        className={
                            classnames(
                                "mode-selector-button",
                                {
                                    "selected": selectedOption === option,
                                }
                            )
                        }
                        onClick={() => handleClick(option)}
                    >
                        <label>{option}</label>
                    </div>
                ))
            }
            < div
                className={
                    classnames(
                        "mode-selector-indicator",
                        {
                            "plan": selectedOption === "plan",
                            "work": selectedOption === "work",
                            "review": selectedOption === "review",
                        }
                    )
                }
            />
        </div >
    );
}

export default ModeSelector;