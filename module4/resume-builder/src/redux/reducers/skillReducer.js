import initialState from './intialState.json'

export default function skillReducer(state = initialState.skill, action) {
    switch(action.type){
        case "ADD_SKILL":
            return {
                ...state,
                ...action.skill
            }
        default :
            return state;    
    }
}
