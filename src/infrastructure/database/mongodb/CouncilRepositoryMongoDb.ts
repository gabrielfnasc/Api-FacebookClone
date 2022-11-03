import { CouncilRepository } from "../../../application/repositories/CouncilRepository";
import { InputCreateCouncilDto } from "../../../application/usecase/council/CreateCouncilUseCase";
import { Council } from "../../../domain/entities/Council";
import { BaseMongoRepository } from "../mongodb/BaseMongoRepository";
import { MongoHelper } from "../mongodb/MongoHelper";

export class CouncilRepositoryMongoDb
  extends BaseMongoRepository
  implements CouncilRepository
{
  collection(): string {
    return "councils";
  }
  async create(dto: InputCreateCouncilDto): Promise<void> {
    const { userId, council, createdAt } = dto;
    const filter = { userId };
    await this.getCollection.updateOne(
      filter,
      { $set: { createdAt }, $addToSet: { councils: council } },
      { upsert: true }
    );
  }
  async find(content: string): Promise<Council> {
    const council = await this.getCollection.findOne({
      "councils.content": new RegExp(content),
    });

    return council && MongoHelper.map(council);
  }
}
