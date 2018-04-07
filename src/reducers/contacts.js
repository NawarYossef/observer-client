import * as actions from "../actions/contacts";

const initialState = {
  contacts: [],
  singleContact: {}
};

export function contacts(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        contacts: action.contacts
      });
    case actions.GET_SINGLE_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        singleContact: action.contact
      });

    case actions.CREATE_NEW_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        contacts: [...contacts, action.contact]
      })

    case actions.EDIT_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        contacts: state.contacts.map(contact => (contact.id === action.id ? action.contact : contact))
      });
    default:
      return state;
  }
}
