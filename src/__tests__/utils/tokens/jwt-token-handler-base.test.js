import JwtTokenHandlerBase, {
  NotImplementedError
} from '../../../util/tokens/JwtTokenHandlerBase';

describe('JwtTokenHandlerBase test', () => {
  it('creates an instance of type object', () => {
    const handler = new JwtTokenHandlerBase();
    expect(typeof handler).toBe('object');
  });

  it('Triggers NotImplement on getAccessToken', () => {
    expect(() => JwtTokenHandlerBase.getAccessToken()).toThrow(
      NotImplementedError
    );
  });

  it('Triggers NotImplement on isAccessTokenExpired', () => {
    expect(() => JwtTokenHandlerBase.isAccessTokenExpired()).toThrow(
      NotImplementedError
    );
  });

  it('Triggers NotImplement on getRefreshToken', () => {
    expect(() => JwtTokenHandlerBase.getRefreshToken()).toThrow(
      NotImplementedError
    );
  });

  it('Triggers NotImplement on isRefreshTokenExpired', () => {
    expect(() => JwtTokenHandlerBase.isRefreshTokenExpired()).toThrow(
      NotImplementedError
    );
  });

  it('Triggers NotImplement on isAuthenticated', () => {
    expect(() => JwtTokenHandlerBase.isAuthenticated()).toThrow(
      NotImplementedError
    );
  });

  it('Triggers NotImplement on withAuth', () => {
    expect(() => JwtTokenHandlerBase.withAuth()).toThrow(
      NotImplementedError
    );
  });

  it('Triggers NotImplement on withRefresh', () => {
    expect(() => JwtTokenHandlerBase.withRefresh()).toThrow(
      NotImplementedError
    );
  });
});
