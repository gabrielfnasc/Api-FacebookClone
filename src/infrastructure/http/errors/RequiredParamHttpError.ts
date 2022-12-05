import { ApiError } from '@src/domain/errors';
import { HttpStatusCode } from '@src/infrastructure/http/presentation/controllers/helpers';

export class RequiredParamHttpError extends ApiError {
  constructor(paramName: string) {
    super(`${paramName} is required!`, HttpStatusCode.BAD_REQUEST);
    this.name = 'RequiredParamHttpError';
  }
}
