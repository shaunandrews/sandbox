import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Stack from '../Base/Stack';
import Icon from '../Base/Icon';
import List from './List';

// CSS
import './Collection.scss';

// default props
Collection.defaultProps = {
    mode: 'default',
    title: 'Collection',
};

function Collection({
    mode,
    title,
    setSidebarMode,
    setCollectionMode,
    setCanvasMode,
    setCanvasScreenName,
}) {
    return (
        <Stack
            className={
                classnames(
                    "collection",
                    { [`${mode}`]: mode },
                )}
            gap="none"
        >
            <Stack
                className="collection__header"
                direction="horizontal"
                centered
            >
                <h1>{title}</h1>

                <Stack
                    direction='horizontal'
                    gap="medium"
                    className="collection__header__actions"
                >
                    <Icon name="more" size="small" />
                </Stack>
            </Stack>

            <Stack
                className="collection__controls"
                direction="horizontal"
                centered
            >
                <select>
                    <option>Category</option>
                    <option>Music</option>
                    <option>Clothing</option>
                    <option>Kitchen</option>
                    <option>Smart Home</option>
                </select>

                <select>
                    <option>Status</option>
                    <option>In-stock</option>
                    <option>Out-of-stock</option>
                    <option>Low-stock</option>
                </select>

                <select>
                    <option>Type</option>
                    <option>Physical</option>
                    <option>Virtual</option>
                </select>

                <button>Apply filters</button>
            </Stack>
            <div className="collection__content">
                <List />
            </div>
        </Stack>
    );
}

export default Collection;
