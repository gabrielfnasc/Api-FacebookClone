import { ApiError } from '@src/domain/erros/ApiError';
import { HttpStatusCode } from '@src/infrastructure/http/helper/HttpStatusCode';

export class PhoneInvalidDomainError extends ApiError {
  constructor() {
    super(`phone inválido`, HttpStatusCode.BAD_REQUEST);
    this.name = 'InvalidPhoneError';
  }
}
