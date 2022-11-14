import { FindCouncilByContentUseCase } from "@src/application/usecase/council";
import { Validator } from "@src/domain/validator/validator";
import { HttpResponse } from "@src/infrastructure/http/presentation/controllers/helpers";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type FindCouncilByContentRequest = {
  content: string;
};

export class FindCouncilByContentController implements BaseController {
  constructor(
    private readonly usecase: FindCouncilByContentUseCase,
    private readonly validator: Validator
  ) {}
  async handle(request: FindCouncilByContentRequest): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      const output = await this.usecase.execute(request);
      return ok(output);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
