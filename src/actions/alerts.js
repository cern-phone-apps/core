import { RSAA } from 'redux-api-middleware';

export const SEEN_ALERT = '@@alerts/GET_ALERTS_REQUEST';
export const GET_ALERTS_REQUEST = '@@alerts/GET_ALERTS_REQUEST';
export const GET_ALERTS_SUCCESS = '@@alerts/GET_ALERTS_SUCCESS';
export const GET_ALERTS_FAILURE = '@@alerts/GET_ALERTS_FAILURE';

const API_PATH = '/api/v1';

export default function (
  apiEndpoint,
  type = 'mobile',
  tokenHandlerClass = null
) {
  const buildApiURL = path => `${apiEndpoint}${API_PATH}${path}`;

  const authHandlerClass = tokenHandlerClass;

  return {
    getAlerts: () => ({
      [RSAA]: {
        endpoint: buildApiURL('/alerts/'),
        method: 'GET',
        credentials: 'include',
        options: { timeout: 3000 },
        headers: authHandlerClass.withAuth({
          'Content-Type': 'application/json'
        }),
        types: [GET_ALERTS_REQUEST, GET_ALERTS_SUCCESS, GET_ALERTS_FAILURE]
      }
    }),
    alertSeen: (id) => ({
      type: SEEN_ALERT
    })
  };
}
