import React, {FC, useEffect, useState} from 'react'
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import axios from 'axios'
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "universal-cookie";

const Login: FC = () => {
    const loginPageStyle = {
        display: 'grid',
        width: '20vw',
        margin: '30vh auto',
        gap: '2vh'
    },
        dispatch = useDispatch()
    let login = '',
        password = ''
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [hiddenCmp, setHiddenCmp] = useState('none');
    const onFormSubmit = (e: any) => {
            e.preventDefault();
            axios.post(
                'http://127.0.0.1:8000/login',
                JSON.stringify({email: login, password: password}),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            ).then((res) => {
                if (res.status === 200) {
                    dispatch({type: 'SET_TOKEN', token: res.data.token});
                    cookies.set('jwt', res.data.token);
                    navigate('/profile');
                }
            }).catch(error => {
                navigate('/');
            })
        },
        handleClickShowPassword = () => {
            setShowPassword(!showPassword);
        }
        useEffect(() => {
            if (cookies.get('jwt') && cookies.get('jwt') !== '') {
                dispatch({type: 'SET_TOKEN', token: cookies.get('jwt')});
                navigate('/profile');
            }
            setHiddenCmp('');
        }, [])
    return (
        <div style={{display: hiddenCmp}}>
            <form style={loginPageStyle} onSubmit={onFormSubmit}>
                <TextField label="Email" onChange={(e) => {
                    login = e.target.value
                }} variant="outlined"/>
                <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        label="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        onChange={(e) => {
                            password = e.target.value
                        }}
                    />
                </FormControl>
                <Button type="submit" sx={{width: '5vw', margin: 'auto'}} variant="contained">Log in</Button>
                <Button sx={{width: '8vw', margin: '-1vh auto'}} variant="contained">Registration</Button>
            </form>
        </div>
    )
}

export default Login
