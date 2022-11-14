import { UpdateCouncilUseCase } from "@src/application/usecase/council";
import {
  ValidatorComposite,
  ValidatorRequiredParam,
} from "@src/application/validator";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { UpdateCouncilController } from "@src/infrastructure/controllers/council";
import {
  CouncilRepositoryMongoDb,
  UserRepositoryMongoDB,
} from "@src/infrastructure/database/mongodb";

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
