import { ApiError } from '@src/domain/erros/ApiError';
import { HttpStatusCode } from '@src/infrastructure/http/helper/HttpStatusCode';

export class RequiredMaxLengthDomainError extends ApiError {
  constructor(paramName: string, maxLen: number) {
    super(`${paramName} deve ter no mínimo ${maxLen} caracteres`, HttpStatusCode.BAD_REQUEST);
    this.name = 'RequiredMaxLengthError';
  }
}
