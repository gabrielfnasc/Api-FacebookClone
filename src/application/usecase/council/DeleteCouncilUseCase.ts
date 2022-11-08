import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { CouncilRepository } from "../../repositories/CouncilRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";

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
