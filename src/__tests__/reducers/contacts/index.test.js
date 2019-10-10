import reducer from '../../../reducers/contacts';

describe('contacts index reducer', () => {
  const initialState = {
    addContacts: {
      added: false,
      adding: false,
      errors: undefined
    },
    emergencyModal: {
      emergencyModalOpen: false
    },
    getContacts: {
      contacts: [],
      errors: undefined,
      fetching: false
    },
    modal: {
      modalOpen: false,
      selectedContact: undefined
    },
    removeContacts: {
      errors: undefined,
      removed: false,
      removing: false
    }
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
