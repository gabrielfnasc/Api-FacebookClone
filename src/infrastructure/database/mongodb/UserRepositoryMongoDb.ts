import { BaseMongoRepository } from "./BaseMongoRepository";
import { UserRepository } from "../../../application/repositories/UserRepository";
import { InputCreateUserDto } from "../../../application/usecase/CreateUserUseCase";
import { MongoHelper } from "./MongoHelper";
import { User } from "../../../domain/entities/User";

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
  async findByEmail(email: string): Promise<User> {
    const query = { email };
    const projection = { isActive: false, password: false };
    const user = await this.getCollection.findOne(query, { projection });
    return user && MongoHelper.map(user);
  }
}
