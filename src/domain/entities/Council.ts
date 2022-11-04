import { Type } from "./Type";

export interface Council {
  id: string;
  content: string;
  createdAt: Date;
  type: Type;
}
