import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Stack from './Base/Stack';
import Icon from './Base/Icon';
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
            >
                <h1>{title}</h1>

                <Stack
                    direction='horizontal'
                    gap="medium"
                    className="collection__header__actions"
                >
                    <Icon name="more" />
                </Stack>
            </Stack>
            <div className="collection__content">
                <List />
            </div>
        </Stack>
    );
}

export default Collection;
