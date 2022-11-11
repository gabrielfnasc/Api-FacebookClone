import { User } from "../../../domain/entities/User";
import { Validator } from "../../../domain/validator/validator";
import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";

export type InputUpdateUserDto = {
  userId: string;
  email: string;
  name: string;
};

export type OutputUpdateUserDto = {
  user: User;
};

export class UpdateUserUseCase
  implements Usecase<InputUpdateUserDto, OutputUpdateUserDto>
{
  constructor(
    private readonly validator: Validator,
    private readonly repository: UserRepository
  ) {}
  async execute(data: InputUpdateUserDto): Promise<OutputUpdateUserDto> {
    this.validator.validate(data);
    let user = await this.repository.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("User not found!");
    }
    user = await this.repository;
  }
}
