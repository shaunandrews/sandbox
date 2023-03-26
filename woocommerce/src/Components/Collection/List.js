import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Stack from '../Base/Stack';

// Simulated Data
import products from '../../Data/Products';

// CSS
import './List.scss';

// Default props
ListItem.defaultProps = {
    status: 'In-stock',
};

function ListItem({
    item,
    isSelected,
    onClick,
}) {
    const variations = item.variations ? item.variations.length : 0;

    return (
        <Stack
            direction='horizontal'
            className={
                classnames(
                    "wp-list__item",
                    { "is-selected": isSelected },
                )
            }
            centered
            onClick={onClick}
        >
            {/* <input
                className="wp-list__item__checkbox"
                type="checkbox"
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
            /> */}
            <label className="wp-list__item__label">{item.title}</label>
            {/* <div className="wp-list__item__description">{item.description}</div> */}
            {variations > 0 && (
                <div className="wp-list__item__variations">{variations} variations</div>
            )}
            <div className="wp-list__item__status">{item.status}</div>
            <ListItemPrice price={item.basePrice} />
            <div className="wp-list__item__image">
                <img src={item.thumbnail} />
            </div>
        </Stack>
    );
}

function ListItemPrice({ price }) {
    return (
        <div
            className="wp-list__item__price"
            onClick={() => console.log('price')}
        >
            {price}
        </div>
    );
}

function List({ mode }) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    function handleItemClick(index) {
        setSelectedItemIndex(index === selectedItemIndex ? null : index);
    };

    return (
        <Stack
            gap="x-small"
            className={
                classnames(
                    "wp-list",
                )
            }
        >
            {products.map((product, index) => (
                <ListItem
                    key={index}
                    item={product}
                    isSelected={selectedItemIndex === index}
                    onClick={() => handleItemClick(index)} />
            ))}
        </Stack>
    );
}

export default List;