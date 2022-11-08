import { UpdateCouncilUseCase } from "../../../application/usecase/council/UpdateCouncilUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { BaseController } from "../../controllers/BaseController";
import { UpdateCouncilController } from "../../controllers/council/UpdateCouncilController";
import { CouncilRepositoryMongoDb } from "../../database/mongodb/CouncilRepositoryMongoDb";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

export class UpdateCouncilFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("content"),
      new ValidatorRequiredParam("councilId"),
    ]);

    const userRepository = new UserRepositoryMongoDB();
    const councilRepository = new CouncilRepositoryMongoDb();
    const usecase = new UpdateCouncilUseCase(userRepository, councilRepository);

    return new UpdateCouncilController(validatorRequest, usecase);
  }
}
