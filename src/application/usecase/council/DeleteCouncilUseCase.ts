import { CouncilRepository } from "../../repositories/CouncilRepository";
import { Usecase } from "../UseCase";

export type InputDeleteCouncilUseCase = {
  councilId: string;
};

export class DeleteCouncilUseCase
  implements Usecase<InputDeleteCouncilUseCase, void>
{
  constructor(private readonly repository: CouncilRepository) {}
  async execute(data: InputDeleteCouncilUseCase): Promise<void> {
    await this.repository.
  }
}
