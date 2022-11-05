import { Validator } from "../../../domain/validator/validator";
import { Usecase } from "../UseCase";

export type InputLoginDto = {
  email: string;
  password: string;
};

export type OutputLoginDto = {
  accessToken: string;
};

export class LoginUseCase implements Usecase<InputLoginDto, OutputLoginDto> {
  constructor(private readonly validator: Validator, private readonly repository : ) {}
  async execute(data: InputLoginDto): Promise<OutputLoginDto> {
    this.validator.validate(data);

  const user = await this.repository
  }
}
