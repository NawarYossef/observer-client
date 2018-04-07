import { combineReducers } from "redux";
import { jobs } from "./jobs";
import { activities } from "./activities";
import { contacts } from "./contacts";


const rootReducer = combineReducers({
    jobs,
    activities,
    contacts
});

export default rootReducer;