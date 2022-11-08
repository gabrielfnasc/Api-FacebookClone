import { DeleteUserUseCase } from "../../../application/usecase/user/DeleteUserUseCase";
import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type DeleteUserRequest = {
  userId: string;
};

export class DeleteUserController implements BaseController {
  constructor(
    private readonly usecase: DeleteUserUseCase,
    private readonly validator: Validator
  ) {}
  async handle(request: DeleteUserRequest): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      await this.usecase.execute(request);
      return ok({ message: "User successfully deleted!" });
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
