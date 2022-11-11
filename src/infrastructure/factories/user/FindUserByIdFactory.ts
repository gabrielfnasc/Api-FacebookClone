import { FindUserByIdUseCase } from "../../../application/usecase/user/FindUserByIdUseCase";
import { BaseController } from "../../controllers/BaseController";
import { FindUserByIdController } from "../../controllers/User/FindUserByIdController";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

export class FindUSerByIdFactory {
  static build(): BaseController {
    const repository = new UserRepositoryMongoDB();
    const usecase = new FindUserByIdUseCase(repository);
    return new FindUserByIdController(usecase);
  }
}
