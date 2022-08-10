import initialState from './intialState.json'

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case "LOGOUT":
            return {
            isAuth: false, 
            user: null 
            }
        case "LOGIN": {
            return {
                isAuth: true, 
                user: action.user 
            }
        }
        default:
            return state

    }
}