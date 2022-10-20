import { ApiError } from '@src/domain/erros/ApiError';
import { HttpStatusCode } from '@src/infrastructure/http/helper/HttpStatusCode';

export class EmailAlreadyRegisteredError extends ApiError {
  constructor() {
    super('Email já cadastrado.', HttpStatusCode.BAD_REQUEST);
    this.name = 'EmailAlreadyRegisteredError';
  }
}
