import { DeleteCouncilUseCase } from "../../../application/usecase/council/DeleteCouncilUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { BaseController } from "../../controllers/BaseController";
import { DeleteCouncilController } from "../../controllers/council/DeleteCouncilController";
import { CouncilRepositoryMongoDb } from "../../database/mongodb/CouncilRepositoryMongoDb";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

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
