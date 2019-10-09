import reducer from '../../../reducers/contacts/emergencyModal';
import * as actions from '../../../actions/contacts';

describe('addContact reducer', () => {
  const initialState = {
    emergencyModalOpen: false
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles OPEN_EMERGENCY_MODAL', () => {
    expect(
      reducer(initialState, {
        type: actions.OPEN_EMERGENCY_MODAL
      })
    ).toEqual({
      ...initialState,
      emergencyModalOpen: true
    });
  });

  it('it handles CLOSE_EMERGENCY_MODAL', () => {
    expect(
      reducer(initialState, {
        type: actions.CLOSE_EMERGENCY_MODAL
      })
    ).toEqual({
      ...initialState,
      emergencyModalOpen: false
    });
  });
});
