import {
  HttpResponse,
  ok,
  serverError,
} from "@src/infrastructure/http/presentation/controllers/helpers";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { FindAllCouncilsUseCase } from "@src/application/usecase/council/FindAllCouncilsUseCase";

export class FindAllCouncilsController implements BaseController {
  constructor(private readonly usecase: FindAllCouncilsUseCase) {}
  async handle(): Promise<HttpResponse> {
    try {
      const output = await this.usecase.execute();
      return ok(output.councils);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
