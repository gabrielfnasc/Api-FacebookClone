import { ApiError } from '../..//domain/errors/ApiError';
import { HttpStatusCode } from '../../infrastructure/http/presentation/controllers/helpers/HttpStatusCode';
export class InvalidEmailDomainError extends ApiError {
  constructor() {
    super(`Email inválido.`, HttpStatusCode.BAD_REQUEST);
    this.name = 'InvalidEmailError';
  }
}
