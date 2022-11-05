import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type LoginControllerRequestDto = {
  email: string;
  password: string;
};

export class LoginController implements BaseController {
  constructor(private readonly validator: Validator) {}
  async handle(request: LoginControllerRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
