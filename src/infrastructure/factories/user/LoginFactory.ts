import { LoginUseCase } from "../../../application/usecase/user/LoginUseCase";
import { ValidatorComposite } from "../../../application/validator/ValidatorComposite";
import { ValidatorEmail } from "../../../application/validator/ValidatorEmail";
import { ValidatorRequiredParam } from "../../../application/validator/ValidatorRequiredParam";
import { BCryptAdapter } from "../../adapters/BCryptAdapter";
import { JwtAdapter } from "../../adapters/JwtAdapter";
import { BaseController } from "../../controllers/BaseController";
import { LoginController } from "../../controllers/User/LoginController";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";
import env from "../../http/config/env";

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
