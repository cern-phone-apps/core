import * as meActions from '../actions/me';

const INITIAL_STATE = {
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

/**
 * Reducer used to set the current logged in user information.
 *
 * @param state User state
 * @param action Action that will be triggered
 * @returns {*} A dict with the new state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case meActions.ME_REQUEST:
      return {
        ...state,
        fetching: true,
        error: {}
      };
    case meActions.ME_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        mobile: action.payload.mobile,
        phone: action.payload.phone,
        username: action.payload.username,
        doNotDisturb: action.payload.doNotDisturb,
        personId: action.payload.personId,
        error: {},
        fetching: false
      };
    case meActions.ME_FAILURE:
      return {
        ...state,
        email: null,
        firstName: null,
        lastName: null,
        mobile: null,
        phone: null,
        username: null,
        personId: null,
        doNotDisturb: null,
        error: action.payload.error,
        fetching: false
      };
    case meActions.SET_REMEMBER_NUMBER:
      return {
        ...state,
        rememberNumber: action.rememberNumber
      };
    case meActions.SET_SEND_STATS:
      return {
        ...state,
        sendStats: action.sendStats
      };
    default:
      return state;
  }
};
