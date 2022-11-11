import { User } from "../../../domain/entities/User";
import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";

export type InputFindUserByIdUseCaseDto = {
  userId: string;
};

export type OutputFindUserByIdDto = {
  user: User;
};

export class FindUserByIdUseCase
  implements Usecase<InputFindUserByIdUseCaseDto, OutputFindUserByIdDto>
{
  constructor(private readonly repository: UserRepository) {}
  async execute(
    data: InputFindUserByIdUseCaseDto
  ): Promise<OutputFindUserByIdDto> {
    const user = await this.repository.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("User not found!");
    }
    return { user };
  }
}
