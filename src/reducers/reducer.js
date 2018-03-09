import * as actions from '../actions/action';

const initialState = {
  addButton: false,
  cancelButton: false
};

export function reducer(state=initialState, action) {
  if (action.type === actions.ADD_NEW_ACTIVITY_OR_JOB) {
      return Object.assign({}, state, {
        addButton: true
      }) 
  } else if (action.type === actions.CANCEL_NEW_ACTIVITY_OR_JOB) {
    return Object.assign({}, state, {
      cancelButton: true
    }) 
  } 
  return state;
}