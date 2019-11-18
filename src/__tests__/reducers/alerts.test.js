import alertsReducer from '../../reducers/Alerts';
import * as alertsAction from '../../actions/Alerts';

describe('Alerts', () => {
    it('Alerts reducer returns correctly', () => {
      expect(alertsReducer(
        {
          fetching: false,
          errors: undefined,
          alerts: [],
          lastFetch: null
        },
        { type: '' }
      )).toStrictEqual({
          fetching: false,
          errors: undefined,
          alerts: [],
          lastFetch: null
        });
    });
    it('Alerts reducer returns list with new call', () => {
      expect(alertsReducer(
        {
          fetching: false,
          errors: undefined,
          alerts: [],
          lastFetch: null
        },
        { type: '@@alerts/ADD_RECENT_CALL' }
      )).toStrictEqual({
          fetching: false,
          errors: undefined,
          alerts: [],
          lastFetch: null
        });
    });
});
