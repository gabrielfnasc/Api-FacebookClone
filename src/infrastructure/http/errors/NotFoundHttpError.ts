import { ApiError } from '@src/domain/errors';
import { HttpStatusCode } from '@src/infrastructure/http/presentation/controllers/helpers';

export class NotFoundHttpError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND);
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, NotFoundHttpError.prototype);
  }
}
