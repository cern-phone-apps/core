import reducer from '../../reducers/do_not_disturb';
import * as actions from '../../actions/me';

describe('do_not_disturb reducer', () => {
  const initialState = {
    doNotDisturb: false,
    fetching: false
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('it handles SET_DO_NOT_DISTURB_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.SET_DO_NOT_DISTURB_REQUEST,
      })
    ).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it('it handles SET_DO_NOT_DISTURB_SUCCESS', () => {

    const payload = {doNotDisturb: true};
    expect(
      reducer(initialState, {
        type: actions.SET_DO_NOT_DISTURB_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      fetching: false,
      doNotDisturb: true
    });
  });

  it('it handles SET_DO_NOT_DISTURB_FAILURE', () => {

    expect(
      reducer(initialState, {
        type: actions.SET_DO_NOT_DISTURB_FAILURE
      })
    ).toEqual({
      ...initialState,
      error: "Error updating do not disturb "
    });
  });

  // it('it handles SET_DO_NOT_DISTURB_FAILURE', () => {

  //   expect(
  //     reducer(initialState, {
  //       type: actions.SET_DO_NOT_DISTURB_FAILURE
  //     })
  //   ).toEqual({
  //     ...initialState,
  //     fetching: false,
  //     error: 'Error updating do not disturb '
  //   });
  // });

});