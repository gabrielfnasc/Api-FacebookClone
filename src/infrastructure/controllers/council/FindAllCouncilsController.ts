import { HttpResponse } from "@src/infrastructure/http/presentation/controllers/helpers";
import { BaseController } from "@src/infrastructure/controllers/BaseController";

export class FindAllCouncilsController implements BaseController {

    constructor(private readonly usecase : ){}
  async handle(): Promise<HttpResponse> {}
}
