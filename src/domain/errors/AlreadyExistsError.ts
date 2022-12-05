import { HttpStatusCode } from '@src/infrastructure/http/presentation/controllers/helpers';
import { ApiError } from '@src/domain/errors';

export class AlreadyExistError extends ApiError {
  constructor(propertyName: string) {
    super(propertyName.concat(' already exists!'), HttpStatusCode.UNAUTHORIZED);
    this.name = 'AlreadyExistsError';
  }
}
