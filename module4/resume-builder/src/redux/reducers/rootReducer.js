import documentReducer from "./documentReducer";
import { combineReducers } from "redux"
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import skillReducer from "./skillReducer";


const rootReducer = combineReducers({
    documentReducer: documentReducer,
    contactReducer: contactReducer,
    educationReducer: educationReducer,
    skillReducer: skillReducer
})

export default rootReducer