import reducer from '../../reducers/auth';
import * as actions from '../../actions/auth';

describe('dialpad reducer', () => {
  const initialState = {
    authInProgress: false,
    loggedIn: false,
    authToken: undefined,
    accessToken: undefined,
    refreshToken: undefined,
    loginInProgress: false,
    requestingToken: false,
    toneToken: '',
    error: null
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles AUTH_START', () => {
    expect(
      reducer(undefined, {
        type: actions.AUTH_START
      })
    ).toEqual({
      ...initialState,
      authInProgress: true
    });
  });

  it('it handles LOGIN_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGIN_REQUEST
      })
    ).toEqual({
      ...initialState,
      loginInProgress: true,
      authInProgress: false
    });
  });

  it('it handles LOGIN_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGIN_FAILURE
      })
    ).toEqual({
      ...initialState,
      error: 'DB-42'
    });
  });

  it('it handles TOKEN_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: actions.TOKEN_FAILURE
      })
    ).toEqual({
      ...initialState,
      error: 'DB-42'
    });
  });

  it('it handles LOGIN_SUCCESS', () => {
    const payload = {
      token: { access: '0987654', refresh: '123456' },
      access_token: '12345',
      refresh_token: '09876'
    };

    expect(
      reducer(undefined, {
        type: actions.LOGIN_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      accessToken: '12345',
      refreshToken: '09876',
      authToken: '{"access":"0987654","refresh":"123456"}'
    });
  });

  it('it handles TOKEN_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: actions.TOKEN_REQUEST
      })
    ).toEqual({
      ...initialState,
      requestingToken: true
    });
  });

  it('it handles TOKEN_RECEIVED', () => {
    const payload = {
      access_token: '12345'
    };

    expect(
      reducer(undefined, {
        type: actions.TOKEN_RECEIVED,
        payload
      })
    ).toEqual({
      ...initialState,
      accessToken: '12345',
      error: {},
      loggedIn: true,
      requestingToken: false
    });
  });

  it('it handles LOGOUT_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGOUT_REQUEST
      })
    ).toEqual({
      ...initialState,
      loggedIn: false,
      loginInProgress: false,
      authInProgress: false,
      accessToken: undefined,
      refreshToken: undefined,
      authToken: undefined
    });
  });

  it('it handles LOGOUT_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGOUT_SUCCESS
      })
    ).toEqual({
      ...initialState,
      loggedIn: false
    });
  });

  it('it handles CLEAR_TOKEN', () => {
    expect(
      reducer(undefined, {
        type: actions.CLEAR_TOKEN
      })
    ).toEqual({
      ...initialState,
      authToken: undefined
    });
  });

  it('it handles SET_TONE_TOKEN', () => {
    const toneToken = '1234567890';

    expect(
      reducer(undefined, {
        type: actions.SET_TONE_TOKEN,
        toneToken
      })
    ).toEqual({
      ...initialState,
      toneToken
    });
  });

  it('it handles SET_AUTHENTICATED', () => {
    const toneToken = '1234567890';

    expect(
      reducer(undefined, {
        type: actions.authActionsTypes.SET_AUTHENTICATED,
        toneToken
      })
    ).toEqual({
      ...initialState,
      loggedIn: true,
      accessToken: undefined,
      refreshToken: undefined,
      toneToken: undefined
    });
  });

  it('it handles SET_AUTHENTICATED_MOBILE', () => {
    expect(
      reducer(undefined, {
        type: actions.authActionsTypes.SET_AUTHENTICATED_MOBILE
      })
    ).toEqual({
      ...initialState,
      loggedIn: true
    });
  });
});
