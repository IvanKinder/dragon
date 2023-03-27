export const tokenReducer = (state={}, action: any) => {
    switch (action.type) {
        case 'SET_TOKEN':
            state = {...state, token: action.token}
            return state

        default: return state
    }
}
