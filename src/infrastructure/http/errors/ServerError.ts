import { ApiError } from '@src/domain/errors';
import { HttpStatusCode } from '@src/infrastructure/http/presentation/controllers/helpers';

export class ServerError extends ApiError {
  constructor(stack: string) {
    super('Internal server error', HttpStatusCode.SERVER_ERROR);
    this.name = 'ServerError';
    this.stack = stack;
  }
}
