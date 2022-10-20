export interface Cryptography {
  encrypt(value: string): Promise<string>;

  decrypt(value: string): Promise<string>;
}
