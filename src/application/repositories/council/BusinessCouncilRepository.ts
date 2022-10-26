import { Council } from "../../../domain/entities/Council";
import { InputCreateBusinessCouncilDto } from "../../usecase/council/business/CreateBusinessCouncilUseCase";

export interface BusinessCouncilRepository {
  create(data: InputCreateBusinessCouncilDto): Promise<void>;

  find(content: string): Promise<Council>;
}
