import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type UpdateUserRequestDto = {
  userId: string;
  name: string;
  email: string;
};

export class UpdateUserController implements BaseController {
  constructor(private readonly validator: Validator) {}
  async handle(request: UpdateUserRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      return ok("tet=s");
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
