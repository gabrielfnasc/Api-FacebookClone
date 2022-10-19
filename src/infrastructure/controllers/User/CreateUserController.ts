import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { created, serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type CreateUserControllerRequest = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserController implements BaseController {
    constructor(private readonly usecase : ){}
  async handle(request: CreateUserControllerRequest): Promise<HttpResponse> {
    try {
      const { name, email, password } = request;
      const output = await this.usecase
      return created(output);
    } catch (error) {
      return serverError();
    }
  }
}
