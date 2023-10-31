import React, { useContext } from "react";
import classnames from "classnames";

import { ScreenContext } from "../../App";
import Button from '../Base/Button';

function SidebarMenuItem({ label, icon }) {
    const { screen } = useContext(ScreenContext);

    function setScreenContext() {
        screen = label;
    }
    
    return (
        <Button
            className={classnames(
                "sidebar-item",
                { screen },
                { label },
                { "is-current-screen": screen === label }
            )}
            icon={icon}
            onClick={setScreenContext}
        >{label}</Button>
    );
}

export default SidebarMenuItem;