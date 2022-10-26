import { BusinessCouncilRepository } from "../../../../application/repositories/council/BusinessCouncilRepository";
import { InputCreateBusinessCouncilDto } from "../../../../application/usecase/council/business/CreateBusinessCouncilUseCase";
import { Council } from "../../../../domain/entities/Council";
import { BaseMongoRepository } from "../BaseMongoRepository";
import { MongoHelper } from "../MongoHelper";

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
  async find(content: string): Promise<Council> {
    const council = await this.getCollection
      .aggregate([
        {
          $match: {
            councils: { $elemMatch: { content: content } },
          },
        },
        {
          $redact: {
            $cond: {
              if: {
                $or: [{ $eq: ["$content", content] }, { $not: "$content" }],
              },
              then: "$$DESCEND",
              else: "$$PRUNE",
            },
          },
        },
      ])
      .toArray();

    return council && MongoHelper.map(council);
  }
}
