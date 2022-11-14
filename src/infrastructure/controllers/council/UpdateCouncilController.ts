import { UpdateCouncilUseCase } from "@src/application/usecase/council";
import { Validator } from "@src/domain/validator/validator";
import { HttpResponse } from "@src/infrastructure/http/presentation/controllers/helpers";
import {
  ok,
  serverError,
} from "@src/infrastructure/http/presentation/controllers/helpers";
import { BaseController } from "../BaseController";

export type UpdateCouncilRequestDto = {
  userId: string;
  councilId: string;
  content: string;
};

export class UpdateCouncilController implements BaseController {
  constructor(
    private readonly validator: Validator,
    private readonly usecase: UpdateCouncilUseCase
  ) {}

  async handle(request: UpdateCouncilRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      await this.usecase.execute(request);
      return ok("Council updated successfully!");
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
