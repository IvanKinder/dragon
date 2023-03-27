import {Button} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import React from "react";


const ChatBtn = ({loading}: any) => {
    const grayBtnStyle = {
            backgroundColor: '#C4C4C4',
            height: 44,
            padding: '4px 0 0 9px'
        },
        grayBtnIconStyle = {
            color: 'white'
        }

    return (
        <div>
            <Button sx={grayBtnStyle} variant="contained" startIcon={
                <TextsmsOutlinedIcon sx={grayBtnIconStyle}/>
            }>
            </Button>
        </div>
    );
}

export default ChatBtn
