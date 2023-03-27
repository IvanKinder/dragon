import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {Button, Tooltip, Typography} from "@mui/material";
import ChangeAvatarWindow from "./modalwindow/ChangeAvatarWindow";

const UserAvatar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const avatarStyle = {
        borderRadius: '50%',
        width: '4.7vw',
        height: '4.7vw'
    }
    let avatar = ''
    try {
        const profileData = useSelector((state: any) => state.profile);
        avatar = `data:image/png;base64,${profileData.avatar}`
    } catch (error) {
    }

    const onChangeAvatarClick = () => {
        setIsOpen(true);
    }

    return (
        <Tooltip title={
                <Button onClick={onChangeAvatarClick} color="inherit">
                    Change Avatar
                </Button>
            }>
            <div>
                <img src={avatar} alt='Avatar' style={avatarStyle}/>
                <ChangeAvatarWindow isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </Tooltip>
    )
}

export default UserAvatar
