import { ApiError } from '@src/domain/erros/ApiError';
import { HttpStatusCode } from '@src/infrastructure/http/helper/HttpStatusCode';

export class InvalidEmailDomainError extends ApiError {
  constructor() {
    super(`Email inválido.`, HttpStatusCode.BAD_REQUEST);
    this.name = 'InvalidEmailError';
  }
}
