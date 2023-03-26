import React from 'react';

// Components
import Stack from '../Base/Stack';
import Icon from '../Base/Icon';

// CSS
import './Preview.scss';

function PreviewHeader({ screenName }) {
    return (
        <Stack
            direction="horizontal"
            className="preview__header"
            centered
        >
            <Stack
                direction="horizontal"
                className="preview__header__site"
                gap="medium"
                centered
            >
                <img src="https://picsum.photos/50" alt="Logo" />
                <h1>Site Name</h1>
            </Stack>

            <Stack
                direction="horizontal"
                className="preview__header__nav"
                gap="x-large"
                centered
            >
                {/* if screenName is Home than add current className */}
                <label className={screenName === 'Home' ? 'current' : ''}>Home</label>
                <label className={screenName === 'Blog' ? 'current' : ''}>Blog</label>
                {/* <label>Work</label> */}
                {/* <label>About</label> */}
                <label>Shop</label>
                <label><Icon name="cart" /></label>
                <label><Icon name="search" /></label>
            </Stack>
        </Stack>
    );
}

function Preview({ screenName }) {
    return (
        <div className="preview">
            {/* If screenName is Home or Blog show the Header */}
            {(screenName === 'Home' || screenName === 'Blog') &&
                <PreviewHeader screenName={screenName} />
            }

            {screenName === "Products" && (
                <div className="preview__content">
                    <h1>Products</h1>
                </div>
            )}

            {/* display only if screeName === Home */}
            {screenName === 'Home' && (
                <div className="preview__content">
                    <h1>Home</h1>
                    <img src="https://picsum.photos/1000/400" alt="Preview" />
                </div>
            )}

            {screenName === 'Blog' && (
                <div className="preview__content">
                    <h1>Blog</h1>
                    <h2>This is a blog post title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nunc, eget a</p>
                </div>
            )}
        </div>
    );
}

export default Preview;