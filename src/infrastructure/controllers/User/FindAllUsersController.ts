import { FindAllUsersUseCase } from "@src/application/usecase/user/FindAllUsersUseCase";
import {
  HttpResponse,
  ok,
  serverError,
} from "@src/infrastructure/http/presentation/controllers/helpers";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
export class FindAllUsersController implements BaseController {
  constructor(private readonly usecase: FindAllUsersUseCase) {}
  async handle(): Promise<HttpResponse> {
    try {
      const output = await this.usecase.execute();
      return ok(output.users);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
