import React from 'react'
import {IconButton} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InfoButton = () => {
    return (
        <IconButton type="button" aria-label="info" sx={{color: '#1A7199'}}>
            <InfoOutlinedIcon/>
        </IconButton>
    )
}

export default InfoButton
