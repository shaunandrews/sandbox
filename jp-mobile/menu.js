const MenuButton = ({ children }) => <div className="menu-button">{children}</div>;

const MenuContainer = ({ visible, position, top, left, children }) => {
    return (
        <div className="menu-container">{children}</div>
    );
};

const MenuOption = ({ label, selected, icon, onSelect }) => (
    <div className="menu-option" onClick={onSelect}>
        {icon}
        <span>{label}</span>
    </div>
);

const Menu = ({ children }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuButtonClick = (e) => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="menu">
            <div onClick={handleMenuButtonClick}>
                {children[0]}
            </div>
            {menuVisible && (
                <>
                    {children[1]}
                </>
            )}
        </div>
    );
};