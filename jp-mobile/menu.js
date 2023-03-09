DropdownMenu.defaultProps = {
    showCurrent: false,
    showChevron: true,
    showLabel: true,
};

function DropdownMenu({
    name,
    icon,
    showCurrent,
    showChevron,
    showLabel,
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
        <div className="dropdown-menu">
            <div className="dropdown-menu__button" onClick={handleMenuButtonClick}>
                {icon && (
                    <Icon name={icon} />
                )}
                {showLabel && (
                    <label>{showCurrent ? value : name}</label>
                )}
                {showChevron && (
                    <Icon name="chevron-down" />
                )}
            </div>
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