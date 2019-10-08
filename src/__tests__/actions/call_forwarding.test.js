import * as actions from '../../actions/call_forwarding';

describe('call forwarding synchronous actions', () => {
  it('creates an action on ADD_LOCAL_FORWARD_NUMBER', () => {
    const expectedAction = {
      type: actions.ADD_LOCAL_FORWARD_NUMBER,
      number: "12345"
    };
    expect(actions.addLocalForwardNumber("12345")).toEqual(expectedAction);
  });

  it('creates an action on REMOVE_LOCAL_FORWARD_NUMBER', () => {
    const expectedAction = {
      type: actions.REMOVE_LOCAL_FORWARD_NUMBER,
      number: "12345"
    };
    expect(actions.removeLocalForwardNumber("12345")).toEqual(expectedAction);
  });

  it('creates an action on SET_ENABLED_FORWARD_NUMBER', () => {
    const expectedAction = {
      type: actions.SET_ENABLED_FORWARD_NUMBER,
      newNumber: "12345"
    };
    expect(actions.setEnabledForwardNumber("12345")).toEqual(expectedAction);
  });

  it('creates an action on CLEAR_LOCAL_FORWARD_LIST', () => {
    const expectedAction = {
      type: actions.CLEAR_LOCAL_FORWARD_LIST,
    };
    expect(actions.clearLocalForwardList()).toEqual(expectedAction);
  });

  it('creates an action on ADD_LOCAL_RINGING_NUMBER', () => {
    const expectedAction = {
      type: actions.ADD_LOCAL_RINGING_NUMBER,
      number: "12345"
    };
    expect(actions.addLocalRingingNumber("12345")).toEqual(expectedAction);
  });

  it('creates an action on REMOVE_LOCAL_RINGING_NUMBER', () => {
    const expectedAction = {
      type: actions.REMOVE_LOCAL_RINGING_NUMBER,
      number: "12345"
    };
    expect(actions.removeLocalRingingNumber("12345")).toEqual(expectedAction);
  });

  it('creates an action on SET_ENABLED_RINGING_LIST', () => {
    const expectedAction = {
      type: actions.SET_ENABLED_RINGING_LIST,
      newList:["12345"]
    };
    expect(actions.setEnabledRingingList(["12345"])).toEqual(expectedAction);
  });

  it('creates an action on CLEAR_LOCAL_RINGING_LIST', () => {
    const expectedAction = {
      type: actions.CLEAR_LOCAL_RINGING_LIST
    };
    expect(actions.clearLocalRingingList()).toEqual(expectedAction);
  });

  it('creates an action on CLEAR_LAST_OPERATION', () => {
    const expectedAction = {
      type: actions.CLEAR_LAST_OPERATION
    };
    expect(actions.clearLastOperation()).toEqual(expectedAction);
  });

});


describe('CallForwardinghActionFactory', () => {
  const TestHandler = {
    withAuth: ()=> ('header-example'),
    withRefresh: jest.fn()
  };

  const authActionFactory = actions.default;

  it('creates the correct endpoint for getCallForwardingStatus()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/call-forwarding/status/12345',
        method: 'GET',
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@settings/CALL_FORWARDING_REQUEST',
          '@@settings/CALL_FORWARDING_SUCCESS',
          '@@settings/CALL_FORWARDING_FAILURE'
        ]
      }
    };
    const getCallForwardingStatus = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).getCallForwardingStatus;

    expect(getCallForwardingStatus("12345")).toEqual(expectedResult);
  });

  it('creates the correct endpoint for disableCallForwarding()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/call-forwarding/disable/',
        method: 'DELETE',
        body: "{\"extension\":\"12345\"}",
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@settings/DISABLE_CALL_FORWARDING_REQUEST',
          '@@settings/DISABLE_CALL_FORWARDING_SUCCESS',
          '@@settings/DISABLE_CALL_FORWARDING_FAILURE'
        ]
      }
    };
    const disableCallForwarding = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).disableCallForwarding;

    expect(disableCallForwarding("12345")).toEqual(expectedResult);
  });

  it('creates the correct endpoint for enableSimultaneousRinging()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/call-forwarding/simultaneous-ring/enable/',
        method: 'POST',
        body: "{\"extension\":\"12345\"}",
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@settings/ENABLE_SIMULTANEOUS_RINGING_REQUEST',
          '@@settings/ENABLE_SIMULTANEOUS_RINGING_SUCCESS',
          '@@settings/ENABLE_SIMULTANEOUS_RINGING_FAILURE'
        ]
      }
    };
    const enableSimultaneousRinging = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).enableSimultaneousRinging;

    expect(enableSimultaneousRinging("12345")).toEqual(expectedResult);
  });

  it('creates the correct endpoint for enableSimultaneousRinging()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/call-forwarding/enable/',
        method: 'POST',
        body: "{\"extension\":\"12345\"}",
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@settings/ENABLE_CALL_FORWARDING_REQUEST',
          '@@settings/ENABLE_CALL_FORWARDING_SUCCESS',
          '@@settings/ENABLE_CALL_FORWARDING_FAILURE'
        ]
      }
    };
    const enableCallForwarding = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).enableCallForwarding;

    expect(enableCallForwarding("12345")).toEqual(expectedResult);
  });

});