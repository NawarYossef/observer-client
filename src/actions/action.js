import { API_BASE_URL } from "../config";
import history from "../history";

//
export const createNewJob = (newJob) => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then(res => {
        return res.json();
      })
      .then(newJob => {
        dispatch(createNewJobSuccess(newJob));
        history.push(`/jobs`);
      });
  };
};

export const CREATE_NEW_JOB_SUCCESS = "CREATE_NEW_JOB_SUCCESS";
export const createNewJobSuccess = newJob => ({
  type: CREATE_NEW_JOB_SUCCESS,
  newJob
});
