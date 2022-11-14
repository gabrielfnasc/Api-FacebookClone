import { Council } from "@src/domain/entities/Council";
import { NotFoundHttpError } from "@src/infrastructure/http/errors";
import { CouncilRepository } from "@src/application/repositories";
import { Usecase } from "@src/application/usecase/UseCase";

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
    const council = await this.repo.findCouncilsByContent(data.content);
    if (!council) {
      throw new NotFoundHttpError("Council not found!");
    }

    return { council };
  }
}
