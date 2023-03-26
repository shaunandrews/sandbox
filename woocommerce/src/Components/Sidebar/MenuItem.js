import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../Base/Icon';
import Stack from '../Base/Stack';

function MenuItem({
    label,
    icon,
    onClick,
    isSelected,
}) {
    return (
        <Stack
            direction='horizontal'
            centered
            className={
                classnames(
                    "menu-item",
                    { "selected": isSelected },
                )}
            onClick={onClick}
        >
            <label className="menu-item__label">{label}</label>
            {icon &&
                <Icon
                    name={icon}
                    size="small"
                    className="menu-item__icon"
                />
            }
        </Stack>
    )
}

export default MenuItem;