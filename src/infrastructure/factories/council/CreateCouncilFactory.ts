import { CreateCouncilUseCase } from "../../../application/usecase/council/business/CreateCouncilUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { ValidatorRequiredParamObject } from "../../../application/validator/ValidatorRequiredParamObject";
import { BaseController } from "../../controllers/BaseController";
import { CreateCouncilController } from "../../controllers/council/business/CreateCouncilController";
import { CouncilRepositoryMongoDb } from "../../database/mongodb/CouncilRepositoryMongoDb";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

export class CreateCouncilFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("userId"),
      new ValidatorRequiredParam("council"),
    ]);

    const validatorUseCase = new ValidatorComposite([
      new ValidatorRequiredParamObject("council", "content"),
    ]);
    const userRepo = new UserRepositoryMongoDB();

    const businessCouncilRepo = new CouncilRepositoryMongoDb();

    const usecase = new CreateCouncilUseCase(
      validatorUseCase,
      userRepo,
      businessCouncilRepo
    );

    return new CreateCouncilController(validatorRequest, usecase);
  }
}
