import { Council } from "../../../domain/entities/Council";
import { RequiredMinLengthDomainError } from "../../../domain/erros/RequiredMinLengthDomainError";
import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { CouncilRepository } from "../../repositories/CouncilRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";
import { TypeRepository } from "../../repositories/TypeRepository";
import { AlreadyExistError } from "../../../domain/erros/AlreadyExistsError";

export type InputCreateCouncilDto = {
  userId: string;
  council: Council;
};

export class CreateCouncilUseCase
  implements Usecase<InputCreateCouncilDto, void>
{
  constructor(
    private readonly userRepo: UserRepository,
    private readonly businessCouncilRepo: CouncilRepository,

    private readonly type: TypeRepository
  ) {}
  async execute(data: InputCreateCouncilDto): Promise<void> {
    //check if user exists
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("User not found!");
    }
    // check the length of the council content
    const minLenght: number = 10;
    if (data.council.content.length < minLenght) {
      throw new RequiredMinLengthDomainError("content", minLenght);
    }

    //check if type is valid
    const typeName = await this.type.find(data.council.type.name);
    if (!typeName) {
      throw new NotFoundHttpError("Sorry! we don't have this council type yet");
    }

    //check if the user don´t repeat the same content
    const council = await this.businessCouncilRepo.findOneCouncilByContent(
      data.council.content
    );
    if (council) {
      throw new AlreadyExistError("Content");
    }
    await this.businessCouncilRepo.create({
      ...data,
    });
  }
}
