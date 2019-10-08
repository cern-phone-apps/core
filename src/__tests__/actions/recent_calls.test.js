import * as actions from '../../actions/recent_calls';

describe('Recent Calls synchronous actions', () => {
  it('creates an action on CLEAR_RECENT_CALLS', () => {
    const expectedAction = {
      type: "@@call/CLEAR_RECENT_CALLS",
    };
    expect(actions.clearRecentCalls()).toEqual(expectedAction);
  });

  it('creates an action on ADD_RECENT_CALL', () => {
    const recentCall = {
      missed: true,
      incoming: true,
      startTime: 12345,
      toneCallId: '123456',
      callId: '123244'
    }
    const expectedAction = {
      ...recentCall,
      remote: recentCall,
      type: "@@call/ADD_RECENT_CALL",
    };
    expect(actions.addRecentCall(recentCall)).toEqual(expectedAction);
  });

});
