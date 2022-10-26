import { HttpStatusCode } from "../../infrastructure/http/presentation/controllers/helpers/HttpStatusCode";
import { ApiError } from "./ApiError";

export class AlreadyExistError extends ApiError {
  constructor(propertyName: string) {
    super(propertyName.concat(" already exists!"), HttpStatusCode.UNAUTHORIZED);
    this.name = "AlreadyExistsError";
  }
}
