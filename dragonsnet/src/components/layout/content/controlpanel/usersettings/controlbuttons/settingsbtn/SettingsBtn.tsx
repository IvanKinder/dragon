import {Button} from "@mui/material";
import React, {useState} from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SettingsWindow from "./modalwindow/SettingsWindow";


const SettingsBtn = ({loading}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const grayBtnStyle = {
            backgroundColor: '#C4C4C4',
            height: 44,
            padding: '4px 0 0 9px'
        },
        grayBtnIconStyle = {
            color: 'white'
        },
        onSettingsClick = () => {
            setIsOpen(true);
        }

    return (
        <div>
            <Button className="settings-btn" onClick={onSettingsClick} sx={grayBtnStyle} variant="contained" startIcon={
                <MoreHorizOutlinedIcon sx={grayBtnIconStyle}/>
            }>
            </Button>
            <SettingsWindow isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
}

export default SettingsBtn
