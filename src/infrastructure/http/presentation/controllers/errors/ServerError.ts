import { ControllerError } from "./ControllerError";

export class ServerError extends Error implements ControllerError {
  constructor(reason: string) {
    super("Server Error : " + reason + ".");
    this.name = "Server Error";
  }
}
