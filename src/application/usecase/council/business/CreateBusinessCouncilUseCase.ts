import { Council } from "../../../../domain/entities/Council";
import { RequiredMinLengthDomainError } from "../../../../domain/erros/RequiredMinLengthDomainError";
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

    // check the length of the council content
    const minLenght: number = 10;
    if (data.council.content.length < minLenght) {
      throw new RequiredMinLengthDomainError("content", minLenght);
    }

    //check if user exists
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("Nenhum usuário encontrado!");
    }

    //TODO
    // //check if the user don´t repeat the same content
    // const council = await this.businessCouncilRepo.find(data.council.content);
    // // if (council) {
    // //   throw new AlreadyExistError("Content");
    // // }
    await this.businessCouncilRepo.create(data);
  }
}
