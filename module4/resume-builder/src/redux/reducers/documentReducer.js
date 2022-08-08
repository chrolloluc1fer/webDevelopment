import initialState from './intialState.json'


export default function documentReducer(state = initialState, action) {
    switch(action.type){
        case "SET_SKIN":
            return{
                ...state,
                document:action.document
            }
        case "UPDATE_SKIN":
            return{
                ...state,
                document:action.document
            } 
        default:
        return state;      
    }
}