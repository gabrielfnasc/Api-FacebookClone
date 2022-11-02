import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type FindCouncilByContentRequest = {
  content: string;
};

export class FindCouncilByContentController implements BaseController {
  async handle(request: FindCouncilByContentRequest): Promise<HttpResponse> {
    try {
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
