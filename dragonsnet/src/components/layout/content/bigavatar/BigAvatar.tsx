import React from 'react'
import {useSelector} from "react-redux";

const BigAvatar = () => {
    const bigAvatarStyle = {
        width: '82vw',
        height: '28vh',
        // overflow: 'hidden'
    }
    let profile_image = ''
    try {
        const profileData = useSelector((state: any) => state.profile);
        profile_image = `data:image/png;base64,${profileData.big_avatar}`
    } catch (error) {}

    return (
        <div style={bigAvatarStyle}>
            <img src={profile_image} alt='Big Profile Picture' style={{width: '82vw', height: '28vh', borderRadius: '7px'}}/>
        </div>
    )
}

export default BigAvatar
