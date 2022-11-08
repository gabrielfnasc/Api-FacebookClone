import { Validator } from "../../../domain/validator/validator";
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from "../../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "../BaseController";

export type UpdateCouncilRequestDto = {
  userId: string;
  councilId: string;
};

export class UpdateCouncilController implements BaseController {
  constructor(private readonly validator: Validator,private readonly usecase :) {}
  async handle(request: UpdateCouncilRequestDto): Promise<HttpResponse> {
    try {

      this.validator.validate(request);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
