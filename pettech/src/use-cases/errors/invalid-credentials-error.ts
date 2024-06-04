export class InvalidCredentialsError extends Error {
  constructor() {
    super('Username or password is incorrect')
  }
}
