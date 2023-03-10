DropdownMenu.defaultProps = {
    showCurrent: false,
    showChevron: true,
    showLabel: true,
    position: 'left',
};

function DropdownMenu({
    name,
    icon,
    showCurrent,
    showChevron,
    showLabel,
    position,
    options,
    value,
    onChange
}) {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuButtonClick = (e) => {
        setMenuVisible(!menuVisible);
    };

    const handleMenuOptionClick = (value) => {
        setMenuVisible(false);
        onChange(value);
    };

    return (
        <div
            className={`dropdown-menu position-${position}`}
        >
            <button
                className={`dropdown-menu__button ${icon && !showLabel ? 'icon-only' : ''}`}
                onClick={handleMenuButtonClick}
            >
                {icon && (
                    <Icon name={icon} />
                )}
                {showLabel && (
                    <label>{showCurrent ? value : name}</label>
                )}
                {showChevron && (
                    <Icon name="chevron-down" />
                )}
            </button>
            {menuVisible && (
                <div className="dropdown-menu__options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`dropdown-menu__option ${value === option.value ? 'active' : ''}`}
                            onClick={() => handleMenuOptionClick(option.value)}
                        >
                            {value === option.value && (
                                <Icon name="check" />
                            )}
                            <label>{option.label}</label>
                            {option.icon && (
                                <Icon name={option.icon} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
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
                <h1>{currentSection}</h1>
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