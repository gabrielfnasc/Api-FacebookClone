import { User } from "@src/domain/entities/User";
import { InputCreateUserDto } from "@src/application/usecase/user/CreateUserUseCase";
import { InputUpdateUserDto } from "@src/application/usecase/user/UpdateUserUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  delete(userId: string): Promise<void>;
  login(email: string): Promise<User>;
  update(data: InputUpdateUserDto): Promise<void>;
  findAllUsers(): Promise<User[]>;
}
