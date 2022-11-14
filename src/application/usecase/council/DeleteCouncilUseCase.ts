import { NotFoundHttpError } from "@src/infrastructure/http/errors/NotFoundHttpError";
import { CouncilRepository } from "@src/application/repositories/CouncilRepository";
import { UserRepository } from "@src/application/repositories";
import { Usecase } from "@src/application/usecase/UseCase";

export type InputDeleteCouncilUseCase = {
  councilId: string;
  userId: string;
};

export class DeleteCouncilUseCase
  implements Usecase<InputDeleteCouncilUseCase, void>
{
  constructor(
    private readonly councilRepo: CouncilRepository,
    private readonly userRepo: UserRepository
  ) {}
  async execute(data: InputDeleteCouncilUseCase): Promise<void> {
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError("User not found!");
    }
    await this.councilRepo.delete(data);
  }
}
