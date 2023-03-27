import React, {useEffect, useState} from 'react'
import {IconButton} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";

const LogoutButton = () => {
    const cookies = new Cookies();
    const [token, setToken] = useState();
    const navigate = useNavigate();
    const onLogoutBtnClick = () => {
        cookies.set('jwt', '');
        navigate('/');
        // axios.get(
        //     'http://127.0.0.1:8000/logout/',
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": "Bearer " + token
        //         },
        //     }
        // ).then((res) => {
        //     if (res.status === 200) {
        //         console.log(res);
        //     }
        // }).catch(error => {
        //     console.log(error);
        // })
    }
    useEffect(() => {
        setToken(cookies.get('jwt'));
    })
    return (
        <IconButton onClick={onLogoutBtnClick} type="button" aria-label="info" sx={{color: '#1A7199', marginLeft: '26vw'}}>
            <LogoutIcon/>
        </IconButton>
    )
}

export default LogoutButton
