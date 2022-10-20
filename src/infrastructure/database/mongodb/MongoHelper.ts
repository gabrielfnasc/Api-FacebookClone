import { Collection, MongoClient } from "mongodb";

export class MongoHelper {
  private static client: MongoClient;

  public static async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri);
  }

  // private static async disconnect(): Promise<void> {
  //   this.client.close();
  // }

  public static getCollection(name: string): Collection {
    if (this.client) return this.client.db().collection(name);

    throw new Error("MongoDb client is null");
  }

  public static map(document: any): any {
    const { _id, ...collectionWithoutMongoId } = document;
    return Object.assign({}, collectionWithoutMongoId, { id: _id });
  }

  public static mapCollection(document: any[]): any[] {
    return document.map((document) => this.map(document));
  }
}
