import { User } from "../../domain/entities/User";
import { InputCreateUserDto } from "../usecase/user/CreateUserUseCase";
import { InputUpdateUserDto } from "../usecase/user/UpdateUserUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  delete(userId: string): Promise<void>;
  login(email: string): Promise<User>;
  update(data: InputUpdateUserDto): Promise<User>;
}
