import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type FindCouncilByContentRequest = {
  content: string;
};

export class FindCouncilByContentController implements BaseController {
    constructor(private readonly usecase : ){}
  async handle(request: FindCouncilByContentRequest): Promise<HttpResponse> {
    try {
        await this.usecase.
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
