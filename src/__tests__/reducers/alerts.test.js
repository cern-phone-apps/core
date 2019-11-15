import React from 'react';
import alertsReducer from '../../reducers/Alerts';

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
    )).toBe({
        fetching: false,
        errors: undefined,
        alerts: [],
        lastFetch: null
      });
  });
});
