import { Council } from "../../../../domain/entities/Council";

export type InputCreateBusinessCouncilDto = {
  userId: string;
  council: Council;
  createdAt: Date;
};
