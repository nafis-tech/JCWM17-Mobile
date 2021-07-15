const INITIAL_STATE = {
    username: ""
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return {
                username: action.payload
            }
        case "RESET":
            return INITIAL_STATE
        default:
            return state
    }
}
export default userReducer