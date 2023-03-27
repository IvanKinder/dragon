import React, {useEffect} from 'react'
import {useSelector} from "react-redux";

const UserDescription = () => {
    let username = '',
        userDescription = ''
    const descriptionStyle = {
        margin: '1vh 0 0 1vw'
    }
    const profileData = useSelector((state: any) => state.profile);

    if (profileData) {
        username = profileData.username;
        userDescription = profileData.userDescription;
    }

    useEffect(() => {
        if (profileData) {
            username = profileData.username;
            userDescription = profileData.userDescription;
        }
    }, [profileData])

    return (
        <div style={descriptionStyle}>
            <div style={{fontSize: 32, fontWeight: 600}}>
                {username}
            </div>
            <div>
                {userDescription}
            </div>
        </div>
    )
}

export default UserDescription
