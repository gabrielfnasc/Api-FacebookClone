import { DeleteUserUseCase } from "../../../application/usecase/user/DeleteUserUseCase";
import { BaseController } from "../../controllers/BaseController";
import { DeleteUserController } from "../../controllers/user/DeleteUserController";
import { UserRepositoryMongoDB } from "../../database/mongodb/UserRepositoryMongoDb";

export class DeleteUserFactory {
  static build(): BaseController {
    const repo = new UserRepositoryMongoDB();
    const usecase = new DeleteUserUseCase(repo);

    return new DeleteUserController(usecase);
  }
}
