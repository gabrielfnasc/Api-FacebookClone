import { Council } from "@src/domain/entities/Council";
import { InputCreateCouncilDto } from "@src/application/usecase/council/CreateCouncilUseCase";
import { InputDeleteCouncilUseCase } from "@src/application/usecase/council/DeleteCouncilUseCase";
import { InputUpdateCouncilDto } from "@src/application/usecase/council/UpdateCouncilUseCase";

export interface CouncilRepository {
  create(data: InputCreateCouncilDto): Promise<void>;

  findCouncilsByContent(content: string): Promise<Council>;

  findOneCouncilByContent(content: string): Promise<Council>;

  delete(data: InputDeleteCouncilUseCase): Promise<void>;

  updateContent(data: InputUpdateCouncilDto): Promise<void>;
}
