import reducer from '../../reducers/me';
import * as actions from '../../actions/me';

describe('me reducer', () => {
  const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    mobile: null,
    phone: null,
    username: null,
    personId: null,
    error: {},
    fetching: false,
    doNotDisturb: false,
    rememberNumber: false,
    sendStats: true
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles ME_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.ME_REQUEST
      })
    ).toEqual({
      ...initialState,
      fetching: true,
      error: {}
    });
  });

  it('it handles ME_SUCCESS', () => {
    const payload = {
      email: 'johndow@cern.ch',
      firstName: 'FirstName',
      lastName: 'LastName',
      mobile: '11111',
      phone: '22222',
      username: 'johndoe',
      doNotDisturb: false,
      personId: '12345'
    };

    expect(
      reducer(initialState, {
        type: actions.ME_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      mobile: payload.mobile,
      phone: payload.phone,
      username: payload.username,
      doNotDisturb: payload.doNotDisturb,
      personId: payload.personId,
      error: {},
      fetching: false
    });
  });

  it('it handles ME_FAILURE', () => {
    const payload = {
      email: 'This is the error'
    };

    expect(
      reducer(initialState, {
        type: actions.ME_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      email: null,
      firstName: null,
      lastName: null,
      mobile: null,
      phone: null,
      username: null,
      personId: null,
      doNotDisturb: null,
      error: payload.error,
      fetching: false
    });
  });

  it('it handles SET_REMEMBER_NUMBER', () => {
    const payload = true;

    expect(
      reducer(initialState, {
        type: actions.SET_REMEMBER_NUMBER,
        rememberNumber: payload
      })
    ).toEqual({
      ...initialState,
      rememberNumber: payload
    });
  });

  it('it handles SET_SEND_STATS', () => {
    const payload = true;

    expect(
      reducer(initialState, {
        type: actions.SET_SEND_STATS,
        sendStats: payload
      })
    ).toEqual({
      ...initialState,
      sendStats: payload
    });
  });

});
