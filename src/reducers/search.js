import * as searchActions from '../actions/search';

const INITIAL_STATE = {
  userSelected: false,
  searching: false,
  searchEnable: false
};

function setUserSelected(state, action) {
  return {
    ...state,
    user: action.user,
    userSelected: true
  };
}

function setUserNotSelected(state) {
  return {
    ...state,
    userSelected: false
  };
}

function makeSearchRequest(state) {
  return {
    ...state,
    searching: true,
    searchEnable: true
  };
}

function setSearchFinished(state) {
  return {
    ...state,
    searching: false,
    searchEnable: false
  };
}

function setSearchSuccess(state) {
  return {
    ...state,
    searching: false
  };
}

function setSearchFailure(state) {
  return {
    ...state,
    searching: false
  };
}

/**
 * Reducer used for the search state.
 *
 * @param state
 * @param action
 * @returns {{userSelected: boolean, value: string, searchResults: Array}}
 */
const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActions.USER_SELECTED:
      return setUserSelected(state, action);
    case searchActions.USER_NOT_SELECTED:
      return setUserNotSelected(state);
    case searchActions.SEARCH_REQUEST:
      return makeSearchRequest(state);
    case searchActions.SEARCH_END:
      return setSearchFinished(state);
    case searchActions.SEARCH_CLEAR:
      return {
        ...state
      };
    case searchActions.SEARCH_SUCCESS:
      return setSearchSuccess(state);
    case searchActions.SEARCH_FAILURE:
      return setSearchFailure(state);

    default:
      return state;
  }
};

export default search;
