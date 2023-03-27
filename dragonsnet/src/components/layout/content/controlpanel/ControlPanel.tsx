import React from 'react'
import UserAvatar from "./avatar/UserAvatar";
import UserDescription from "./userdescription/UserDescription";
import UserSettings from "./usersettings/UserSettings";
import {useSelector} from "react-redux";

const ControlPanel = () => {
    const controlPanelStyle = {
        display: 'grid',
        gridTemplateColumns: '5vw 56vw 19vw'
    }

    return (
        <div style={controlPanelStyle}>
            <UserAvatar/>
            <UserDescription/>
            <UserSettings/>
        </div>
    )
}

export default ControlPanel
