import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../Base/Icon';
import Stack from '../Base/Stack';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import MenuGroup from './MenuGroup';

// CSS
import './Sidebar.scss';

// default props
Sidebar.defaultProps = {
    mode: 'default',
    selected: 'home',
};

function Sidebar({
    mode,
    selected,
    setSidebarMode,
    setCollectionMode,
    setCanvasMode,
    setCanvasScreenName,
}) {
    const [isSelected, setIsSelected] = useState(selected);

    return (
        <div
            className={
                classnames(
                    "sidebar",
                    { [`${mode}`]: mode },
                )}
        >
            <div className="resize-handle" />
            <Stack
                className="sidebar__content"
                gap="none"
            >
                <MenuGroup
                    label="Pages"
                    icon="page"
                    // open
                >
                    <MenuItem
                        label="Home"
                        icon="home"
                        isSelected={isSelected === 'home'}
                        onClick={() => {
                            setSidebarMode('default');
                            setCollectionMode('default');
                            setCanvasMode('default');
                            setCanvasScreenName('Home');
                            setIsSelected('home');
                        }}
                    />
                    <MenuItem
                        label="Blog"
                        isSelected={isSelected === 'blog'}
                        onClick={() => {
                            setSidebarMode('default');
                            setCollectionMode('default');
                            setCanvasMode('default');
                            setCanvasScreenName('Blog');
                            setIsSelected('blog');
                        }}
                    />
                    <MenuItem label="Shop" />
                    <MenuItem label="Cart" />
                    <MenuItem label="Search" />
                </MenuGroup>

                <MenuGroup
                    label="Posts"
                    icon="post"
                >
                    <MenuItem label="All" />
                    <MenuItem label="Drafts" />
                    <MenuItem label="Pending" />
                    <MenuItem label="Scheduled" />
                    <MenuItem label="Published" />
                    <MenuItem label="Trash" />
                    <MenuItem label="Add New" />
                </MenuGroup>

                <MenuGroup
                    label="Comments"
                    icon="comments"
                >
                    <MenuItem label="All" />
                    <MenuItem label="Pending" />
                    <MenuItem label="Approved" />
                    <MenuItem label="Spam" />
                    <MenuItem label="Trash" />
                </MenuGroup>

                <MenuGroup
                    label="Media"
                    icon="images"
                >
                    <MenuItem label="All media" />
                    <MenuItem label="Recent" />
                    <MenuItem label="Popular" />
                    <MenuItem label="Openverse" />
                    <MenuItem label="Add New" />
                </MenuGroup>

                <div className="menu-spacer" />

                <MenuGroup
                    label="Jetpack"
                    icon="jetpack"
                >
                    <MenuItem label="Stats" />
                    <MenuItem label="Activity" />
                    <MenuItem label="Backups" />
                    <MenuItem label="Scan" />
                    <MenuItem label="Search" />
                    <MenuItem label="CRM" />
                </MenuGroup>

                <MenuGroup
                    label="WooCommerce"
                    icon="woo"
                    open
                >
                    <MenuItem label="Dashboard" />
                    <MenuItem label="Orders" />
                    <MenuItem label="Subscriptions" />
                    <MenuItem
                        label="Products"
                        isSelected={isSelected === 'products'}
                        onClick={() => {
                            setSidebarMode('default');
                            setCollectionMode('wide');
                            setCanvasMode('pip');
                            setCanvasScreenName('Products');
                            setIsSelected('products');
                        }}
                    />
                    <MenuItem label="Customers" />
                    <MenuItem label="Extensions" />
                    <MenuItem label="Coupons" />
                    <MenuItem label="Reports" />
                </MenuGroup>

                <div className="menu-spacer fill" />

                <MenuGroup
                    label="Configure"
                    icon="configure"
                >
                    <MenuItem label="Appearance" />
                    <MenuItem label="Plugins" />
                    <MenuItem label="Users" />
                    <MenuItem label="Tools" />
                    <MenuItem label="Sidebar" />
                    <MenuItem label="Settings" />
                </MenuGroup>
            </Stack>
        </div >
    );
}

export default Sidebar;
