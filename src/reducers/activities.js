import * as actions from "../actions/Activities";

const initialState = {
  Activities: [],
  singleActivity: {},
  activities: []
};

export function Activities(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ACTIVITIES_SUCCESS:
      return Object.assign({}, state, {
        Activities: action.Activities
      });
    case actions.GET_SINGLE_JOB_SUCCESS:
      return Object.assign({}, state, {
        singleActivity: action.Activity
      });

    case actions.CREATE_NEW_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        Activities: [...Activities, action.Activity]
      })

    case actions.EDIT_JOB_SUCCESS:
      return Object.assign({}, state, {
        Activities: state.Activities.map(Activity => (Activity.id === action.id ? action.Activity : Activity))
      });
    default:
      return state;
  }
}
