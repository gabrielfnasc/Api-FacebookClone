import { UpdateUserUseCase } from "../../../application/usecase/user/UpdateUserUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorEmail } from "../../../application/validator/ValidatorEmail";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { BaseController } from "../../controllers/BaseController";
import { UpdateUserController } from "../../controllers/User/UpdateUserController";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

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
