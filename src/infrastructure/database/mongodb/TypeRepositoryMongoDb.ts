import { TypeRepository } from "@src/application/repositories";
import { Type } from "@src/domain/entities";
import {
  MongoHelper,
  BaseMongoRepository,
} from "@src/infrastructure/database/mongodb";

export class TypeRepositoryMongoDb
  extends BaseMongoRepository
  implements TypeRepository
{
  collection(): string {
    return "types";
  }
  async find(name: string): Promise<Type> {
    const typeDocument = await this.getCollection.findOne({ name });
    return typeDocument && MongoHelper.map(typeDocument);
  }
}
