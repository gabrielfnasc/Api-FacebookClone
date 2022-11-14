import { UpdateUserUseCase } from "@src/application/usecase/user";
import {
  ValidatorComposite,
  ValidatorEmail,
  ValidatorRequiredParam,
} from "@src/application/validator";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { UpdateUserController } from "@src/infrastructure/controllers/User";
import { UserRepositoryMongoDB } from "@src/infrastructure/database/mongodb";

export class UpdateUserFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("name"),
      new ValidatorRequiredParam("email"),
    ]);

    const validatorUsecase = new ValidatorComposite([
      new ValidatorEmail("email"),
    ]);

    const repository = new UserRepositoryMongoDB();

    const usecase = new UpdateUserUseCase(validatorUsecase, repository);
    return new UpdateUserController(validatorRequest, usecase);
  }
}
