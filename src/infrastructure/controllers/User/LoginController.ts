import { LoginUseCase } from "../../../application/usecase/user/LoginUseCase";
import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type LoginControllerRequestDto = {
  email: string;
  password: string;
};

export class LoginController implements BaseController {
  constructor(
    private readonly usecase: LoginUseCase,
    private readonly validator: Validator
  ) {}
  async handle(request: LoginControllerRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      const output = await this.usecase.execute(request);
      return ok(output);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
