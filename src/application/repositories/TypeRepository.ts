import { Type } from "@src/domain/entities/Type";

export interface TypeRepository {
  find(name: string): Promise<Type>;
}
