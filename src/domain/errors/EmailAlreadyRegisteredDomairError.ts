import { ApiError } from '../../domain/errors/ApiError';
import { HttpStatusCode } from '../../infrastructure/http/presentation/controllers/helpers/HttpStatusCode';

export class EmailAlreadyRegisteredError extends ApiError {
  constructor() {
    super('Email já cadastrado.', HttpStatusCode.BAD_REQUEST);
    this.name = 'EmailAlreadyRegisteredError';
  }
}
