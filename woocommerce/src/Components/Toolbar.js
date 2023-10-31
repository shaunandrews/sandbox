import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from './Base/Icon';
import SiteCard from './Site/SiteCard';
import Stack from './Base/Stack';

// CSS
import './Toolbar.scss';

function ToolbarSearch() {
    function focusSearchInput() {
        const searchInput = document.querySelector('.toolbar__search input');
        searchInput.focus();
    }

    return (
        <Stack
            direction="horizontal"
            centered
            className="toolbar__search"
            onClick={focusSearchInput}
        >
            <Icon name="search" size="small" />
            <input
                type="text"
                placeholder="Search"
            />
        </Stack>
    );
}

// default props
Toolbar.defaultProps = {
    mode: 'default',
};

function Toolbar({ mode }) {
    return (
        <Stack
            direction="horizontal"
            alignment="center"
            className={
                classnames(
                    "toolbar",
                    { [`${mode}`]: mode },
                )}
        >
            <SiteCard />

            <Stack
                direction="horizontal"
                centered
                gap="large"
                className="toolbar__actions"
            >
                <ToolbarSearch />

                <Icon name="more" />
            </Stack>
        </Stack>
    );
}

export default Toolbar;
