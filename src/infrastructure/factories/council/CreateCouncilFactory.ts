import { CreateCouncilUseCase } from "@src/application/usecase/council";
import {
  ValidatorInputLengthParamObject,
  ValidatorRequiredParam,
  ValidatorRequiredParamObject,
  ValidatorComposite,
} from "@src/application/validator";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { CreateCouncilController } from "@src/infrastructure/controllers/council";
import {
  CouncilRepositoryMongoDb,
  TypeRepositoryMongoDb,
  UserRepositoryMongoDB,
} from "@src/infrastructure/database/mongodb";

export class CreateCouncilFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("type"),
      new ValidatorRequiredParam("content"),
      new ValidatorRequiredParamObject("type", "name"),
    ]);
    const validatorUseCase = new ValidatorComposite([
      new ValidatorInputLengthParamObject("council", "content", 5),
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
