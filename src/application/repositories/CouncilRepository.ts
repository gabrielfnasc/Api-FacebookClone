import { Council } from "../../domain/entities/Council";
import { InputCreateCouncilDto } from "../usecase/council/CreateCouncilUseCase";
import { InputDeleteCouncilUseCase } from "../usecase/council/DeleteCouncilUseCase";

export interface CouncilRepository {
  create(data: InputCreateCouncilDto): Promise<void>;

  find(content: string): Promise<Council>;

  findOneCouncil(content: string): Promise<Council>;

  delete(data: InputDeleteCouncilUseCase): Promise<void>;
}
