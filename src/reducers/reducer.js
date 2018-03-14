import * as actions from "../actions/action";

const initialState = {
  jobs: [],
  activities: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_NEW_JOB_SUCCESS:
      return Object.assign({}, state, {
        jobs: state.jobs.concat(action.newJob)
      });
    default:
      return state;
  }
}
