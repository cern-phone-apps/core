import reducer from '../../reducers/connection';
import * as actions from '../../actions/connection';

describe('connection reducer', () => {
  const initialState = {
    connected: false,
    activeNumber: '',
    connecting: false,
    disconnecting: false,
    error: {}
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles REGISTRATION_REQUEST', () => {
    expect(reducer(undefined, { type: actions.REGISTRATION_REQUEST })).toEqual({
      ...initialState,
      connecting: true
    });
  });

  it('it handles REGISTRATION_SUCCESS', () => {
    expect(reducer(undefined, { type: actions.REGISTRATION_SUCCESS })).toEqual({
      ...initialState,
      connected: true,
      connecting: false
    });
  });

  it('it handles DISCONNECTION_REQUEST', () => {
    expect(reducer(undefined, { type: actions.DISCONNECTION_REQUEST })).toEqual({
      ...initialState,
      connecting: false,
      disconnecting: true
    });
  });

  it('it handles DISCONNECTION_SUCCESS', () => {
    expect(reducer(undefined, { type: actions.DISCONNECTION_SUCCESS })).toEqual({
      ...initialState,
      disconnecting: false
    });
  });

  it('it handles REGISTRATION_FAILURE', () => {

    const errors = {
      code: {
        status_code: "123465"
      },
      description: "This is the error description"
    }

    expect(reducer(undefined, { type: actions.REGISTRATION_FAILURE, errors })).toEqual({
      ...initialState,
      error: {
        message: "This is the error description",
        statusCode: "123465"
      }
    });
  });

});
