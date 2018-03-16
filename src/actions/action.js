import { API_BASE_URL } from "../config";
import history from "../history";

// -------------- GET all jobs --------------------//
export const getJobs = () => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(getJobsSuccess(data.jobs));
        history.push(`/jobs`);
      })
      .catch(err => 
        console.log(err)
      )
  };
};

export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const getJobsSuccess = jobs => ({
  type: GET_JOBS_SUCCESS,
  jobs
});

// ------------GET new job --------------//
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
        history.push(`/jobs`);
      })
      .catch(err => 
        console.log(err)
      )
  };
};

// --------------DELETE job --------------------//
export const deleteJob = (job, id) => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(job)
    })
      .then(res => {
        return res.status(200).json();
        history.push(`/jobs`);
      })
      .catch(err => 
        console.log(err)
      )
  };
};

