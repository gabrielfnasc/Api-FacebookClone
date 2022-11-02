import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from '../../http/presentation/controllers/helpers/HttpHelper';
import { BaseController } from "../BaseController";

export type DeleteUserRequest = {
  userId: string;
};

export class DeleteUserController implements BaseController {
  constructor(private readonly usecase: ) {}
  async handle(request: DeleteUserRequest): Promise<HttpResponse> {
    try {
        await this.repository
    } catch (error) {
        return serverError(error as Error)
    }
  }
}
