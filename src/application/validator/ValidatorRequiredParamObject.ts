/* eslint-disable no-prototype-builtins */
import { Validator } from '../../domain/validator/validator';
import { RequiredParamHttpError } from '../../infrastructure/http/errors';

export class ValidatorRequiredParamObject implements Validator {
  constructor(private readonly propertyName: string, private readonly paramName: string) {}

  validate(value: any): void {
    const fields: string[] = Object.keys(value);
    if (!fields.includes(this.propertyName)) {
      throw new RequiredParamHttpError(this.propertyName);
    }
    const jsonObject = value[this.propertyName];
    if (!jsonObject.hasOwnProperty(this.paramName)) {
      throw new RequiredParamHttpError(this.paramName);
    }
  }
}
