import { ApiError } from '@src/domain/errors';
import { HttpStatusCode } from '@src/infrastructure/http/presentation/controllers/helpers';

export class BadRequestHttpError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, BadRequestHttpError.prototype);
  }
}
