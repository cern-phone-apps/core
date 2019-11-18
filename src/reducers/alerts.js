import * as alertsActions from '../actions/alerts';

const INITIAL_STATE = {
  fetching: false,
  errors: undefined,
  alerts: [],
  lastFetch: null
};

function idExists(id, array) {
  for (let a = 0; array && array[a]; a++) if (array[a].id == id) return true;
  return false;
}

const alertsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case alertsActions.GET_ALERTS_REQUEST:
      return {
        ...state,
        fetching: true,
        errors: undefined
      };
    case alertsActions.SEEN_ALERT:
      let { alerts } = state;
      alerts = alerts.map(value => {
        if (value.id === action.id || (!action.id && !value.id))
          value.seen = true;
        return value;
      });
      return {
        ...state,
        alerts: alerts
      };

    case alertsActions.GET_ALERTS_SUCCESS:
      const alertslist = state.alerts;
      let new_state = alertslist;
      for (let i = 0; action.payload && action.payload[i]; i++) {
        if (!idExists(action.payload[i].id, alertslist) && action.payload[i].state)
          new_state.push({ ...action.payload[i], seen: false });
      }
      return {
        ...state,
        fetching: false,
        alerts: new_state,
        errors: undefined,
        lastFetch: Date.now()
      };

    case alertsActions.GET_ALERTS_FAILURE:
      return {
        ...state,
        fetching: false,
        errors: 'Error fetching alerts',
        lastFetch: Date.now()
      };
    default:
      return state;
  }
};

export default alertsReducer;
