import { Council } from "../../../../domain/entities/Council";
import { Validator } from "../../../../domain/validator/validator";
import { NotFoundHttpError } from "../../../../infrastructure/http/errors";
import { BusinessCouncilRepository } from "../../../repositories/council/BusinessCouncilRepository";
import { UserRepository } from "../../../repositories/UserRepository";
import { Usecase } from "../../UseCase";

export type InputCreateBusinessCouncilDto = {
  userId: string;
  council: Council;
  createdAt: Date;
};

export class CreateBusinessCouncilUseCase
  implements Usecase<InputCreateBusinessCouncilDto, void>
{
  constructor(
    private readonly validator: Validator,
    private readonly userRepo: UserRepository,
    private readonly businessCouncilRepo: BusinessCouncilRepository
  ) {}
  async execute(data: InputCreateBusinessCouncilDto): Promise<void> {
    this.validator.validate(data);

    const user = await this.userRepo.findById(data.userId);

    if (!user) {
      throw new NotFoundHttpError("Nenhum usuário encontrado!");
    }
    await this.businessCouncilRepo.create(data);
  }
}
