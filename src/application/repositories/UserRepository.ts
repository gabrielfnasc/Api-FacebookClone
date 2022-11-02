import { User } from "../../domain/entities/User";
import { InputCreateUserDto } from "../usecase/user/CreateUserUseCase";
import { InputDeleteUserDto } from "../usecase/user/DeleteUserUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;

  delete(userId: InputDeleteUserDto): Promise<void>;
}
