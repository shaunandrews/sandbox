import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../Base/Icon';
import Stack from '../Base/Stack';
import MenuHeader from './MenuHeader';

function MenuGroup({ label, icon, open, children }) {
    const [isOpen, setIsOpen] = useState(open || false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <Stack
            className={
                classnames(
                    "menu-group",
                    { "open": isOpen },
                )
            }
            gap="none"
        >
            <MenuHeader
                label={label}
                icon={icon}
                onClick={toggleOpen}
            />

            {isOpen && (
                <Stack
                    className="menu-items"
                    gap="none"
                >
                    {children}
                </Stack>
            )}
        </Stack>
    )
}

export default MenuGroup;