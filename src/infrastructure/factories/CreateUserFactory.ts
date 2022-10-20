import { CreateUserUseCase } from "../../application/usecase/CreateUserUseCase";
import { BaseController } from "../controllers/BaseController";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { UserRepositoryMongoDB } from "../database/mongodb/UserRepositoryMongoDb";
import { ValidatorComposite } from "../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../application/validator/ValidatorRequiredParam";
import { ValidatorInputLength } from "../../application/validator/ValidatorInputLenght";

export class CreateUserFactory {
  static build(): BaseController {
    const validatorUseCase = new ValidatorComposite([new Validator()]);

    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("email"),
      new ValidatorRequiredParam("password"),
      new ValidatorRequiredParam("name"),
    ]);

    const repository = new UserRepositoryMongoDB();
    const usecase = new CreateUserUseCase(repository);

    return new CreateUserController(usecase, validatorRequest);
  }
}
