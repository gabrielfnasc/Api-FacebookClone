import { ApiError } from "../../../domain/erros/ApiError";
import { HttpStatusCode } from "../presentation/controllers/helpers/HttpStatusCode";

export class UnauthorizedHttpError extends ApiError {
  constructor() {
    super("Acesso denied.", HttpStatusCode.UNAUTHORIZED);
    this.name = "UnauthorizedHttpError";
    Object.setPrototypeOf(this, UnauthorizedHttpError.prototype);
  }
}
