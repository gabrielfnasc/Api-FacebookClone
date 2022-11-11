import { BaseMongoRepository } from "./BaseMongoRepository";
import { UserRepository } from "../../../application/repositories/UserRepository";
import { InputCreateUserDto } from "../../../application/usecase/user/CreateUserUseCase";
import { MongoHelper } from "./MongoHelper";
import { User } from "../../../domain/entities/User";
import { ObjectId } from "mongodb";
import { InputUpdateUserDto } from "../../../application/usecase/user/UpdateUserUseCase";

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
  async login(email: string): Promise<User> {
    const user = await this.getCollection.findOne({ email });

    return user && MongoHelper.map(user);
  }
  async findByEmail(email: string): Promise<User> {
    const query = { email };
    const projection = { isActive: false, password: false };
    const user = await this.getCollection.findOne(query, { projection });
    return user && MongoHelper.map(user);
  }

  async findById(id: string): Promise<User> {
    const query = { _id: new ObjectId(id), isActive: true };
    const projection = { isActive: false, createdAt: false };
    const userDocument = await this.getCollection.findOne(query, {
      projection,
    });
    return userDocument && MongoHelper.map(userDocument);
  }
  async delete(userId: string): Promise<void> {
    await this.getCollection.deleteOne({ _id: new ObjectId(userId) });
  }
  async update(data: InputUpdateUserDto): Promise<void> {
    const { userId, name, email } = data;
    await this.getCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { name: name, email: email } }
    );
  }
}
