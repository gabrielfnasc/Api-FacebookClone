import { ApiError } from "../../domain/erros/ApiError";
import { HttpStatusCode } from "../../infrastructure/http/presentation/controllers/helpers/HttpStatusCode";

export class RequiredMaxLengthDomainError extends ApiError {
  constructor(paramName: string, maxLen: number) {
    super(
      `${paramName} deve ter no mínimo ${maxLen} caracteres`,
      HttpStatusCode.BAD_REQUEST
    );
    this.name = "RequiredMaxLengthError";
  }
}
