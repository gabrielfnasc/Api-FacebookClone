import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type FindUserByIdControllerRequestDto = {
  userId: string;
};

export class FindUserByIdController implements BaseController {
  async handle(request: any): Promise<HttpResponse> {
    try {
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
