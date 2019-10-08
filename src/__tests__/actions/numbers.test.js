import * as actions from '../../actions/numbers';

describe('Numbers synchronous actions', () => {
  it('creates an action on NUMBERS_SET_ACTIVE', () => {
    const phoneNumber = "12345"
    const expectedAction = {
      type: "@@calls/NUMBERS_SET_ACTIVE",
      phoneNumber
    };
    expect(actions.setActiveNumber(phoneNumber)).toEqual(expectedAction);
  });
});

describe('NumbersActionFactory', () => {
  const TestHandler = {
    withAuth: ()=> ('header-example'),
    withRefresh: jest.fn()
  };

  const authActionFactory = actions.default;

  it('creates the correct endpoint for getUserPhoneNumbers()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/numbers/',
        credentials: "include",
        method: 'GET',
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@calls/NUMBERS_REQUEST',
          '@@calls/NUMBERS_SUCCESS',
          '@@calls/NUMBERS_FAILURE'
        ]
      }
    };
    const getUserPhoneNumbers = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).getUserPhoneNumbers;

    expect(getUserPhoneNumbers()).toEqual(expectedResult);
  });
});