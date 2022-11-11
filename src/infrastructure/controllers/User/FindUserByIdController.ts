import { FindUserByIdUseCase } from "../../../application/usecase/user/FindUserByIdUseCase";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type FindUserByIdControllerRequestDto = {
  userId: string;
};

export class FindUserByIdController implements BaseController {
  constructor(private readonly usecase: FindUserByIdUseCase) {}
  async handle(
    request: FindUserByIdControllerRequestDto
  ): Promise<HttpResponse> {
    try {
      const output = await this.usecase.execute(request);
      return ok(output.user);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
