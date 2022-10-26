import { Council } from "../../../../domain/entities/Council";
import { RequiredMinLengthDomainError } from "../../../../domain/erros";
import { AlreadyExistError } from "../../../../domain/erros/AlreadyExistsError";
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

    const minLenght: number = 10;
    if (data.council.content.length < minLenght) {
      throw new RequiredMinLengthDomainError("content", minLenght);
    }

    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("Nenhum usuário encontrado!");
    }

    const council = await this.businessCouncilRepo.find(data.council.content);
    if (council) {
      throw new AlreadyExistError("Content");
    }
    await this.businessCouncilRepo.create(data);
  }
}
