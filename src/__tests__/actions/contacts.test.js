import * as actions from '../../actions/contacts';

describe('call forwarding synchronous actions', () => {
  it('creates an action on SELECT_CONTACT', () => {
    const contact = {name: 'peter', lastName: 'Doe'}
    const expectedAction = {
      type: "@@contacts/SELECT_CONTACT",
      contact
    };
    expect(actions.selectContact(contact)).toEqual(expectedAction);
  });

  it('creates an action on UNSELECT_CONTACT', () => {
    const contact = {name: 'peter', lastName: 'Doe'}
    const expectedAction = {
      type: "@@contacts/UNSELECT_CONTACT",
      contact
    };
    expect(actions.unSelectContact(contact)).toEqual(expectedAction);
  });

  it('creates an action on OPEN_EMERGENCY_MODAL', () => {
    const expectedAction = {
      type: "@@contacts/OPEN_EMERGENCY_MODAL",
    };
    expect(actions.openEmergencyModal()).toEqual(expectedAction);
  });

  it('creates an action on CLOSE_EMERGENCY_MODAL', () => {
    const expectedAction = {
      type: "@@contacts/CLOSE_EMERGENCY_MODAL",
    };
    expect(actions.closeEmergencyModal()).toEqual(expectedAction);
  });
});

describe('ContactsActionFactory', () => {
  const TestHandler = {
    withAuth: ()=> ('header-example'),
    withRefresh: jest.fn()
  };

  const authActionFactory = actions.default;

  it('creates the correct endpoint for getCallForwardingStatus()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/contacts/',
        credentials: "include",
        method: 'GET',
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@contacts/GET_CONTACTS_REQUEST',
          '@@contacts/GET_CONTACTS_SUCCESS',
          '@@contacts/GET_CONTACTS_FAILURE'
        ]
      }
    };
    const getUserContacts = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).getUserContacts;

    expect(getUserContacts()).toEqual(expectedResult);
  });

  it('creates the correct endpoint for addUserContact()', () => {
    const contact = {name: 'peter', lastName: 'Doe'};
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/contacts/',
        credentials: "include",
        method: 'POST',
        body: "{\"name\":\"peter\",\"lastName\":\"Doe\"}",
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@contacts/ADD_CONTACTS_REQUEST',
          '@@contacts/ADD_CONTACTS_SUCCESS',
          '@@contacts/ADD_CONTACTS_FAILURE'
        ]
      }
    };
    const addUserContact = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).addUserContact;

    expect(addUserContact(contact)).toEqual(expectedResult);
  });

  it('creates the correct endpoint for removeUserContact()', () => {
    const contact = {name: 'peter', lastName: 'Doe'};

    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/contacts/',
        credentials: "include",
        method: 'DELETE',
        headers: "header-example",
        options: { timeout: 3000 },
        body: "{\"personId\":\"12345\"}",
        types: [
          '@@contacts/REMOVE_CONTACTS_REQUEST',
          '@@contacts/REMOVE_CONTACTS_SUCCESS',
          '@@contacts/REMOVE_CONTACTS_FAILURE'
        ]
      }
    };
    const removeUserContact = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).removeUserContact;

    expect(removeUserContact("12345")).toEqual(expectedResult);
  });

});