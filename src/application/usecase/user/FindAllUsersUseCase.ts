import { UserRepository } from "@src/application/repositories";
import { User } from "@src/domain/entities";
import { Usecase } from "@src/application/usecase/UseCase";

export type OutputFindAllUsersDto = {
  users: User[];
};

class FindAllUsersUseCase implements Usecase<void, OutputFindAllUsersDto> {
  constructor(private readonly repo: UserRepository) {}
  async execute(data: void): Promise<OutputFindAllUsersDto> {}
}
