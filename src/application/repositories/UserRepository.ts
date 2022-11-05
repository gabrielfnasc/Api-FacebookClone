import { User } from "../../domain/entities/User";
import { InputCreateUserDto } from "../usecase/user/CreateUserUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;

  delete(userId: string): Promise<void>;

  login(email: string): Promise<User>;
}
