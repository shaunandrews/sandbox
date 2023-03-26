import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Stack from './Base/Stack';

// CSS
import './List.scss';

// Default props
ListItem.defaultProps = {
    status: 'In-stock',
};

function ListItem({
    label,
    status,
}) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Stack
            direction='horizontal'
            className={
                classnames(
                    "wp-list__item",
                    { "is-selected": isSelected },
                )
            }
            // onClick={() => setIsSelected(!isSelected)}
            centered
        >
            <input
                className="wp-list__item__checkbox"
                type="checkbox"
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
            />
            <label className="wp-list__item__label">{label}</label>
            <div className="wp-list__item__variation">Size: Large</div>
            <div className="wp-list__item__status">{status}</div>
            <div className="wp-list__item__price">$10.00</div>
            {/* <div className="wp-list__item__categories">Music, Live, 2023</div> */}
            {/* <div className="wp-list__item__created-at">2021-01-01 at 8:29 PM</div> */}
            <div className="wp-list__item__image">
                <img src="https://picsum.photos/80/80" />
            </div>
        </Stack>
    );
}

function List({ mode }) {

    return (
        <Stack
            gap="x-small"
            className={
                classnames(
                    "wp-list",
                )
            }
        >
            <ListItem label="Item 1" isSelected />
            <ListItem label="Item 2" />
            <ListItem label="Item 3" status="Out of stock" />
            <ListItem label="Item 4" />
            <ListItem label="Item 5" />
            <ListItem label="Item 6" />
        </Stack>
    );
}

export default List;