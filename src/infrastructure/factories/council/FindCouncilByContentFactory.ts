import { FindCouncilByContentUseCase } from "@src/application/usecase/council";
import { ValidatorRequiredParam } from "@src/application/validator";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { FindCouncilByContentController } from "@src/infrastructure/controllers/council";
import { CouncilRepositoryMongoDb } from "@src/infrastructure/database/mongodb";

export class FindCouncilByContentFactory {
  static build(): BaseController {
    const repo = new CouncilRepositoryMongoDb();

    const validatorRequest = new ValidatorRequiredParam("content");
    const usecase = new FindCouncilByContentUseCase(repo);
    return new FindCouncilByContentController(usecase, validatorRequest);
  }
}
