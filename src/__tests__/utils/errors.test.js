import * as errorFunctions from '../../util/errors';

describe('buildError tests', () => {
  it('tests buildError without params', () => {
    const expectedResult = {
      message: 'Unknown error',
      statusCode: 999
    };
    const result = errorFunctions.buildError();
    expect(result).toEqual(expectedResult);
  });

  it('tests buildError with params', () => {
    const expectedResult = {
      message: 'This is the message',
      statusCode: 111
    };
    const result = errorFunctions.buildError(
      expectedResult.message,
      expectedResult.statusCode
    );
    expect(result).toEqual(expectedResult);
  });
});

describe('buildApiErrorFromAction tests', () => {
  it('tests buildApiErrorFromAction without params', () => {
    const expectedResult = {
      message: 'This is the message',
      statusCode: -1
    };

    const action = {
      payload: {
        message: 'This is the message'
      }
    };

    const result = errorFunctions.buildApiErrorFromAction(action);
    expect(result).toEqual(expectedResult);
  });
});

describe('handleErrorResponse tests', () => {
  it('tests handleErrorResponse without params', () => {
    const expectedResult = {
      message: 'This is the message',
      statusCode: -1
    };

    const action = {
      payload: {
        message: 'This is the message'
      }
    };

    const result = errorFunctions.handleErrorResponse(action);
    expect(result).toEqual(expectedResult);
  });

  it('tests handleErrorResponse with RequestError', () => {
    const expectedResult = {
      message: 'Dial backend is not currently available.',
      statusCode: 31
    };

    const action = {
      payload: {
        message: 'This is the message',
        name: 'RequestError'
      }
    };

    const result = errorFunctions.handleErrorResponse(action);
    expect(result).toEqual(expectedResult);
  });

  it('tests handleErrorResponse with ApiError', () => {
    const expectedResult = {
      message: 'This is the message',
      statusCode: -1
    };

    const action = {
      payload: {
        message: 'This is the message',
        name: 'ApiError'
      }
    };

    const result = errorFunctions.handleErrorResponse(action);
    expect(result).toEqual(expectedResult);
  });
});

describe('createError tests', () => {
  it('tests createError with', () => {
    const expectedResult = {
      message: 'This is the message',
      statusCode: -1
    };

    const action = {
      payload: {
        message: 'This is the message',
        name: 'ApiError'
      }
    };

    const result = errorFunctions.createError(action);
    expect(result).toEqual(expectedResult);
  });

  it('tests createError without params', () => {
    const expectedResult = {
      message: 'Unknown error',
      statusCode: 999
    };

    const action = {
      payload: {}
    };

    const result = errorFunctions.createError(action);
    expect(result).toEqual(expectedResult);
  });
});

describe('errors tests', () => {
  it('tests errors with', () => {
    const expectedResult = 'This is the message';

    const action = {
        error: 'This is the message'
    };

    const result = errorFunctions.errors(action);
    expect(result).toEqual(expectedResult);
  });
});