import reducer from '../../reducers/call_forwarding';
import * as actions from '../../actions/call_forwarding';

describe('calls reducer', () => {
  const initialState = {
    localForwardList: [],
    localRingingList: [],
    enabledRingingList: [],
    enabledForwardNumber: '',
    fetchingStatus: false,
    status: {},
    lastOperationResult: null
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles ADD_LOCAL_FORWARD_NUMBER', () => {
    const number = '12345';

    expect(
      reducer(initialState, {
        type: actions.ADD_LOCAL_FORWARD_NUMBER,
        number
      })
    ).toEqual({
      ...initialState,
      localForwardList: [{ text: number, value: number }]
    });
  });

  it('it handles REMOVE_LOCAL_FORWARD_NUMBER', () => {
    const number = '12345';

    expect(
      reducer(initialState, {
        type: actions.REMOVE_LOCAL_FORWARD_NUMBER,
        number
      })
    ).toEqual({
      ...initialState,
      localForwardList: [{ text: number, value: number }]
    });
  });

  it('it handles CLEAR_LOCAL_FORWARD_LIST', () => {
    expect(
      reducer(initialState, {
        type: actions.CLEAR_LOCAL_FORWARD_LIST
      })
    ).toEqual({
      ...initialState,
      localForwardList: []
    });
  });

  it('it handles SET_ENABLED_FORWARD_NUMBER', () => {
    const newNumber = '12345';

    expect(
      reducer(initialState, {
        type: actions.SET_ENABLED_FORWARD_NUMBER,
        newNumber
      })
    ).toEqual({
      ...initialState,
      enabledForwardNumber: newNumber
    });
  });

  it('it handles ADD_LOCAL_RINGING_NUMBER', () => {
    const number = '12345';

    expect(
      reducer(initialState, {
        type: actions.ADD_LOCAL_RINGING_NUMBER,
        number
      })
    ).toEqual({
      ...initialState,
      localRingingList: [{ text: number, value: number }]
    });
  });

  it('it handles ADD_LOCAL_RINGING_NUMBER', () => {
    const number = '12345';

    expect(
      reducer(initialState, {
        type: actions.ADD_LOCAL_RINGING_NUMBER,
        number
      })
    ).toEqual({
      ...initialState,
      localRingingList: [{ text: number, value: number }]
    });
  });

  it('it handles REMOVE_LOCAL_RINGING_NUMBER', () => {
    const number = { value: '12345' };

    expect(
      reducer(
        {
          ...initialState,
          localRingingList: [{ text: '12345', value: '12345' }]
        },
        {
          type: actions.REMOVE_LOCAL_RINGING_NUMBER,
          number
        }
      )
    ).toEqual({
      ...initialState,
      localRingingList: []
    });
  });

  it('it handles CLEAR_LOCAL_RINGING_LIST', () => {
    expect(
      reducer(initialState, {
        type: actions.CLEAR_LOCAL_RINGING_LIST
      })
    ).toEqual({
      ...initialState,
      localRingingList: []
    });
  });

  it('it handles SET_ENABLED_RINGING_LIST', () => {
    const newList = ['123', '456'];

    expect(
      reducer(initialState, {
        type: actions.SET_ENABLED_RINGING_LIST,
        newList
      })
    ).toEqual({
      ...initialState,
      enabledRingingList: newList
    });
  });

  it('it handles CALL_FORWARDING_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.CALL_FORWARDING_REQUEST
      })
    ).toEqual({
      ...initialState,
      fetchingStatus: true
    });
  });

  it('it handles CALL_FORWARDING_SUCCESS', () => {
    const payload = { value: 'This is the payload' };

    expect(
      reducer(initialState, {
        type: actions.CALL_FORWARDING_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      fetchingStatus: false,
      status: payload
    });
  });

  it('it handles CALL_FORWARDING_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: actions.CALL_FORWARDING_FAILURE
      })
    ).toEqual({
      ...initialState,
      fetchingStatus: false
    });
  });

  it('it handles SUCCESS and FAILURE enabling and disabling actions ', () => {
    const payload = { value: 'This is the payload' };
    expect(
      reducer(initialState, {
        type: actions.ENABLE_CALL_FORWARDING_ACTIONS.SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: payload
    });

    expect(
      reducer(initialState, {
        type: actions.ENABLE_CALL_FORWARDING_ACTIONS.FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: payload
    });

    expect(
      reducer(initialState, {
        type: actions.ENABLE_SIMULTANEOUS_RINGING_ACTIONS.SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: payload
    });

    expect(
      reducer(initialState, {
        type: actions.ENABLE_SIMULTANEOUS_RINGING_ACTIONS.FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: payload
    });

    expect(
      reducer(initialState, {
        type: actions.DISABLE_CALL_FORWARDING_ACTIONS.SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: payload
    });

    expect(
      reducer(initialState, {
        type: actions.DISABLE_CALL_FORWARDING_ACTIONS.FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: payload
    });

  });

  it('it handles CLEAR_LAST_OPERATION', () => {
    expect(
      reducer(initialState, {
        type: actions.CLEAR_LAST_OPERATION
      })
    ).toEqual({
      ...initialState,
      lastOperationResult: null
    });
  });

});
