import { Type } from "../../domain/entities/Type";

export interface TypeRepository {
  find(name: string): Promise<Type>;
}
