import { Council } from "../../domain/entities/Council";
import { InputCreateCouncilDto } from "../usecase/council/CreateCouncilUseCase";

export interface CouncilRepository {
  create(data: InputCreateCouncilDto): Promise<void>;

  find(content: string): Promise<Council>;
}
