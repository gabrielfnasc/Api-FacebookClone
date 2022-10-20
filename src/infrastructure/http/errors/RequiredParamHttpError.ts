import { ApiError } from "../../../domain/erros/ApiError";
import { HttpStatusCode } from "../../http/presentation/controllers/helpers/HttpStatusCode";

export class RequiredParamHttpError extends ApiError {
  constructor(paramName: string) {
    super(`${paramName} é obrigatório!`, HttpStatusCode.BAD_REQUEST);
    this.name = "RequiredParamHttpError";
  }
}
