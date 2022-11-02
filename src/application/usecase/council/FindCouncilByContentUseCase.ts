import { Council } from "../../../domain/entities/Council";
import { Validator } from "../../../domain/validator/validator";
import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { CouncilRepository } from "../../repositories/CouncilRepository";
import { Usecase } from "../UseCase";

export type InputFindCouncilByContentDto = {
  content: string;
};

export type OutputFindCouncilByContentDto = {
  council: Council;
};

export class FindCouncilByContentUseCase
  implements
    Usecase<InputFindCouncilByContentDto, OutputFindCouncilByContentDto>
{
  constructor(
    private readonly repo: CouncilRepository,
    private readonly validator: Validator
  ) {}
  async execute(
    data: InputFindCouncilByContentDto
  ): Promise<OutputFindCouncilByContentDto> {
    this.validator.validate(data);
    const council = await this.repo.find(data.content);
    if (!council) {
      throw new NotFoundHttpError("Council not found!");
    }

    return { council };
  }
}
