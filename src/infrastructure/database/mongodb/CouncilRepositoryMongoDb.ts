import { CouncilRepository } from "../../../application/repositories/CouncilRepository";
import { InputCreateCouncilDto } from "../../../application/usecase/council/CreateCouncilUseCase";
import { InputDeleteCouncilUseCase } from "../../../application/usecase/council/DeleteCouncilUseCase";
import { InputUpdateCouncilDto } from "../../../application/usecase/council/UpdateCouncilUseCase";
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
    const { userId, council } = dto;
    const filter = { userId };
    await this.getCollection.updateOne(
      filter,
      { $addToSet: { councils: council } },
      { upsert: true }
    );
  }
  async updateContent(data: InputUpdateCouncilDto): Promise<void> {
    const { userId, councilId, content } = data;
    await this.getCollection.updateOne(
      {
        userId: userId,
        "councils.id": councilId,
      },
      {
        $set: {
          "councils.$.content": content,
        },
      }
    );
  }

  async findCouncilsByContent(content: string): Promise<Council> {
    const council = await this.getCollection.findOne({
      "councils.content": new RegExp("^" + content, "i"),
    });

    return council && MongoHelper.map(council);
  }
  async findOneCouncilByContent(content: string): Promise<Council> {
    const council = await this.getCollection.findOne({
      "councils.content": new RegExp("^" + content + "$", "i"),
    });

    return council && MongoHelper.map(council);
  }
  async delete(data: InputDeleteCouncilUseCase): Promise<void> {
    const { councilId, userId } = data;
    const filter = { userId };

    await this.getCollection.updateOne(filter, {
      $pull: { councils: { id: councilId } },
    });
  }
}
