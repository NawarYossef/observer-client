import { combineReducers } from "redux";
import { jobs } from "./jobs";
import { activities } from "./activities";


const rootReducer = combineReducers({
    jobs,
    activities
});

export default rootReducer;