export abstract class ApiError extends Error {
  constructor(public readonly message: string, readonly statusCode: number) {
    super(message);
  }
}
