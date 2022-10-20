import { RequiredMaxLengthDomainError } from "../../domain/erros/RequiredMaxLengthDomainError";
import { Validator } from "../../domain/validator/validator";

export class ValidatorInputLength implements Validator {
  constructor(
    private readonly paramName: string,
    private readonly maxLen: number
  ) {}

  validate(value: any): void {
    const paramValue = value[this.paramName] as string;
    if (paramValue.length < this.maxLen) {
      throw new RequiredMaxLengthDomainError(this.paramName, this.maxLen);
    }
  }
}
