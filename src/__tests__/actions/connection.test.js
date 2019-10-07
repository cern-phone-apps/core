import * as actions from "../../actions/connection";

describe("connection actions", () => {
  it("creates an action to REGISTRATION_REQUEST", () => {
    const expectedAction = {
      type: actions.REGISTRATION_REQUEST
    };
    expect(actions.requestRegistration()).toEqual(expectedAction);
  });

  it("creates an action to REGISTRATION_SUCCESS", () => {
    const expectedAction = {
      type: actions.REGISTRATION_SUCCESS
    };
    expect(actions.setRegistrationSuccess()).toEqual(expectedAction);
  });

  it("should create an action to REGISTRATION_FAILURE", () => {
    const errors = { error: "This an error" };
    const expectedAction = {
      errors,
      type: actions.REGISTRATION_FAILURE
    };
    expect(actions.setRegistrationFailure(errors)).toEqual(expectedAction);
  });

  it("creates an action to DISCONNECTION_REQUEST", () => {
    const expectedAction = {
      type: actions.DISCONNECTION_REQUEST
    };
    expect(actions.requestDisconnection()).toEqual(expectedAction);
  });

  it("creates an action to DISCONNECTION_SUCCESS", () => {
    const expectedAction = {
      type: actions.DISCONNECTION_SUCCESS
    };
    expect(actions.setDisconnectionSuccess()).toEqual(expectedAction);
  });

  it("creates an action to tDISCONNECTION_FAILURE", () => {
    const expectedAction = {
      type: actions.DISCONNECTION_FAILURE
    };
    expect(actions.setDisconnectionFailure()).toEqual(expectedAction);
  });

});