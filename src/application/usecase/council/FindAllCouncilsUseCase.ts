import { CouncilRepository } from "@src/application/repositories";
import { Council } from "@src/domain/entities";
import { Usecase } from "@src/application/usecase/UseCase";

export type OutputFindAllCouncilsDto = {
  councils: Council[];
};

export class FindAllCouncilsUseCase
  implements Usecase<void, OutputFindAllCouncilsDto>
{
  constructor(private readonly repo: CouncilRepository) {}
  async execute(): Promise<OutputFindAllCouncilsDto> {
    const councils = await this.repo.findAllCouncils();

    return { councils };
  }
}
