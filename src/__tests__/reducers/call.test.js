import reducer from '../../reducers/call';
import * as actions from '../../actions/call';

describe('calls reducer', () => {
  const initialState = {
    calling: false,
    error: {},
    onCall: false,
    receivingCall: false,
    additionalCall: undefined,
    additionalCalls: 0,
    remote: null,
    tempRemote: null,
    uuid: null
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles CALL_REQUEST', () => {
    expect(reducer(undefined, { type: actions.CALL_REQUEST })).toEqual({
      ...initialState,
      calling: true,
      tempRemote: {
        missed: true
      },
      uuid: undefined
    });
  });

  it('it handles CALL_REJECTED', () => {
    const errors = {
      code: {
        status_code: '1234'
      },
      description: 'Error Message'
    };

    expect(
      reducer(initialState, { type: actions.CALL_REJECTED, errors })
    ).toEqual({
      ...initialState,
      error: {
        statusCode: '1234',
        message: 'Error Message'
      }
    });
  });

  it('it handles CALL_FAILED', () => {
    const errors = {
      code: {
        status_code: '1234'
      },
      description: 'Error Message'
    };

    expect(
      reducer(initialState, { type: actions.CALL_FAILED, errors })
    ).toEqual({
      ...initialState,
      error: {
        statusCode: '1234',
        message: 'Error Message'
      }
    });
  });

  it('it handles CALL_MISSED', () => {
    expect(reducer(initialState, { type: actions.CALL_MISSED })).toEqual({
      ...initialState,
      tempRemote: {
        missed: true
      }
    });
  });

  it('it handles CALL_RECEIVED', () => {
    const payload = {
      uuid: '1111',
      callerName: 'Caller Name',
      callerNumber: '12345'
    };

    expect(
      reducer(initialState, { type: actions.CALL_RECEIVED, ...payload })
    ).toEqual({
      ...initialState,
      receivingCall: true,
      tempRemote: {
        missed: true,
        incoming: true,
        name: 'Caller Name',
        phoneNumber: '12345'
      },
      uuid: '1111'
    });
  });

  it('it handles CALL_ACCEPTED', () => {
    const payload = {
      startTime: 12345
    };

    expect(
      reducer(initialState, { type: actions.CALL_ACCEPTED, ...payload })
    ).toEqual({
      ...initialState,
      receivingCall: false,
      onCall: true,
      tempRemote: undefined,
      remote: {
        missed: false,
        startTime: 12345
      },
      startTime: 12345
    });
  });

  it('it handles FINISH_TEMP_CALL', () => {
    expect(
      reducer(initialState, {
        type: actions.CALL_FINISHED_ACTIONS.FINISH_TEMP_CALL
      })
    ).toEqual({
      ...initialState,
      tempRemote: undefined
    });
  });

  it('it handles FINISH_ONGOING_CALL', () => {
    expect(
      reducer(initialState, {
        type: actions.CALL_FINISHED_ACTIONS.FINISH_ONGOING_CALL
      })
    ).toEqual({
      ...initialState,
      remote: undefined,
      tempRemote: null
    });
  });

  it('it handles FINISH_ONGOING_CALL', () => {
    expect(
      reducer(initialState, {
        type: actions.ADD_ADDITIONAL_CALL
      })
    ).toEqual({
      ...initialState,
      additionalCalls: 1
    });
  });

  it('it handles REMOVE_ADDITIONAL_CALL', () => {
    expect(
      reducer(initialState, {
        type: actions.REMOVE_ADDITIONAL_CALL
      })
    ).toEqual({
      ...initialState,
      additionalCalls: -1
    });
  });

  it('it handles SET_ADDITIONAL_CALL', () => {

    const additionalCall = "Additional Call";

    expect(
      reducer(initialState, {
        type: actions.ADDITIONAL_CALL_ACTIONS.SET_ADDITIONAL_CALL,
        additionalCall
      })
    ).toEqual({
      ...initialState,
      additionalCall: "Additional Call"
    });
  });

  it('it handles SET_ADDITIONAL_CALL', () => {

    const callId = "123456";

    expect(
      reducer(initialState, {
        type: actions.SET_CALL_ID,
        callId
      })
    ).toEqual({
      ...initialState,
      tempRemote: {
        callId
      }
    });
  });

  it('it handles SET_TONE_CALL_ID', () => {

    const callId = "123456";

    expect(
      reducer(initialState, {
        type: actions.SET_TONE_CALL_ID,
        callId
      })
    ).toEqual({
      ...initialState,
      tempRemote: {
        toneCallId: callId
      }
    });
  });

});
