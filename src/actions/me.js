import { RSAA } from 'redux-api-middleware';

export const SET_REMEMBER_NUMBER = '@@user/SET_REMEMBER_NUMBER';

export const SET_SEND_STATS = '@@user/SET_SEND_STATS';

export const ME_REQUEST = '@@user/ME_REQUEST';
export const ME_SUCCESS = '@@user/ME_SUCCESS';
export const ME_FAILURE = '@@user/ME_FAILURE';

export const SET_DO_NOT_DISTURB_REQUEST = '@@status/SET_DO_NOT_DISTURB_REQUEST';
export const SET_DO_NOT_DISTURB_SUCCESS = '@@status/SET_DO_NOT_DISTURB_SUCCESS';
export const SET_DO_NOT_DISTURB_FAILURE = '@@status/SET_DO_NOT_DISTURB_FAILURE';

const API_PATH = '/api/v1';

export function setRemberNumber(value) {
  return {
    type: SET_REMEMBER_NUMBER,
    rememberNumber: value
  };
}

export function setSendStats(value) {
  return {
    type: SET_SEND_STATS,
    sendStats: value
  };
}

export default function(
  apiEndpoint,
  type = 'mobile',
  tokenHandlerClass = null
) {
  const buildApiURL = path => `${apiEndpoint}${API_PATH}${path}`;
  const authHandlerClass = tokenHandlerClass;

  return {
    getMe: () => ({
      [RSAA]: {
        endpoint: buildApiURL('/me/'),
        method: 'GET',
        options: { timeout: 3000 },
        headers: authHandlerClass.withAuth({
          'Content-Type': 'application/json'
        }),
        types: [ME_REQUEST, ME_SUCCESS, ME_FAILURE]
      }
    }),
    setUserDoNotDisturb: value => ({
      [RSAA]: {
        endpoint: buildApiURL('/me/'),
        method: 'PUT',
        options: { timeout: 3000 },
        headers: authHandlerClass.withAuth({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ doNotDisturb: value }),
        types: [
          SET_DO_NOT_DISTURB_REQUEST,
          SET_DO_NOT_DISTURB_SUCCESS,
          SET_DO_NOT_DISTURB_FAILURE
        ]
      }
    })
  };
}
