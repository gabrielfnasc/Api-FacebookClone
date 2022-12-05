import { ApiError } from '../../domain/errors/ApiError';
import { HttpStatusCode } from '../../infrastructure/http/presentation/controllers/helpers/HttpStatusCode';

export class PhoneInvalidDomainError extends ApiError {
  constructor() {
    super(`phone inválido`, HttpStatusCode.BAD_REQUEST);
    this.name = 'InvalidPhoneError';
  }
}
