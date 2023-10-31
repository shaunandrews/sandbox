import React, { useState } from 'react';
import Stack from '../Base/Stack';
import classnames from 'classnames';

// CSS
import './ProductRow.scss';

function ProductRow({ onClick, isSelected }) {
    // const [isSelected, setIsSelected] = useState(false);

    // const handleClick = () => {
    //     setIsSelected(!isSelected);
    //     onClick();
    // }

    return (
        <Stack
            className={classnames(
                "product-row",
                { "is-selected": isSelected, }
            )}
            direction="horizontal"
            centered
            onClick={onClick}
        >
            <div className="product-image">
                <img src="https://via.placeholder.com/100" alt="Product" />
            </div>
            <Stack
                className="product-description"
                gap="x-small"
            >
                <div className="product-title">Puffy Shirt</div>
                <div className="product-variations">9 variations (color, size)</div>
            </Stack>
            <div className="product-price">$20.00</div>
            <div className="product-quantity">20</div>
            <div className="product-sku">1000293</div>
            <div className="product-category">Clothing</div>
        </Stack>
    )
}

export default ProductRow;