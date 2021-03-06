import * as numbersActions from '../actions/numbers';

const INITIAL_STATE = {
  fetching: false,
  error: undefined,
  activeNumber: undefined,
  numbers: {
    personal: [],
    shared: []
  }
};

function handleNumbersFailure(state, action) {
  let error;
  if (
    action.payload &&
    action.payload.response &&
    action.payload.response.result &&
    action.payload.response.result.error
  ) {
    error = {
      message: action.payload.response.result.error.message,
      statusCode: action.payload.response.result.error.code
    };
  } else {
    error = {
      message: 'Unable to connect to the Dial Backend',
      statusCode: 'API-1'
    };
  }

  return {
    ...state,
    fetching: false,
    error
  };
}

function handleServerError(state, action) {
  let message;
  let statusCode;
  if (action.payload.message) {
    if (action.payload.name === 'RequestError') {
      message = 'Dial backend is not currently available.';
      statusCode = 31;
    } else if (action.payload.name === 'ApiError') {
      message = action.payload.message;
      statusCode = action.payload.status ? action.payload.status : -1;
    } else {
      message = action.payload.message;
      statusCode = -1;
    }
  } else {
    message = 'Unknown error';
    statusCode = '999';
  }

  return {
    ...state,
    error: { message, statusCode }
  };
}

/**
 * Reducer used to handle the phone numbers of the current logged in user.
 *
 * @param state Current state of the application
 * @param action
 * @returns {{fetching, numbers, error}} The state with all the user's phone numbers
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case numbersActions.NUMBERS_REQUEST:
      if (action.error) {
        return handleServerError(state, action);
      }

      return {
        ...state,
        fetching: true,
        error: undefined
      };
    case numbersActions.NUMBERS_SUCCESS:
      if (action.payload.error) {
        return handleNumbersFailure(state, action);
      }

      return {
        ...state,
        fetching: false,
        numbers: action.payload,
        error: undefined
      };
    case numbersActions.NUMBERS_FAILURE:
      return handleNumbersFailure(state, action);
    case numbersActions.NUMBERS_SET_ACTIVE:
      return {
        ...state,
        activeNumber: action.phoneNumber
      };
    default:
      return state;
  }
};
