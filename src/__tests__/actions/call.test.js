import * as callActions from '../../actions/call';

describe('call actions', () => {
  it('creates an action on CALL_REQUEST', () => {
    const recipient = 'Call Recipient';
    const callId = '12345';
    const expectedAction = {
      type: callActions.CALL_REQUEST,
      recipient,
      uuid: callId
    };
    expect(callActions.setMakeCallRequest(recipient, callId)).toEqual(
      expectedAction
    );
  });

  it('creates an action on IS_CALLING', () => {
    const expectedAction = {
      type: callActions.IS_CALLING,
      calling: true
    };
    expect(callActions.setIsCalling(true)).toEqual(expectedAction);
  });

  it('creates an action on CALL_RECEIVED', () => {
    const callerNumber = '12345';
    const callerName = 'John Doe';
    const callId = '000999888';
    const expectedAction = {
      type: callActions.CALL_RECEIVED,
      callerNumber,
      callerName,
      uuid: callId
    };
    expect(
      callActions.setIsReceivingCall(callerNumber, callerName, callId)
    ).toEqual(expectedAction);
  });

  it("creates an action to CALL_ACCEPTED", () => {
    const expectedAction = {
      type: callActions.CALL_ACCEPTED,
    };
    const result = callActions.setCallAccepted();
    expect(result.type).toEqual(expectedAction.type);
    expect(typeof result.startTime ).toBe('number')
  });

  it("creates an action to CALL_REJECTED", () => {
    const expectedAction = {
      errors: { code: { status_code: 0 } },
      type: "@@call/CALL_REJECTED"
    };
    expect(callActions.setCallRejected()).toEqual(expectedAction);
  });

  it("creates an action to CALL_FAILED", () => {
    const expectedAction = {
      type: callActions.CALL_FAILED,
      errors: { code: { status_code: 0 } }
    };
    expect(callActions.setCallFailed()).toEqual(expectedAction);
  });

  it("createa an action to CALL_MISSED", () => {
    const expectedAction = {
      type: callActions.CALL_MISSED
    };
    expect(callActions.setCallMissed()).toEqual(expectedAction);
  });

  it("creates an action to FINISH_TEMP_CALL", () => {
    const expectedAction = {
      type: "@@call/FINISH_TEMP_CALL"
    };
    expect(callActions.setTempCallFinished()).toEqual(expectedAction);
  });

  it("creates an action to FINISH_ONGOING_CALL", () => {
    const expectedAction = {
      type: "@@call/FINISH_ONGOING_CALL"
    };
    expect(callActions.setOngoingCallFinished()).toEqual(expectedAction);
  });

  it("creates an action to ADD_ADDITIONAL_CALL", () => {
    const expectedAction = {
      type: "@@call/ADD_ADDITIONAL_CALL"
    };
    expect(callActions.incrementAdditionalCallsNumber()).toEqual(expectedAction);
  });

  it("creates an action to REMOVE_ADDITIONAL_CALL", () => {
    const expectedAction = {
      type: "@@call/REMOVE_ADDITIONAL_CALL"
    };
    expect(callActions.decrementAdditionalCallsNumber()).toEqual(expectedAction);
  });

  it("creates an action to SET_ADDITIONAL_CALL", () => {
    const expectedAction = {
      type: "@@call/SET_ADDITIONAL_CALL",
      additionalCall: {}
    };
    expect(callActions.setAdditionalCall({})).toEqual(expectedAction);
  });

  it("creates an action to SET_CALL_ID", () => {
    const expectedAction = {
      type: "@@call/SET_CALL_ID",
      callId: '12345'
    };
    expect(callActions.setCallId('12345')).toEqual(expectedAction);
  });

  it("creates an action to SET_TONE_CALL_ID", () => {
    const expectedAction = {
      type: "@@call/SET_TONE_CALL_ID",
      callId: '12345'
    };
    expect(callActions.setToneCallId('12345')).toEqual(expectedAction);
  });

});
