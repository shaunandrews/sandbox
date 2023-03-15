function MenuItem({ type, label, onClick, setIsMenuVisible, isScary }) {
    const handleClick = (e) => {
        e.stopPropagation();

        if (onClick) {
            onClick();
        }

        setIsMenuVisible(false);
    };

    return (
        <>
            {type === "option" && (
                <div
                    className={`menu-item ${isScary ? "is-scary" : ""}`}
                    onClick={handleClick}
                >
                    <label>{label}</label>
                </div>
            )}
            {type === "divider" && <hr />}
        </>
    );
}

function OptionsMenu({
    items, className,
}) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isMenuVisible && !event.target.closest('.options-menu')) {
                setIsMenuVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuVisible]);

    function toggleMenu(event) {
        event.stopPropagation();
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <div className={`options-menu ${className}`}>
            <button
                className={`icon-only ${isMenuVisible ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <Icon name="menu" />
            </button>
            {isMenuVisible && (
                <div className="menu">
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            type={item.type}
                            label={item.label}
                            onClick={item.onClick}
                            setIsMenuVisible={setIsMenuVisible}
                            isScary={item.isScary}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

function SectionHeadingMenu({
    currentSection,
    onChange,
    sections,
}) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible);
    }

    function selectOption(section) {
        setIsMenuVisible(false);
        onChange(section);
    }

    return (
        <div className="section-heading-menu">
            <button onClick={toggleMenu}>
                <h1 className="section-heading">{currentSection}</h1>
                <Icon name="chevron-down" />
            </button>

            {isMenuVisible && (
                <div className="section-heading-menu__options">
                    {sections.map((section) => (
                        <div
                            key={section.label}
                            className={`section-heading-menu__option ${currentSection === section.label ? 'active' : ''}`}
                            onClick={() => selectOption(section.label)}
                        >
                            {section.icon && (
                                <Icon name={section.icon} />
                            )}
                            <label>{section.label}</label>
                            {currentSection === section.label && (
                                <Icon name="check" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}