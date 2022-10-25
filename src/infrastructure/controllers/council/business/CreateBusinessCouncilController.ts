import e from 'express';
import { Council } from "../../../domain/entities/Council";
import { Validator } from '../../../domain/validator/validator';
import { HttpResponse } from "../../http/presentation/controllers/helpers/Http";
import { serverError } from '../../http/presentation/controllers/helpers/HttpHelper';
import { BaseController } from "../BaseController";

export type CreateBusinessCouncilRequest = {
  userId: string;
  council: Council;
};

export class CreateBusinessCouncilController implements BaseController {
constructor(private readonly validator : Validator,private readonly usecase :){}

 async  handle(request: CreateBusinessCouncilRequest): Promise<HttpResponse> {
   try {
    this.validator.validate(request);
const output= await this.usecase
   } catch (error) {
    return serverError(error as Error)
   }
  }
}
