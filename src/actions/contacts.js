import { API_BASE_URL } from "../config";
import history from "../history";

// -------------- GET all contacts --------------------
export const getContacts = () => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/contacts/`, {
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
        dispatch(getContactsSuccess(data.contacts));
        history.push(`/contacts`);
      })
      .catch(err => console.log(err));
  };
};

export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const getContactsSuccess = contacts => ({
  type: GET_CONTACTS_SUCCESS,
  contacts
});

// ----------------GET a single contact -----------------
export const getSingleContact = id => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/contacts/${id}`, {
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
        dispatch(getSingleContactSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const GET_SINGLE_CONTACT_SUCCESS = "GET_SINGLE_CONTACT_SUCCESS";
export const getSingleContactSuccess = contact => ({
  type: GET_SINGLE_CONTACT_SUCCESS,
  contact
});

// ----------------(PUT) Edit a single contact --------------
export const editContact = (contact, id) => {
  contact.id = id;
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(contact => {
        console.log(contact);
        dispatch(edit_contact_success(contact, id));
      })
      .catch(err => console.log(err));
  };
};

export const EDIT_CONTACT_SUCCESS = "EDIT_CONTACT_SUCCESS";
export const edit_contact_success = (contact, id) => ({
  type: EDIT_CONTACT_SUCCESS,
  contact,
  id
});

// ------------POST new contact ------------------------
export const createNewContact = newContact => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newContact)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(create_new_contact_success(data));
      })
      .catch(err => console.log(err));
  };
};

export const CREATE_NEW_CONTACT_SUCCESS = "CREATE_NEW_CONTACT_SUCCESS";
export const create_new_contact_success = contact => ({
  type: CREATE_NEW_CONTACT_SUCCESS,
  contact
});

// --------------DELETE contact --------------------
export const deleteContact = (contact, id) => {
  return dispatch => {
    // const authToken = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then(res => {
        return res.status(204).json();
      })
      .catch(err => console.log(err));
  };
};
