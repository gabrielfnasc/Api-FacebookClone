/* eslint-disable no-prototype-builtins */
import { RequiredMinLengthDomainError } from '../../domain/erros';
import { Validator } from '../../domain/validator/validator';
import { RequiredParamHttpError } from '../../infrastructure/http/errors';

export class ValidatorInputLengthParamObject implements Validator {
  constructor(
    private readonly propertyName: string,
    private readonly paramName: string,
    private readonly minLen: number
  ) {}

  validate(value: any): void {
    const fields: string[] = Object.keys(value);
    if (!fields.includes(this.propertyName)) {
      throw new RequiredParamHttpError(this.propertyName);
    }
    const jsonObject = value[this.propertyName];
    if (!jsonObject.hasOwnProperty(this.paramName)) {
      throw new RequiredParamHttpError(this.paramName);
    }
    const paramValue = jsonObject[this.paramName] as string;
    if (paramValue.length < this.minLen) {
      throw new RequiredMinLengthDomainError(this.paramName, this.minLen);
    }
  }
}
