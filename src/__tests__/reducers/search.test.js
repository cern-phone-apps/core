import reducer from '../../reducers/search';
import * as actions from '../../actions/search';

describe('recent calls reducer', () => {
  const initialState = {
    userSelected: false,
    searching: false,
    searchEnable: false
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles USER_SELECTED', () => {
    const user = {
      name: 'User name'
    };
    expect(
      reducer(initialState, {
        type: actions.USER_SELECTED,
        user
      })
    ).toEqual({
      ...initialState,
      user,
      userSelected: true
    });
  });

  it('it handles USER_NOT_SELECTED', () => {
    expect(
      reducer(initialState, {
        type: actions.USER_NOT_SELECTED
      })
    ).toEqual({
      ...initialState,
      userSelected: false
    });
  });

  it('it handles SEARCH_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.SEARCH_REQUEST
      })
    ).toEqual({
      ...initialState,
      searchEnable: true,
      searching: true
    });
  });

  it('it handles SEARCH_END', () => {
    expect(
      reducer(initialState, {
        type: actions.SEARCH_END
      })
    ).toEqual({
      ...initialState,
      searching: false,
      searchEnable: false
    });
  });

  it('it handles SEARCH_CLEAR', () => {
    expect(
      reducer(initialState, {
        type: actions.SEARCH_CLEAR
      })
    ).toEqual({
      ...initialState
    });
  });

  it('it handles SEARCH_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.SEARCH_SUCCESS
      })
    ).toEqual({
      ...initialState,
      searching: false
    });
  });

  it('it handles SEARCH_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: actions.SEARCH_FAILURE
      })
    ).toEqual({
      ...initialState,
      searching: false
    });
  });
});
