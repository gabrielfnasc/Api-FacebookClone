import { CreateCouncilUseCase } from "../../../../application/usecase/council/business/CreateCouncilUseCase";
import { Council } from "../../../../domain/entities/Council";
import { Validator } from "../../../../domain/validator/validator";
import { created } from "../../../http/presentation/controllers/helpers/HttpHelper";
import { HttpResponse } from "../../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../../BaseController";

export type CreateCouncilRequest = {
  userId: string;
  council: Council;
};

export class CreateCouncilController implements BaseController {
  constructor(
    private readonly validator: Validator,
    private readonly usecase: CreateCouncilUseCase
  ) {}

  async handle(request: CreateCouncilRequest): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      const { userId, council } = request;
      await this.usecase.execute({
        userId,
        council,
        createdAt: new Date(),
      });
      return created({ message: "Council created successfully!" });
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
