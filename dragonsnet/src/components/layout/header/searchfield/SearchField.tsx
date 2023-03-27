import React from 'react'
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
    const searchStyle = {
        p: '10px',
        color: '#1A7199'
    }
    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '31vw', height: '2.2vh', marginTop: '1.2vh'}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search"
                inputProps={{'aria-label': 'Search'}}
            />
            <IconButton type="button" sx={searchStyle} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
}

export default SearchField
