import { CreateUserUseCase } from "@src/application/usecase/user";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { CreateUserController } from "@src/infrastructure/controllers/User";
import { UserRepositoryMongoDB } from "@src/infrastructure/database/mongodb";
import {
  ValidatorComposite,
  ValidatorRequiredParam,
  ValidatorInputLength,
  ValidatorEmail,
} from "@src/application/validator";
import { JwtAdapter } from "@src/infrastructure/adapters";
import env from "@src/infrastructure/config/env";
import { BCryptAdapter } from "@src/infrastructure/adapters";

export class CreateUserFactory {
  static build(): BaseController {
    const bcryptAdapter = new BCryptAdapter(10);

    const jwtAdapter = new JwtAdapter(env.jwtSecretKey);

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
    const usecase = new CreateUserUseCase(
      repository,
      validatorUseCase,
      bcryptAdapter,
      jwtAdapter
    );

    return new CreateUserController(usecase, validatorRequest);
  }
}
