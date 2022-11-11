import { CreateCouncilUseCase } from "../../../application/usecase/council/CreateCouncilUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorInputLength } from "../../../application/validator/ValidatorInputLength";
import { ValidatorInputLengthParamObject } from "../../../application/validator/ValidatorInputLengthParamObject";
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
      new ValidatorRequiredParamObject("type", "name"),
    ]);
    const validatorUseCase = new ValidatorComposite([
      new ValidatorInputLengthParamObject("council", "content", 100),
    ]);

    const userRepo = new UserRepositoryMongoDB();

    const businessCouncilRepo = new CouncilRepositoryMongoDb();

    const typeRepo = new TypeRepositoryMongoDb();

    const usecase = new CreateCouncilUseCase(
      userRepo,
      businessCouncilRepo,
      typeRepo,
      validatorUseCase
    );

    return new CreateCouncilController(validatorRequest, usecase);
  }
}
