import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type DeleteCouncilRequestDto = {
  councilId: string;
  userId: string;
};

export class DeleteCouncilController implements BaseController {
  async handle(request: DeleteCouncilController): Promise<HttpResponse> {
    try {
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
