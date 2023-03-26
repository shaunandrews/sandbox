import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from './Base/Icon';
import SiteCard from './Site/SiteCard';

// CSS
import './Toolbar.scss';

// default props
Toolbar.defaultProps = {
    mode: 'default',
};

function Toolbar({ mode }) {
    return (
        <div
            className={
                classnames(
                    "toolbar",
                    { [`${mode}`]: mode },
                )}
        >
            <SiteCard />

            <Icon name="more" />
        </div>
    );
}

export default Toolbar;
