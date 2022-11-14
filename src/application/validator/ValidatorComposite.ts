import { Validator } from "@src/domain/validator/validator";

export class ValidatorComposite implements Validator {
  constructor(private readonly validators: Validator[]) {}
  validate(value: any): void {
    for (const validator of this.validators) {
      validator.validate(value);
    }
  }
}
