import { Usecase } from '../UseCase';
import { UserRepository } from '@src/application/repositories';
import { Validator } from '@src/domain/validator/validator';
import { Cryptography, Hash } from '@src/application/cryptography';
import { EmailAlreadyRegisteredError } from '@src/domain/errors';

export type InputCreateUserDto = {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
};

export type OutputCreateUserDto = {
  accessToken: string;
};

export class CreateUserUseCase implements Usecase<InputCreateUserDto, OutputCreateUserDto> {
  constructor(
    private readonly repository: UserRepository,
    private readonly validator: Validator,
    private readonly hash: Hash,

    private readonly cryptography: Cryptography
  ) {}
  async execute(data: InputCreateUserDto): Promise<OutputCreateUserDto> {
    this.validator.validate(data);
    const { email, password } = data;

    //check if user exists
    const user = await this.repository.findByEmail(email);
    if (user) {
      throw new EmailAlreadyRegisteredError();
    }

    const hash = await this.hash.create(password);

    const userId = await this.repository.create({
      ...data,
      password: hash,
    });

    const accessToken = await this.cryptography.encrypt(userId);

    return { accessToken };
  }
}
