export const profileReducer = (state = {}, action: any) => {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            state = {...state, ...action.profile}
            return state
        case 'UPDATE_PROFILE_DATA':
            state = {...state,
                username: action.username,
                email: action.userEmail,
                userDescription: action.userDescription
            }
            return state

        default:
            return state
    }
}
