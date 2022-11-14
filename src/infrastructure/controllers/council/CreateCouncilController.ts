import { CreateCouncilUseCase } from "@src/application/usecase/council";
import { Validator } from "@src/domain/validator/validator";
import { created } from "@src/infrastructure/http/presentation/controllers/helpers";
import { HttpResponse } from "@src/infrastructure/http/presentation/controllers/helpers";
import { serverError } from "@src/infrastructure/http/presentation/controllers/helpers";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { Type } from "@src/domain/entities";
import { Council } from "@src/domain/entities";
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
