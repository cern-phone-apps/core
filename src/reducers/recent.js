import * as recentCallsActions from '../actions/recent_calls';

const INITIAL_STATE = {
  lastRecentId: 0,
  recentCalls: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case recentCallsActions.ADD_RECENT_CALL: {
      const { remote } = action;
      const lastRecentId = state.lastRecentId + 1;
      const checkLimit = (list) => {
        if (list.length >= 50)
          list.pop();
        return (list);
      };
      return {
        ...state,
        lastRecentId,
        recentCalls: [
          {
            id: lastRecentId,
            name: remote.name,
            phoneNumber: remote.phoneNumber,
            endTime: remote.endTime,
            startTime: remote.startTime,
            missed: remote.missed,
            incoming: remote.incoming
          },
          ...checkLimit(state.recentCalls)
        ]
      };
    }

    case recentCallsActions.CLEAR_RECENT_CALLS:
      return {
        ...state,
        lastRecentId: 0,
        recentCalls: []
      };
    default:
      return state;
  }
};
