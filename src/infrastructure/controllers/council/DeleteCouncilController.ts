import { DeleteCouncilUseCase } from "../../../application/usecase/council/DeleteCouncilUseCase";
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
  constructor(private readonly usecase: DeleteCouncilUseCase) {}
  async handle(request: DeleteCouncilRequestDto): Promise<HttpResponse> {
    try {
      await this.usecase.execute(request);
      return ok("Council deleted successfully!");
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
