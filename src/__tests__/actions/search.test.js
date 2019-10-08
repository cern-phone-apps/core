import * as actions from '../../actions/search';

describe('Search synchronous actions', () => {
  it('creates an action on USER_SELECTED', () => {
    const user = {
      missed: true,
      incoming: true,
      startTime: 12345,
      toneCallId: '123456',
      callId: '123244'
    }
    const expectedAction = {
      type: "@@search/USER_SELECTED",
      user
    };
    expect(actions.selectUser(user)).toEqual(expectedAction);
  });

  it('creates an action on USER_NOT_SELECTED', () => {

    const expectedAction = {
      type: "@@search/USER_NOT_SELECTED",
    };
    expect(actions.unSelectUser()).toEqual(expectedAction);
  });

  it('creates an action on SEARCH_END', () => {

    const expectedAction = {
      type: "@@search/SEARCH_END",
    };
    expect(actions.endSearch()).toEqual(expectedAction);
  });

  it('creates an action on SEARCH_CLEAR', () => {

    const expectedAction = {
      type: "@@search/SEARCH_CLEAR",
    };
    expect(actions.clearSearchResults()).toEqual(expectedAction);
  });

});
