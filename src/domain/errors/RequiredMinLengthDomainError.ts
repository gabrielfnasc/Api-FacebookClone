import { ApiError } from "./ApiError";
import { HttpStatusCode } from "../../infrastructure/http/presentation/controllers/helpers/HttpStatusCode";

export class RequiredMinLengthDomainError extends ApiError {
  constructor(paramName: string, maxLen: number) {
    super(
      `${paramName} deve ter no mínimo ${maxLen} caracteres`,
      HttpStatusCode.BAD_REQUEST
    );
    this.name = "RequiredMinLengthError";
  }
}
