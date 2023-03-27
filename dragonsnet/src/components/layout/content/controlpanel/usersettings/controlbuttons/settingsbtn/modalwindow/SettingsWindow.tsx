import React, {Dispatch, FC, SetStateAction, useEffect, useMemo, useState} from 'react'
import {Box, Button, Modal, TextField} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";

type Props = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SettingsWindow: FC<Props> = ({isOpen, setIsOpen}) => {
    const [username, setUsername] = useState(''),
        [userEmail, setUserEmail] = useState(''),
        [userDescription, setUserDescription] = useState('');
    const modalBoxStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '0 solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };
    const profileData = useSelector((state: any) => state.profile);
    const cookies = new Cookies();
    const dispatch = useDispatch()
    const uploadBtnStyle = {
        backgroundColor: '#527AE0',
        height: 45,
        width: '50%',
        margin: 'auto'
    }

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        axios.put(
            'http://127.0.0.1:8000/profile/',
            {
                username: username,
                userEmail: userEmail,
                userDescription: userDescription
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + cookies.get('jwt')
                }
            }
        ).then((res) => {
            if (res.status === 200) {
                dispatch({type: 'UPDATE_PROFILE_DATA', username: username, userEmail: userEmail, userDescription: userDescription});
            }
        }).catch(error => {
            console.log('error');
        })
    }

    useEffect(() => {
        if (profileData) {
            setUsername(profileData.username);
            setUserDescription(profileData.userDescription);
            setUserEmail(profileData.email);
        }
        const onClick = (e: any) => {
            if (e.target.classList.contains('MuiBackdrop-root')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [profileData]);

    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalBoxStyle}>
                    <p style={{margin: '0 0 3.5vh 0', padding: 2.5, fontSize: 'large', color: '#1A7199'}}>Your profile settings</p>
                    <form onSubmit={onFormSubmit} style={{width: '100%', display: 'grid', gap: 45}}>
                        <TextField defaultValue={username} label="Nick Name" onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                        <TextField defaultValue={userDescription} label="Your profile description" onChange={(e) => {
                            setUserDescription(e.target.value)
                        }}/>
                        <TextField defaultValue={userEmail} label="Email" onChange={(e) => {
                            setUserEmail(e.target.value)
                        }}/>
                        <Button type="submit" sx={uploadBtnStyle} variant="contained" startIcon={
                            <SaveIcon sx={{color: 'white'}}/>}>
                            Save Changes
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default SettingsWindow
