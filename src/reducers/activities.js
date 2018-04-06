import * as actions from "../actions/activities";

const initialState = {
  activities: [],
  singleActivity: {},
  activities: []
};  

export function activities(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ACTIVITIES_SUCCESS:
      return Object.assign({}, state, {
        activities: action.activities
      });
    case actions.GET_SINGLE_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        singleActivity: action.activity
      });

    case actions.CREATE_NEW_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        activities: [...activities, action.activity]
      })

    case actions.EDIT_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        activities: state.Activities.map(activity => (activity.id === action.id ? action.activity : activity))
      });
    default:
      return state;
  }
}
