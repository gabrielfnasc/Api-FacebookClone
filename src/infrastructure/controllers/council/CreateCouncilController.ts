import { CreateCouncilUseCase } from "../../../application/usecase/council/CreateCouncilUseCase";
import { Validator } from "../../../domain/validator/validator";
import { created } from "../../http/presentation/controllers/helpers/HttpHelper";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";
import { Type } from "../../../domain/entities/Type";
import { Council } from "../../../domain/entities/Council";
import { v4 as uuid } from "uuid";
export type CreateCouncilRequest = {
  userId: string;
  type: Type;
  content: string;
};

export class CreateCouncilController implements BaseController {
  constructor(
    private readonly validator: Validator,
    private readonly usecase: CreateCouncilUseCase
  ) {}

  async handle(request: CreateCouncilRequest): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      const { userId, content, type } = request;
      const council: Council = {
        content: content,
        id: uuid(),
        createdAt: new Date(),
        type: type,
      };
      await this.usecase.execute({
        userId,
        council,
      });
      return created({ message: "Council created successfully!" });
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
