import React from "react";

// Components
import SidebarGroup from "./SidebarGroup";
import SidebarMenuItem from "./SidebarMenuItem";

// CSS
import "./Sidebar.scss";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarGroup
                label="Dashboard"
                icon="dashboard"
            >
                <SidebarMenuItem label="Home" />
                <SidebarMenuItem label="Updates" />
            </SidebarGroup>

            <SidebarGroup
                label="Jetpack"
                icon="jetpack"
            >
                <SidebarMenuItem label="Dashboard" />
                <SidebarMenuItem label="Settings" />
                <SidebarMenuItem label="Stats" />
                <SidebarMenuItem label="Akistmet Anti-Spam" />
                <SidebarMenuItem label="Search" />
                <SidebarMenuItem label="My Jetpack" />
            </SidebarGroup>

            <SidebarGroup
                label="Posts"
                icon="post"
            >
                <SidebarMenuItem label="All Posts" />
                <SidebarMenuItem label="Add New" />
                <SidebarMenuItem label="Categories" />
                <SidebarMenuItem label="Tags" />
            </SidebarGroup>

            <SidebarGroup
                label="Pages"
                icon="page"
            >
                <SidebarMenuItem label="All Pages" />
                <SidebarMenuItem label="Add New" />
            </SidebarGroup>

            <SidebarGroup
                label="Media"
                icon="media"
            >
                <SidebarMenuItem label="Library" />
                <SidebarMenuItem label="Add New" />
            </SidebarGroup>

            <SidebarGroup
                label="Comments"
                icon="comments"
            />

            <SidebarGroup
                label="WooCommerce"
                icon="cart"
            >
                {/* <SidebarMenuItem label="Dashboard" /> */}
                <SidebarMenuItem label="Orders" />
                <SidebarMenuItem label="Subscriptions" />
                <SidebarMenuItem label="Customers" />
                <SidebarMenuItem label="Coupons" />
                <SidebarMenuItem label="Reports" />
                <SidebarMenuItem label="Settings" />
                <SidebarMenuItem label="Status" />
                <SidebarMenuItem label="Extensions" />
            </SidebarGroup>

            <SidebarGroup
                label="Products"
                icon="box"
            >
                <SidebarMenuItem label="All Products" />
                <SidebarMenuItem label="Add New" />
                <SidebarMenuItem label="Categories" />
                <SidebarMenuItem label="Tags" />
                <SidebarMenuItem label="Attributes" />
                <SidebarMenuItem label="Review" />
            </SidebarGroup>

            <SidebarGroup
                label="Payments"
                icon="cash"
            />

            <SidebarGroup
                label="Analytics"
                icon="clipboard"
            >
                <SidebarMenuItem label="Overview" />
                <SidebarMenuItem label="Products" />
                <SidebarMenuItem label="Revenue" />
                <SidebarMenuItem label="Orders" />
                <SidebarMenuItem label="Variations" />
                <SidebarMenuItem label="Categories" />
                <SidebarMenuItem label="Coupons" />
                <SidebarMenuItem label="Taxes" />
                <SidebarMenuItem label="Downloads" />
                <SidebarMenuItem label="Stock" />
                <SidebarMenuItem label="Settings" />
            </SidebarGroup>

            <SidebarGroup
                label="Marketing"
                icon="megaphone"
            >
                <SidebarMenuItem label="Overview" />
                <SidebarMenuItem label="Coupons" />
            </SidebarGroup>
        </div>
    );
}

export default Sidebar;