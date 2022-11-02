import { Council } from "../../../domain/entities/Council";
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
  constructor(private readonly repo: CouncilRepository) {}
  async execute(
    data: InputFindCouncilByContentDto
  ): Promise<OutputFindCouncilByContentDto> {
    const council = await this.repo.find(data.content);

    return { council };
  }
}
