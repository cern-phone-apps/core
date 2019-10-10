import reducer from '../../reducers/recent';
import * as actions from '../../actions/recent_calls';

describe('recent calls reducer', () => {
  const initialState = {
    lastRecentId: 0,
    recentCalls: []
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles ADD_RECENT_CALL', () => {
    const remote = {
      name: 'John Doe',
      phoneNumber: '123456',
      mised: true,
      incoming: false,
      startTime: 123456,
      endTime: 123457
    };

    expect(
      reducer(initialState, {
        type: actions.ADD_RECENT_CALL,
        remote
      })
    ).toEqual({
      ...initialState,
      lastRecentId: 1,
      recentCalls: [
        {
          id: 1,
          name: remote.name,
          phoneNumber: remote.phoneNumber,
          endTime: remote.endTime,
          startTime: remote.startTime,
          missed: remote.missed,
          incoming: remote.incoming
        }
      ]
    });
  });

  it('it handles CLEAR_RECENT_CALLS', () => {
    const remote = {
      name: 'John Doe',
      phoneNumber: '123456',
      mised: true,
      incoming: false,
      startTime: 123456,
      endTime: 123457
    };

    expect(
      reducer(initialState, {
        type: actions.CLEAR_RECENT_CALLS,
        remote
      })
    ).toEqual({
      ...initialState,
      lastRecentId: 0,
      recentCalls: []
    });
  });
});
