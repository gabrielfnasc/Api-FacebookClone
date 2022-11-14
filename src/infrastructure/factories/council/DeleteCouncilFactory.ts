import { DeleteCouncilUseCase } from "@src/application/usecase/council";
import {
  ValidatorComposite,
  ValidatorRequiredParam,
} from "@src/application/validator";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { DeleteCouncilController } from "@src/infrastructure/controllers/council";
import {
  CouncilRepositoryMongoDb,
  UserRepositoryMongoDB,
} from "../../database/mongodb";

export class DeleteCouncilFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("councilId"),
    ]);

    const userRepoMongoDb = new UserRepositoryMongoDB();

    const councilRepoMongoDB = new CouncilRepositoryMongoDb();

    const usecase = new DeleteCouncilUseCase(
      councilRepoMongoDB,
      userRepoMongoDb
    );

    return new DeleteCouncilController(usecase, validatorRequest);
  }
}
