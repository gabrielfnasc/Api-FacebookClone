import { Collection } from "mongodb";
import { MongoHelper } from "./MongoHelper";
export abstract class BaseMongoRepository {
  private dbCollection: Collection;

  constructor() {
    this.dbCollection = MongoHelper.getCollection(this.collection());
  }

  abstract collection(): string;

  get getCollection(): Collection {
    return this.dbCollection;
  }
}
