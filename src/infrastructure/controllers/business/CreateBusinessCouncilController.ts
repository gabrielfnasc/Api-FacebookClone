import { Council } from "../../../domain/entities/Council";

export type CreateBusinessCouncilRequest = {
  userId: string;
  council: Council;
};
