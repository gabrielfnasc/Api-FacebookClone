import { ApiError } from "@src/domain/erros";
import { HttpStatusCode } from "@src/infrastructure/http/presentation/controllers/helpers";

export class RequiredParamHttpError extends ApiError {
  constructor(paramName: string) {
    super(`${paramName} é obrigatório!`, HttpStatusCode.BAD_REQUEST);
    this.name = "RequiredParamHttpError";
  }
}
