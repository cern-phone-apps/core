import * as actions from '../../actions/auth';

describe('auth synchronous actions', () => {
  it('creates an action on AUTH_START', () => {
    const expectedAction = {
      type: actions.AUTH_START
    };
    expect(actions.startAuth()).toEqual(expectedAction);
  });

  it('creates an action on CLEAR_TOKEN', () => {
    const expectedAction = {
      type: actions.CLEAR_TOKEN
    };
    expect(actions.clearAuthToken()).toEqual(expectedAction);
  });

  it('creates an action on SET_TONE_TOKEN', () => {
    const expectedAction = {
      type: actions.SET_TONE_TOKEN,
      toneToken: {
        token: '12345'
      }
    };
    expect(actions.setToneToken({ token: '12345' })).toEqual(expectedAction);
  });

  it('creates an action on SET_AUTHENTICATED', () => {
    const expectedAction = {
      type: actions.authActionsTypes.SET_AUTHENTICATED
    };
    expect(actions.setAuthenticated()).toEqual(expectedAction);
  });

  it('creates an action on SET_AUTHENTICATED_MOBILE', () => {
    const expectedAction = {
      type: actions.authActionsTypes.SET_AUTHENTICATED_MOBILE
    };
    expect(actions.setAuthenticatedMobile()).toEqual(expectedAction);
  });
});

describe('AuthActionFactory', () => {
  const TestHandler = {
    withAuth: jest.fn(),
    withRefresh: jest.fn()
  };

  const authActionFactory = actions.default;

  it('creates the correct endpoint for login()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/auth/v1/token/login/',
        credentials: 'omit',
        body: '{"type":"desktop"}',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        options: { timeout: 3000 },
        types: [
          '@@auth/LOGIN_REQUEST',
          '@@auth/LOGIN_SUCCESS',
          '@@auth/LOGIN_FAILURE'
        ]
      }
    };
    const login = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).login;

    expect(login()).toEqual(expectedResult);
  });

  it('creates the correct endpoint for logout()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/auth/v1/token/logout/',
        credentials: 'omit',
        headers: undefined,
        method: 'DELETE',
        options: { timeout: 3000 },
        types: [
          '@@auth/LOGOUT_REQUEST',
          '@@auth/LOGOUT_SUCCESS',
          '@@auth/LOGOUT_FAILURE'
        ]
      }
    };
    const logout = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).logout;

    expect(logout()).toEqual(expectedResult);
  });

  it('creates the correct endpoint for logout()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/auth/v1/token/refresh/',
        credentials: 'omit',
        headers: undefined,
        method: 'POST',
        options: { timeout: 3000 },
        types: [
          '@@auth/TOKEN_REQUEST',
          '@@auth/TOKEN_RECEIVED',
          '@@auth/TOKEN_FAILURE'
        ]
      }
    };
    const refreshAccessToken = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).refreshAccessToken;

    expect(refreshAccessToken()).toEqual(expectedResult);
  });
});
