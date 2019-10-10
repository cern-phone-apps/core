export class NotImplementedError extends Error {}

export default class JwtTokenHandlerBase {
  static getAccessToken(state = null) {
    throw new NotImplementedError(
      'You have to implement the method getAccessToken!'
    );
  }

  static isAccessTokenExpired(state = null) {
    throw new NotImplementedError(
      'You have to implement the method isAccessTokenExpired!'
    );
  }

  static getRefreshToken(state = null) {
    throw new NotImplementedError(
      'You have to implement the method getRefreshToken!'
    );
  }

  static isRefreshTokenExpired(state = null) {
    throw new NotImplementedError(
      'You have to implement the method isRefreshTokenExpired!'
    );
  }

  static isAuthenticated(state = null) {
    throw new NotImplementedError(
      'You have to implement the method isAuthenticated!'
    );
  }

  static withAuth(headers = {}) {
    throw new NotImplementedError('You have to implement the method withAuth!');
  }

  static withRefresh(headers = {}) {
    throw new NotImplementedError(
      'You have to implement the method withRefresh!'
    );
  }
}
