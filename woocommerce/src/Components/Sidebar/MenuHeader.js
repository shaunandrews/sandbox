import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../Base/Icon';
import Stack from '../Base/Stack';

function MenuHeader({ label, icon, onClick }) {
    return (
        <Stack
            direction="horizontal"
            centered={true}
            className="menu-header"
            onClick={onClick}
        >
            {icon &&
                <Icon
                    name={icon}
                    size="default"
                    className="menu-header__icon"
                />
            }
            <h2 className="menu-header__label">{label}</h2>
            <Icon
                name="chevron-down"
                size="small"
                className="menu-header__arrow"
            />
        </Stack>
    )
}

export default MenuHeader;