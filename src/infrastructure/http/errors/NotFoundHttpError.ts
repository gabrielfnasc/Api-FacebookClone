import { ApiError } from "../../../domain/erros/ApiError";
import { HttpStatusCode } from "../../http/presentation/controllers/helpers/HttpStatusCode";

export class NotFoundHttpError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, NotFoundHttpError.prototype);
  }
}
