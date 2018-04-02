import * as actions from "../actions/jobs";

const initialState = {
  jobs: [],
  singleJob: {},
  activities: []
};

export function jobs(state = initialState, action) {
  switch (action.type) {
    case actions.GET_JOBS_SUCCESS:
      return Object.assign({}, state, {
        jobs: action.jobs
      });
    case actions.GET_SINGLE_JOB_SUCCESS:
      return Object.assign({}, state, {
        singleJob: action.job
      });
    
    case actions.CREATE_NEW_JOB_SUCCESS:
    return Object.assign({}, state, {
      jobs: [...jobs, action.job]
    })
      
    case actions.EDIT_JOB_SUCCESS:
    return Object.assign({}, state, {
      jobs: jobs.map(job => {
        job.id === action.id ? job = action.job : null;
      })
    })

    default:
      return state;
  }
}
