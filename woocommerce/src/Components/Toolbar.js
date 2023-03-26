import React, { useState } from 'react';
import classnames from 'classnames';

// Components
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

            <button>More</button>
        </div>
    );
}

export default Toolbar;
