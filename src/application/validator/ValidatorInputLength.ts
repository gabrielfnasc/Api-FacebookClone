import { RequiredMinLengthDomainError } from "../../domain/erros/RequiredMinLengthDomainError";
import { Validator } from "../../domain/validator/validator";

export class ValidatorInputLength implements Validator {
  constructor(
    private readonly paramName: string,
    private readonly maxLen: number
  ) {}

  validate(value: any): void {
    const paramValue = value[this.paramName] as string;
    if (paramValue.length < this.maxLen) {
      throw new RequiredMinLengthDomainError(this.paramName, this.maxLen);
    }
  }
}
