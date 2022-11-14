import { DeleteCouncilUseCase } from "@src/application/usecase/council";
import { Validator } from "@src/domain/validator/validator";
import { HttpResponse } from "@src/infrastructure/http/presentation/controllers/helpers";
import {
  ok,
  serverError,
} from "@src/infrastructure/http/presentation/controllers/helpers";
import { BaseController } from "@src/infrastructure/controllers/BaseController";

export type DeleteCouncilRequestDto = {
  councilId: string;
  userId: string;
};

export class DeleteCouncilController implements BaseController {
  constructor(
    private readonly usecase: DeleteCouncilUseCase,
    private readonly validator: Validator
  ) {}
  async handle(request: DeleteCouncilRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      await this.usecase.execute(request);
      return ok("Council deleted successfully!");
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
