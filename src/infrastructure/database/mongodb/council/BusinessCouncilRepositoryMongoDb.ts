import { BusinessCouncilRepository } from "../../../../application/repositories/council/BusinessCouncilRepository";
import { InputCreateBusinessCouncilDto } from "../../../../application/usecase/council/business/CreateBusinessCouncilUseCase";
import { BaseMongoRepository } from "../BaseMongoRepository";

export class BusinessCouncilRepositoryMongoDb
  extends BaseMongoRepository
  implements BusinessCouncilRepository
{
  collection(): string {
    return "business";
  }
  async create(dto: InputCreateBusinessCouncilDto): Promise<void> {
    const { userId, council, createdAt } = dto;
    const filter = { userId };
    await this.getCollection.updateOne(
      filter,
      { $set: { createdAt }, $addToSet: { councils: council } },
      { upsert: true }
    );
  }
}
