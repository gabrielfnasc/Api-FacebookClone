import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";

export type InputDeleteUserDto = {
  userId: string;
};

export class DeleteUserUseCase implements Usecase<InputDeleteUserDto, void> {
  constructor(private readonly repository: UserRepository) {}
  async execute(data: InputDeleteUserDto): Promise<void> {
    await this.repository.delete(data.userId);
  }
}
