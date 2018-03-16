import * as actions from "../actions/action";

const initialState = {
  jobs: [],
  singleJob: {},
  activities: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_JOBS_SUCCESS:
      return Object.assign({}, state, {
        jobs: action.jobs
      });
    case actions.GET_SINGLE_JOB_SUCCESS:
      return Object.assign({}, state, {
        singleJob: action.job
      });
      
    default:
      return state;
  }
}
