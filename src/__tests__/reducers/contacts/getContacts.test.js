import reducer from '../../../reducers/contacts/getContacts';
import * as actions from '../../../actions/contacts';

describe('getContacts reducer', () => {
  const initialState = {
    fetching: false,
    errors: undefined,
    contacts: []
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles GET_CONTACTS_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.GET_CONTACTS_REQUEST
      })
    ).toEqual({
      ...initialState,
      fetching: true,
      errors: undefined
    });
  });

  it('it handles GET_CONTACTS_SUCCESS', () => {
    const payload = 'this is the contact';
    expect(
      reducer(initialState, {
        type: actions.GET_CONTACTS_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      contacts: payload,
      errors: undefined
    });
  });

  it('it handles GET_CONTACTS_FAILURE', () => {
    const payload = 'this is the contact';
    expect(
      reducer(initialState, {
        type: actions.GET_CONTACTS_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      errors: 'Error fetching the contacts'
    });
  });
});
