import { API_BASE_URL } from "../config";

export const createNewUser = (creds) => dispatch => {
  fetch(API_BASE_URL + '/users/signup', {
    method: 'POST',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json();
    })
    .then(response => {
      console.log(response);
    })
    // .then(() => {
    // 	dispatch(userLogin(creds))
    // })
    .catch(err => {
      console.log(err);
    });
}