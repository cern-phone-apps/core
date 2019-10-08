import * as actions from '../../actions/users';

describe('ContactsActionFactory', () => {
  const TestHandler = {
    withAuth: ()=> ('header-example'),
    withRefresh: jest.fn()
  };

  const authActionFactory = actions.default;

  it('creates the correct endpoint for findUserByUsername()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/users/findByUsername/jonh doe',
        credentials: "include",
        method: 'GET',
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@search/PROFILE_REQUEST',
          '@@search/PROFILE_SUCCESS',
          '@@search/PROFILE_FAILURE'
        ]
      }
    };
    const findUserByUsername = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).findUserByUsername;

    expect(findUserByUsername("jonh doe")).toEqual(expectedResult);
  });

  it('creates the correct endpoint for findUserById()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/users/findById/12345',
        credentials: "include",
        method: 'GET',
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@search/PROFILE_REQUEST',
          '@@search/PROFILE_SUCCESS',
          '@@search/PROFILE_FAILURE'
        ]
      }
    };
    const findUserById = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).findUserById;

    expect(findUserById("12345")).toEqual(expectedResult);
  });

  it('creates the correct endpoint for searchUsers()', () => {
    const expectedResult = {
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://localhost:7075/api/v1/users/search/12345',
        credentials: "include",
        method: 'GET',
        headers: "header-example",
        options: { timeout: 3000 },
        types: [
          '@@search/SEARCH_REQUEST',
          '@@search/SEARCH_SUCCESS',
          '@@search/SEARCH_FAILURE'
        ]
      }
    };
    const searchUsers = authActionFactory(
      'http://localhost:7075',
      'desktop',
      TestHandler
    ).searchUsers;

    expect(searchUsers("12345")).toEqual(expectedResult);
  });
});