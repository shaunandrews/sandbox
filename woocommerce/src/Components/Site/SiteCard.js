import React from 'react';
import classnames from 'classnames';

// Components
import Stack from '../Base/Stack';

// CSS
import './SiteCard.scss';

function SiteCard({ toggleEditing }) {
    return (
        <Stack
            className="site-card"
            direction="horizontal"
            centered={true}
        >
            <img
                className="site-logo"
                src="https://picsum.photos/80"
                alt="site logo"
                height="30"
                width="30"
                onClick={toggleEditing}
            />
            <Stack
                gap="small"
            >
                <h1 className="site-title">Site Name</h1>
                {/* <label className="site-url">https://
                    example.com</label> */}
            </Stack>
        </Stack>
    );
}

export default SiteCard;