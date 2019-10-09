import reducer from '../../../reducers/contacts/removeContacts';
import * as actions from '../../../actions/contacts';

describe('addContact reducer', () => {
  const initialState = {
    removing: false,
    removed: false,
    errors: undefined
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles REMOVE_CONTACTS_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.REMOVE_CONTACTS_REQUEST
      })
    ).toEqual({
      ...initialState,
      removing: true,
      removed: false,
      errors: undefined
    });
  });

  it('it handles REMOVE_CONTACTS_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.REMOVE_CONTACTS_SUCCESS
      })
    ).toEqual({
      ...initialState,
      removing: false,
      removed: true,
      errors: undefined
    });
  });

  it('it handles REMOVE_CONTACTS_FAILURE', () => {
    const payload = {
      error: 'There was an error'
    };
    expect(
      reducer(initialState, {
        type: actions.REMOVE_CONTACTS_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      errors: payload.error
    });
  });
});
