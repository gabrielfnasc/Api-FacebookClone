import { FindAllCouncilsUseCase } from "@src/application/usecase/council/FindAllCouncilsUseCase";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { FindCouncilByContentController } from "@src/infrastructure/controllers/council";
import { FindAllCouncilsController } from "@src/infrastructure/controllers/council/FindAllCouncilsController";
import { CouncilRepositoryMongoDb } from "@src/infrastructure/database/mongodb";

export class FindAllCouncilsFactory {
  static build(): BaseController {
    const repo = new CouncilRepositoryMongoDb();
    const usecase = new FindAllCouncilsUseCase(repo);

    return new FindAllCouncilsController(usecase);
  }
}
