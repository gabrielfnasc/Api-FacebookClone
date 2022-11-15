import { ApiError } from "@src/domain/erros";
import { HttpStatusCode } from "@src/infrastructure/http/presentation/controllers/helpers";

export class UnauthorizedHttpError extends ApiError {
  constructor() {
    super("Acesso denied.", HttpStatusCode.UNAUTHORIZED);
    this.name = "UnauthorizedHttpError";
    Object.setPrototypeOf(this, UnauthorizedHttpError.prototype);
  }
}
