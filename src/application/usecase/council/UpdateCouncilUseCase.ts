import { NotFoundHttpError } from "@src/infrastructure/http/errors";
import { CouncilRepository } from "@src/application/repositories";
import { UserRepository } from "@src/application/repositories";
import { Usecase } from "@src/application/usecase/UseCase";

export type InputUpdateCouncilDto = {
  userId: string;
  councilId: string;
  content: string;
};

export class UpdateCouncilUseCase
  implements Usecase<InputUpdateCouncilDto, void>
{
  constructor(
    private readonly userRepo: UserRepository,
    private readonly councilRepository: CouncilRepository
  ) {}
  async execute(data: InputUpdateCouncilDto): Promise<void> {
    const user = await this.userRepo.findById(data.userId);

    // check if the user exists
    if (!user) {
      throw new NotFoundHttpError("User not found!");
    }
    await this.councilRepository.updateContent(data);
  }
}
