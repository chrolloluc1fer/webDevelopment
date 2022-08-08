import initialState from './intialState.json'

export default function educationReducer(state = initialState.education, action) {
    switch (action.type) {
        case "ADD_EDUCATION":
            return {
                ...state,
                ...action.education
            }
        default:
            return state;
    }
}