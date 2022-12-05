import { Council } from '@src/domain/entities/Council';
import { NotFoundHttpError } from '@src/infrastructure/http/errors/NotFoundHttpError';
import { CouncilRepository } from '@src/application/repositories';
import { UserRepository } from '@src/application/repositories';
import { Usecase } from '@src/application/usecase/UseCase';
import { TypeRepository } from '@src/application/repositories';
import { AlreadyExistError } from '@src/domain/errors/AlreadyExistsError';
import { Validator } from '@src/domain/validator/validator';

export type InputCreateCouncilDto = {
  userId: string;
  council: Council;
};

export class CreateCouncilUseCase implements Usecase<InputCreateCouncilDto, void> {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly businessCouncilRepo: CouncilRepository,
    private readonly type: TypeRepository,
    private readonly validator: Validator
  ) {}
  async execute(data: InputCreateCouncilDto): Promise<void> {
    this.validator.validate(data);

    //check if user exists
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError('User not found!');
    }

    //check if type is valid
    const typeName = await this.type.find(data.council.type.name);
    if (!typeName) {
      throw new NotFoundHttpError("Sorry! we don't have this council type yet");
    }

    //check if the user don´t repeat the same content
    const council = await this.businessCouncilRepo.findOneCouncilByContent(data.council.content);
    if (council) {
      throw new AlreadyExistError('Content');
    }

    //db poderia ter um council e um userId como parametro
    await this.businessCouncilRepo.create({
      ...data,
    });
  }
}
