import { Type } from "@src/domain/entities";

export interface Council {
  id: string;
  content: string;
  createdAt: Date;
  type: Type;
}
