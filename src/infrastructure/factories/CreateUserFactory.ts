import { CreateUserUseCase } from "../../application/usecase/CreateUserUseCase";
import { BaseController } from "../controllers/BaseController";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { UserRepositoryMongoDB } from "../database/mongodb/UserRepositoryMongoDb";
import { ValidatorComposite } from "../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../application/validator/ValidatorRequiredParam";
import { ValidatorInputLength } from "../../application/validator/ValidatorInputLength";
import { ValidatorEmail } from "../../application/validator/ValidatorEmail";

export class CreateUserFactory {
  static build(): BaseController {


    const jwtAdapter = new  


    const validatorUseCase = new ValidatorComposite([
      new ValidatorInputLength("password", 5),
      new ValidatorEmail("email"),
      new ValidatorInputLength("name", 2),
    ]);

    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("email"),
      new ValidatorRequiredParam("password"),
      new ValidatorRequiredParam("name"),
    ]);

    const repository = new UserRepositoryMongoDB();
    const usecase = new CreateUserUseCase(repository, validatorUseCase);

    return new CreateUserController(usecase, validatorRequest);
  }
}
