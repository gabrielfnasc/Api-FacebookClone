import { PhoneInvalidDomainError } from "../../domain/erros/PhoneInvalidDomainError";
import { Validator } from "../../domain/validator/validator";

export class ValidatorPhone implements Validator {
  constructor(private readonly paramName: string) {}
  validate(value: any): void {
    const paramValue = value[this.paramName] as string;
    if (paramValue) {
      const regex = new RegExp(
        "^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$"
      );
      if (!regex.test(paramValue)) {
        throw new PhoneInvalidDomainError();
      }
    }
  }
}
