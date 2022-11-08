import { Council } from "../../domain/entities/Council";
import { InputCreateCouncilDto } from "../usecase/council/CreateCouncilUseCase";
import { InputDeleteCouncilUseCase } from "../usecase/council/DeleteCouncilUseCase";
import { InputUpdateCouncilDto } from "../usecase/council/UpdateCouncilUseCase";

export interface CouncilRepository {
  create(data: InputCreateCouncilDto): Promise<void>;

  findCouncilsByContent(content: string): Promise<Council>;

  findOneCouncilByContent(content: string): Promise<Council>;

  delete(data: InputDeleteCouncilUseCase): Promise<void>;

  update(data: InputUpdateCouncilDto): Promise<void>;
}
