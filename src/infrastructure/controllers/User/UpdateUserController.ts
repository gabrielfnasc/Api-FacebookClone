import { UpdateUserUseCase } from "../../../application/usecase/user/UpdateUserUseCase";
import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type UpdateUserRequestDto = {
  userId: string;
  name: string;
  email: string;
};

export class UpdateUserController implements BaseController {
  constructor(
    private readonly validator: Validator,
    private readonly usecase: UpdateUserUseCase
  ) {}
  async handle(request: UpdateUserRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      await this.usecase.execute(request);
      return ok("User updated successfully!");
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
