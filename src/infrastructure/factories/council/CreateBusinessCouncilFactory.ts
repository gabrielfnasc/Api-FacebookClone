import { CreateBusinessCouncilUseCase } from "../../../application/usecase/council/business/CreateBusinessCouncilUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { ValidatorRequiredParamObject } from "../../../application/validator/ValidatorRequiredParamObject";
import { BaseController } from "../../controllers/BaseController";
import { CreateBusinessCouncilController } from "../../controllers/council/business/CreateBusinessCouncilController";
import { BusinessCouncilRepositoryMongoDb } from "../../database/mongodb/council/BusinessCouncilRepositoryMongoDb";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

export class CreateBusinessCouncilFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("userId"),
      new ValidatorRequiredParam("council"),
    ]);

    const validatorUseCase = new ValidatorComposite([
      new ValidatorRequiredParamObject("content", "council"),
    ]);
    const userRepo = new UserRepositoryMongoDB();

    const businessCouncilRepo = new BusinessCouncilRepositoryMongoDb();

    const usecase = new CreateBusinessCouncilUseCase(
      validatorUseCase,
      userRepo,
      businessCouncilRepo
    );

    return new CreateBusinessCouncilController(validatorRequest, usecase);
  }
}
