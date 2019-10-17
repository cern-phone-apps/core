import reducer from '../../reducers/numbers';
import * as actions from '../../actions/numbers';

describe('numbers reducer', () => {
  const initialState = {
    fetching: false,
    error: undefined,
    activeNumber: undefined,
    numbers: {
      personal: [],
      shared: [],
    }
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles NUMBERS_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_REQUEST
      })
    ).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it('it handles NUMBERS_REQUEST with unknown server error', () => {
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_REQUEST,
        payload: '',
        error: true
      })
    ).toEqual({
      ...initialState,
      error: {
        message: 'Unknown error',
        statusCode: '999'
      },
      fetching: false
    });
  });

  it('it handles NUMBERS_REQUEST with server error and message', () => {
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_REQUEST,
        payload: {
          message: 'This is the error message'
        },
        error: true
      })
    ).toEqual({
      ...initialState,
      error: {
        message: 'This is the error message',
        statusCode: -1
      },
      fetching: false
    });
  });

  it('it handles NUMBERS_REQUEST with server error, message and ApiError', () => {
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_REQUEST,
        payload: {
          message: 'This is the error message',
          name: 'ApiError',
          status: 33
        },
        error: true
      })
    ).toEqual({
      ...initialState,
      error: {
        message: 'This is the error message',
        statusCode: 33
      },
      fetching: false
    });
  });

  it('it handles NUMBERS_REQUEST with server error, message and RequestError', () => {
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_REQUEST,
        payload: {
          message: 'This is the error message',
          name: 'RequestError',
          status: 33
        },
        error: true
      })
    ).toEqual({
      ...initialState,
      error: {
        message: 'Dial backend is not currently available.',
        statusCode: 31
      },
      fetching: false
    });
  });

  it('it handles NUMBERS_SUCCESS', () => {
    const payload = ['123', '456'];
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      numbers: payload,
      error: undefined
    });
  });

  it('it handles NUMBERS_SUCCESS with server error', () => {
    const error = {
      message: 'Very nested message',
      code: 'Very nested error code'
    };
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_SUCCESS,
        payload: {
          error: true,
          response: {
            result: {
              error
            }
          }
        }
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      error: {
        message: error.message,
        statusCode: error.code
      }
    });
  });

  it('it handles NUMBERS_FAILURE', () => {
    const payload = ['123', '456'];
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      error: {
        message: 'Unable to connect to the Dial Backend',
        statusCode: 'API-1'
      }
    });
  });

  it('it handles NUMBERS_SET_ACTIVE', () => {
    const payload = '123';
    expect(
      reducer(initialState, {
        type: actions.NUMBERS_SET_ACTIVE,
        phoneNumber: payload
      })
    ).toEqual({
      ...initialState,
      activeNumber: payload
    });
  });
});
