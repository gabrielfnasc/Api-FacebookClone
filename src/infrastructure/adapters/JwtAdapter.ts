import { Cryptography } from "../../application/cryptography/Cryptography";
import jwt from "jsonwebtoken";

export class JwtAdapter implements Cryptography {
  constructor(private readonly secret: string) {}

  async encrypt(value: string): Promise<string> {
    return jwt.sign({ id: value }, this.secret);
  }

  async decrypt(value: string): Promise<string> {
    const data = jwt.verify(value, this.secret) as JwtPayloadType;
    return data.id;
  }
}

export type JwtPayloadType = {
  id: string;
};
