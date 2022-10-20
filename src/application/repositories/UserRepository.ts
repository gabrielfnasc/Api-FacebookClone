import { User } from "../../domain/entities/User";
import { InputCreateUserDto } from "../usecase/CreateUserUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
  findByEmail(email: string): Promise<User>;
}
