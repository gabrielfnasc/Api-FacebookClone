import { Council } from "../../../domain/entities/Council";
import { RequiredMinLengthDomainError } from "../../../domain/erros/RequiredMinLengthDomainError";
import { Validator } from "../../../domain/validator/validator";
import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { CouncilRepository } from "../../repositories/CouncilRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";
import { TypeRepository } from "../../repositories/TypeRepository";
import { AlreadyExistError } from "../../../domain/erros/AlreadyExistsError";
import { ObjectId } from "mongodb";

export type InputCreateCouncilDto = {
  userId: string;
  council: Council;

  createdAt: Date;
};

export class CreateCouncilUseCase
  implements Usecase<InputCreateCouncilDto, void>
{
  constructor(
    private readonly validator: Validator,
    private readonly userRepo: UserRepository,
    private readonly businessCouncilRepo: CouncilRepository,

    private readonly type: TypeRepository
  ) {}
  async execute(data: InputCreateCouncilDto): Promise<void> {
    this.validator.validate(data);
    data.council.id = new ObjectId();

    //check if user exists
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("Nenhum usuário encontrado!");
    }
    // check the length of the council content
    const minLenght: number = 10;
    if (data.council.content.length < minLenght) {
      throw new RequiredMinLengthDomainError("content", minLenght);
    }
    const typeName = await this.type.find(data.council.type.name);
    if (!typeName) {
      throw new NotFoundHttpError("Sorry! we don't have this council type yet");
    }

    //TODO
    //check if the user don´t repeat the same content
    const council = await this.businessCouncilRepo.find(data.council.content);
    if (council) {
      throw new AlreadyExistError("Content");
    }
    await this.businessCouncilRepo.create({
      ...data,
    });
  }
}
