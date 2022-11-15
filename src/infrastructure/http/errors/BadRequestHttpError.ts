import { ApiError } from "@src/domain/erros";
import { HttpStatusCode } from "@src/infrastructure/http/presentation/controllers/helpers";

export class BadRequestHttpError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, BadRequestHttpError.prototype);
  }
}
