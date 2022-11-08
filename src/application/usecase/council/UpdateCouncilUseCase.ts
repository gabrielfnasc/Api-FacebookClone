import { NotFoundHttpError } from "../../../infrastructure/http/errors";
import { CouncilRepository } from "../../repositories/CouncilRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { Usecase } from "../UseCase";

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
    if (!user) {
      throw new NotFoundHttpError("User not found!");
    }
  }
}
