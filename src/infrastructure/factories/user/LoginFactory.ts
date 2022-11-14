import { LoginUseCase } from "@src/application/usecase/user/LoginUseCase";
import {
  ValidatorComposite,
  ValidatorEmail,
  ValidatorRequiredParam,
} from "@src/application/validator";
import { BCryptAdapter, JwtAdapter } from "@src/infrastructure/adapters";
import { BaseController } from "@src/infrastructure/controllers/BaseController";
import { LoginController } from "@src/infrastructure/controllers/User";
import { UserRepositoryMongoDB } from "@src/infrastructure/database/mongodb";
import env from "@src/infrastructure/http/config/env";

export class LoginFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("email"),
      new ValidatorRequiredParam("password"),
    ]);

    const validatorUseCase = new ValidatorComposite([
      new ValidatorEmail("email"),
    ]);

    const repository = new UserRepositoryMongoDB();

    const bcryptAdapter = new BCryptAdapter(12);
    const jwt = new JwtAdapter(env.jwtSecretKey);

    const usecase = new LoginUseCase(
      validatorUseCase,
      repository,
      bcryptAdapter,
      jwt
    );
    return new LoginController(usecase, validatorRequest);
  }
}
