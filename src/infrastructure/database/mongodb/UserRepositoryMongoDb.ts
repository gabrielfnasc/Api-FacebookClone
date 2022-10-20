import { BaseMongoRepository } from "./BaseMongoRepository";
import { UserRepository } from "../../../application/repositories/UserRepository";
import { InputCreateUserDto } from "../../../application/usecase/CreateUserUseCase";

export class UserRepositoryMongoDB
  extends BaseMongoRepository
  implements UserRepository
{
  collection(): string {
    return "users";
  }
  async create(data: InputCreateUserDto): Promise<string> {
    const document = await this.getCollection.insertOne(data);
    return document.insertedId.toString();
  }
}
