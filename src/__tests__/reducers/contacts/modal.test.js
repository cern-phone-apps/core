import reducer from '../../../reducers/contacts/modal';
import * as actions from '../../../actions/contacts';

describe('addContact reducer', () => {
  const initialState = {
    selectedContact: undefined,
    modalOpen: false
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles SELECT_CONTACT', () => {
    const contact = 'This is the contact';
    expect(
      reducer(initialState, {
        type: actions.SELECT_CONTACT,
        contact
      })
    ).toEqual({
      ...initialState,
      selectedContact: contact,
      modalOpen: true
    });
  });

  it('it handles UNSELECT_CONTACT', () => {
    expect(
      reducer(initialState, {
        type: actions.UNSELECT_CONTACT
      })
    ).toEqual({
      ...initialState,
      selectedContact: undefined,
      modalOpen: false
    });
  });
});
