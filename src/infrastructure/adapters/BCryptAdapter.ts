import { Hash } from "../../application/cryptography";
import * as bcrypt from "bcrypt";

export class BCryptAdapter implements Hash {
  constructor(private readonly salt: number) {}

  async create(value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt);
  }

  comparer(value: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(value, encrypted);
  }
}
