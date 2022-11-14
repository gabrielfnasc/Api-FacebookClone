import { Hash } from "@src/application/cryptography";
import bcrypt from "bcrypt";

export class BCryptAdapter implements Hash {
  constructor(private readonly salt: number) {}

  async create(value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt);
  }

  comparer(value: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(value, encrypted);
  }
}
