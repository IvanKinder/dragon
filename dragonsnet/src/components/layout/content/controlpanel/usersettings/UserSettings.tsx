import React from 'react'
import ChatBtn from "./controlbuttons/chatbtn/ChatBtn";
import SettingsBtn from "./controlbuttons/settingsbtn/SettingsBtn";
import UploadBtn from "./controlbuttons/uploadbtn/UploadBtn";

const UserSettings = () => {
    const buttonsContainerStyle = {
            display: 'grid',
            gridTemplateColumns: '10.3vw 3.5vw 3.5vw',
            gap: '0.5vw',
            margin: '1.6vh 0 0 0'
        }

    return (
        <div style={buttonsContainerStyle}>
            <UploadBtn/>
            <ChatBtn/>
            <SettingsBtn/>
        </div>
    )
}

export default UserSettings
