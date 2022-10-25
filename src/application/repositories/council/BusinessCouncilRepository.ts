import { InputCreateBusinessCouncilDto } from "../../usecase/council/business/CreateBusinessCouncilUseCase";

export interface BusinessCouncilRepository {
  create(data: InputCreateBusinessCouncilDto): Promise<void>;
}
