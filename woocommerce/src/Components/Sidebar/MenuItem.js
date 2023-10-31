import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../Base/Icon';
import Stack from '../Base/Stack';

// Default props
FavoriteToggle.defaultProps = {
    isFavorite: false,
};

function FavoriteToggle({ isFavorite: initialFavorite }) {
    const [isFavorite, setIsFavorite] = useState(initialFavorite || false);

    return (
        <div
            className="menu-item__favorite"
            onClick={() => setIsFavorite(!isFavorite)}
        >
            {isFavorite && (
                <Icon
                    name="star-filled"
                    size="small"
                    className="favorite__on"
                />
            )}
            {!isFavorite && (
                <Icon
                    name="star-empty"
                    size="small"
                    className="favorite__off"
                />
            )}
        </div>
    )
}

function MenuItem({
    label,
    icon,
    onClick,
    isSelected,
    isFavorite,
}) {
    return (
        <Stack
            direction='horizontal'
            centered
            className={
                classnames(
                    "menu-item",
                    { "selected": isSelected },
                    { "favorite": isFavorite },
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
            <FavoriteToggle
                isFavorite={isFavorite}
            />
        </Stack>
    )
}

export default MenuItem;