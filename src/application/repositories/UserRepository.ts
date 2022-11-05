import { User } from "../../domain/entities/User";
import { InputCreateUserDto } from "../usecase/user/CreateUserUseCase";
import { InputLoginDto } from "../usecase/user/LoginUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;

  delete(userId: string): Promise<void>;

  login(data: InputLoginDto): Promise<User>;
}
