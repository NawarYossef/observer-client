import { API_BASE_URL } from "../config";
import history from "../history";

// -------------- GET all activities --------------------
export const getActivities = () => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/activities/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(getActivitiesSuccess(data.activities));
        history.push(`/activities`);
      })
      .catch(err => console.log(err));
  };
};

export const GET_ACTIVITIES_SUCCESS = "GET_ACTIVITIES_SUCCESS";
export const getActivitiesSuccess = activities => ({
  type: GET_ACTIVITIES_SUCCESS,
  activities
});

// ----------------GET a single activity -----------------
export const getSingleActivity = id => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/activities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(getSingleActivitySuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const GET_SINGLE_ACTIVITY_SUCCESS = "GET_SINGLE_ACTIVITY_SUCCESS";
export const getSingleActivitySuccess = activity => ({
  type: GET_SINGLE_ACTIVITY_SUCCESS,
  activity
});

// ----------------(PUT) Edit a single activity --------------
export const editActivity = (activity, id) => {
  activity.id = id;
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/activities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(activity)
    })
      .then(res => res.json())
      .then(activity => {
        console.log(activity);
        dispatch(edit_activity_success(activity, id));
      })
      .catch(err => console.log(err));
  };
};

export const EDIT_ACTIVITY_SUCCESS = "EDIT_ACTIVITY_SUCCESS";
export const edit_activity_success = (activity, id) => ({
  type: EDIT_ACTIVITY_SUCCESS,
  activity,
  id
});

// ------------POST new activity ------------------------
export const createNewActivity = newActivity => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/activities/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newActivity)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(create_new_activity_success(data));
      })
      .catch(err => console.log(err));
  };
};

export const CREATE_NEW_ACTIVITY_SUCCESS = "CREATE_NEW_ACTIVITY_SUCCESS";
export const create_new_activity_success = activity => ({
  type: CREATE_NEW_ACTIVITY_SUCCESS,
  activity
});

// --------------DELETE activity --------------------
export const deleteActivity = (activity, id) => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/activities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(activity)
    })
      .then(res => {
        res.status(204).json();
        history.push(`/activities`);
      })
      .catch(err => console.log(err));
  };
};
