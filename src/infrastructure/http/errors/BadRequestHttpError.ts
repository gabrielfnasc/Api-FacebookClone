import { ApiError } from "../../../domain/erros/ApiError";
import { HttpStatusCode } from "../../http/presentation/controllers/helpers/HttpStatusCode";

export class BadRequestHttpError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, BadRequestHttpError.prototype);
  }
}
