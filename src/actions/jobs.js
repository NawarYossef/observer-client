import { API_BASE_URL } from "../config";
import history from "../history";

// -------------- GET all jobs --------------------
export const getJobs = () => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/`, {
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
        dispatch(getJobsSuccess(data.jobs));
        history.push(`/jobs`);
      })
      .catch(err => console.log(err));
  };
};

export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const getJobsSuccess = jobs => ({
  type: GET_JOBS_SUCCESS,
  jobs
});

// ----------------GET a single job -----------------
export const getSingleJob = id => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/${id}`, {
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
        dispatch(getSingleJobSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const GET_SINGLE_JOB_SUCCESS = "GET_SINGLE_JOB_SUCCESS";
export const getSingleJobSuccess = job => ({
  type: GET_SINGLE_JOB_SUCCESS,
  job
});

// ----------------(PUT) Edit a single job --------------
export const editJob = (job, id) => {
  job.id = id;
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(job)
    })
      .then(res => res.json())
      .then(job => {
        console.log(job);
        dispatch(edit_job_success(job, id));
      })
      .catch(err => console.log(err));
  };
};

export const EDIT_JOB_SUCCESS = "EDIT_JOB_SUCCESS";
export const edit_job_success = (job, id) => ({
  type: EDIT_JOB_SUCCESS,
  job,
  id
});

// ------------POST new job ------------------------
export const createNewJob = newJob => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newJob)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(create_new_job_success(data));
      })
      .catch(err => console.log(err));
  };
};

export const CREATE_NEW_JOB_SUCCESS = "CREATE_NEW_JOB_SUCCESS";
export const create_new_job_success = job => ({
  type: CREATE_NEW_JOB_SUCCESS,
  job
});

// --------------DELETE job --------------------
export const deleteJob = (job, id) => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(job)
    })
      .then(res => {
        if (res.status === 204) {
          console.log('------------------------------------');
          console.log("delete");
          console.log('------------------------------------');
          return
        }
      })
      .catch(err => console.log(err));
  };
};
