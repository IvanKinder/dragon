import {Button} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";


const UploadBtn = ({loading}: any) => {
    const uploadBtnStyle = {
        backgroundColor: '#527AE0',
        height: 45
    }

    return (
        <div>
            <Button sx={uploadBtnStyle} variant="contained" startIcon={
                <FileUploadOutlinedIcon sx={{color: 'white'}}/>}>
                Upload Artwork
            </Button>
        </div>
    );
}

export default UploadBtn
