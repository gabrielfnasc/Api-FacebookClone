import { TypeRepository } from "../../../application/repositories/TypeRepository";
import { Type } from "../../../domain/entities/Type";
import { BaseMongoRepository } from "./BaseMongoRepository";
import { MongoHelper } from "./MongoHelper";

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
