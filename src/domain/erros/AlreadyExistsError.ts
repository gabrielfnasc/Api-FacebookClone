import { HttpStatusCode } from "@src/infrastructure/http/presentation/controllers/helpers/HttpStatusCode";
import { ApiError } from "@src/domain/erros";

export class AlreadyExistError extends ApiError {
  constructor(propertyName: string) {
    super(propertyName.concat(" already exists!"), HttpStatusCode.UNAUTHORIZED);
    this.name = "AlreadyExistsError";
  }
}
