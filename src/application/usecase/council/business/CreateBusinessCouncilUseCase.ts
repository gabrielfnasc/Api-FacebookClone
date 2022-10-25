import { Council } from "../../../../domain/entities/Council";
import { Validator } from "../../../../domain/validator/validator";
import { Usecase } from "../../UseCase";

export type InputCreateBusinessCouncilDto = {
  userId: string;
  council: Council;
  createdAt: Date;
};

export class CreateBusinessCouncilUseCase
  implements Usecase<InputCreateBusinessCouncilDto, void>
{
  constructor(private readonly validator: Validator) {}
  async execute(data: InputCreateBusinessCouncilDto): Promise<void> {
    this.validator.validate(data);
    const { userId, council } = data;
  }
}
