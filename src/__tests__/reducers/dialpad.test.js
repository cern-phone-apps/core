import reducer from '../../reducers/dialpad';
import * as actions from '../../actions/dialpad';

describe('dialpad reducer', () => {
  const initialState = {
    display: false,
    value: ''
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles REGISTRATION_REQUEST', () => {
    const value = '123';

    expect(
      reducer(undefined, {
        type: actions.DIALPAD_NUMBER_UPDATED,
        newValue: value
      })
    ).toEqual({
      ...initialState,
      value: '123'
    });
  });

  it('it handles TOGGLE_DIALPAD', () => {
    const display = true;

    expect(
      reducer(undefined, {
        type: actions.TOGGLE_DIALPAD,
        newStatus: display
      })
    ).toEqual({
      ...initialState,
      display
    });
  });
});
