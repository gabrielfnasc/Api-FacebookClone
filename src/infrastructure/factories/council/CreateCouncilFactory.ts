import { CreateCouncilUseCase } from "../../../application/usecase/council/CreateCouncilUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { ValidatorRequiredParamObject } from "../../../application/validator/ValidatorRequiredParamObject";
import { BaseController } from "../../controllers/BaseController";
import { CreateCouncilController } from "../../controllers/council/CreateCouncilController";
import { CouncilRepositoryMongoDb } from "../../database/mongodb/CouncilRepositoryMongoDb";
import { TypeRepositoryMongoDb } from "../../database/mongodb/TypeRepositoryMongoDb";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

export class CreateCouncilFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("type"),
      new ValidatorRequiredParam("content"),
    ]);

    const validatorUseCase = new ValidatorComposite([
      new ValidatorRequiredParamObject("name", "type"),
    ]);
    const userRepo = new UserRepositoryMongoDB();

    const businessCouncilRepo = new CouncilRepositoryMongoDb();

    const typeRepo = new TypeRepositoryMongoDb();

    const usecase = new CreateCouncilUseCase(
      validatorUseCase,
      userRepo,
      businessCouncilRepo,
      typeRepo
    );

    return new CreateCouncilController(validatorRequest, usecase);
  }
}
