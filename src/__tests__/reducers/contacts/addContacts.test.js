import reducer from '../../../reducers/contacts/addContacts';
import * as actions from '../../../actions/contacts';

describe('addContact reducer', () => {
  const initialState = {
    adding: false,
    added: false,
    errors: undefined
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles ADD_CONTACTS_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.ADD_CONTACTS_REQUEST,
      })
    ).toEqual({
      ...initialState,
      adding: true,
      added: false,
      errors: undefined
    });
  });

  it('it handles ADD_CONTACTS_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.ADD_CONTACTS_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      added: true,
        adding: false,
        errors: undefined
    });
  });

  it('it handles ADD_CONTACTS_FAILURE', () => {
    const payload = {
      error: 'There was an error'
    };
    expect(
      reducer(initialState, {
        type: actions.ADD_CONTACTS_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      errors: payload.error
    });
  });
});
