import { TypeRepository } from "../../../application/repositories/TypeRepository";
import { Type } from "../../../domain/entities/Type";
import { BaseMongoRepository } from "./BaseMongoRepository";

export class TypeRepositoryMongoDb
  extends BaseMongoRepository
  implements TypeRepository
{
  collection(): string {
    return "types";
  }
  find(name: string): Promise<Type> {
    throw new Error("Method not implemented.");
  }
}
