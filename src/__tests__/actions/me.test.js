import configureMockStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import * as actions from '../../actions/me';

import fetchMock from "fetch-mock";

class TestHandler {
  static withAuth(headers = {}) {
    return state => ({
      ...headers,
      Authorization: 'Bearer 12345',
    });
  }
}

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('Me synchronous actions', () => {
  it('creates an action on SET_REMEMBER_NUMBER', () => {
    const rememberNumber = "12345"
    const expectedAction = {
      type: "@@user/SET_REMEMBER_NUMBER",
      rememberNumber
    };
    expect(actions.setRemberNumber(rememberNumber)).toEqual(expectedAction);
  });

  it('creates an action on SET_SEND_STATS', () => {
    const expectedAction = {
      type: "@@user/SET_SEND_STATS",
      sendStats: true
    };
    expect(actions.setSendStats(true)).toEqual(expectedAction);
  });
});

describe('MeActionFactory', () => {

  const meActionFactory = actions.default;

  it('creates the correct endpoint for getMe()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/me/',
        headers: expect.any(Function),
        method: 'GET',
        options: { timeout: 3000 },
        types: ['@@user/ME_REQUEST', '@@user/ME_SUCCESS', '@@user/ME_FAILURE']
      }
    };
    const getMe = meActionFactory('http://localhost:7075', 'desktop', TestHandler)
      .getMe;

    expect(getMe()).toEqual(expectedResult);
  });

  it('creates the correct endpoint to setDoNotDistub', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/me/',
        headers: expect.any(Function),
        body: '{}',
        method: 'PUT',
        options: { timeout: 3000 },
        types: [
          '@@status/SET_DO_NOT_DISTURB_REQUEST',
          '@@status/SET_DO_NOT_DISTURB_SUCCESS',
          '@@status/SET_DO_NOT_DISTURB_SUCCESS'
        ]
      }
    };
    const setUserDoNotDisturb = meActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).setUserDoNotDisturb;
    expect(setUserDoNotDisturb()).toEqual(expectedResult);
  });
});

// Unfortunately, the following async tests stopped working after upgrading
// redux-api-middleware to version 3.0.1.
// As of 7/10/2019 there is no fix yet for it

// describe('async /me actions', () => {
//   beforeEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });

//   it('get the user profile', async () => {
//     const body = {
//       personId: '12345',
//       lastName: 'Knope',
//       firstName: 'Leslie',
//       username: 'lesknope',
//       phone: '555 555 555',
//       mobile: '555 555 555',
//       email: 'leslie@pawnee.ch',
//       doNotDisturb: true
//     };

//     fetchMock.get(
//       `http://localhost:7075/api/v1/me/`,
//       { body: body, headers: { "content-type": "application/json" } }
//     );

//     const expectedActions = [
//       { type: '@@user/ME_REQUEST' },
//       { type: '@@user/ME_SUCCESS', payload: body }
//     ];
//     const store = mockStore({user: {}});

//     const getMe = meActionFactory('http://localhost:7075', 'desktop', TestHandler)
//       .getMe;

//     return store.dispatch(getMe()).then((result) => {
//       // return of async actions
//       console.log(result)
//       // expect(result).toEqual({});
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
