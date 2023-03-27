import React from 'react'
import {IconButton} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const userButton = () => {
    return (
        <IconButton type="button" aria-label="user" sx={{color: '#1A7199'}}>
            <PersonOutlineOutlinedIcon/>
        </IconButton>
    )
}

export default userButton
