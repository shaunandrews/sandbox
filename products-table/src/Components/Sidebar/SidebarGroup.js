import React, { useContext } from "react";
import classnames from "classnames";

import { SectionContext, ScreenContext } from "../../App";
import Stack from '../Base/Stack';
import Button from '../Base/Button';
import SidebarMenuItem from './SidebarMenuItem';

function SidebarGroup({ label, children, icon }) {
    const section = useContext(SectionContext);
    const screen = useContext(ScreenContext);

    return (
        <Stack
            className={classnames(
                "sidebar-group",
                { "is-current-section": section === label },
            )}
            gap="none"
        >
            <SidebarMenuItem label={label} icon={icon} />

            {children && (
                <section className="sidebar-group__children">{children}</section>
            )}
        </Stack>
    );
}

export default SidebarGroup;