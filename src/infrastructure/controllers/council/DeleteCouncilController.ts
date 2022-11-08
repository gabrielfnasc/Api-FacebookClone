import { DeleteCouncilUseCase } from "../../../application/usecase/council/DeleteCouncilUseCase";
import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

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
