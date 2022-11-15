import { ControllerError } from "@src/infrastructure/http/presentation/controllers/errors";

export class ServerError extends Error implements ControllerError {
  constructor(reason: string) {
    super("Server Error : " + reason + ".");
    this.name = "Server Error";
  }
}
