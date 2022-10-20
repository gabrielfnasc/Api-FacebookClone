import { Validator } from "../..//domain/validator/validator";
import { RequiredParamHttpError } from "../../infrastructure//http/errors/RequiredParamHttpError";

export class ValidatorRequiredParam implements Validator {
  constructor(private readonly paramName: string) {}

  validate(value: any): void {
    const fields: string[] = Object.keys(value);
    if (!fields.includes(this.paramName)) {
      throw new RequiredParamHttpError(this.paramName);
    }
  }
}
