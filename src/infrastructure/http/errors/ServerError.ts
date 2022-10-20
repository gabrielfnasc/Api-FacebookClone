import { ApiError } from "../../../domain/erros/ApiError";
import { HttpStatusCode } from "../../http/presentation/controllers/helpers/HttpStatusCode";

export class ServerError extends ApiError {
  constructor(stack: string) {
    super("Internal server error", HttpStatusCode.SERVER_ERROR);
    this.name = "ServerError";
    this.stack = stack;
  }
}
