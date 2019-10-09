import reducer from '../../reducers/profile';
import * as actions from '../../actions/users';

describe('profile reducer', () => {
  const initialState = {
    profile: {},
    fetching: false,
    error: undefined
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles PROFILE_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.PROFILE_REQUEST
      })
    ).toEqual({
      ...initialState,
      profile: {},
      fetching: true,
      error: undefined
    });
  });

  it('it handles PROFILE_SUCCESS', () => {
    const payload = { name: 'John', lastName: 'Doe' };
    expect(
      reducer(initialState, {
        type: actions.PROFILE_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      profile: payload,
      error: undefined
    });
  });

  it('it handles PROFILE_FAILURE', () => {
    const payload = {
      name: 'John',
      lastName: 'Doe',
      error: 'This is an error'
    };
    expect(
      reducer(initialState, {
        type: actions.PROFILE_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      profile: {},
      error: payload.error
    });
  });
});
