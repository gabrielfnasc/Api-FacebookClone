import { InvalidEmailDomainError } from '../../domain/errors/EmailInvalidDomainError';
import { Validator } from '../../domain/validator/validator';
import { Email } from '../../domain/objectsValue/Email';

export class ValidatorEmail implements Validator {
  constructor(private readonly paramName: string) {}

  validate(value: any) {
    if (!Email.create(value[this.paramName])) {
      throw new InvalidEmailDomainError();
    }
  }
}
