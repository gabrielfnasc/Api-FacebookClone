import { InputCreateUserDto } from "../usecase/CreateUserUseCase";

export interface UserRepository {
  create(data: InputCreateUserDto): Promise<string>;
}
