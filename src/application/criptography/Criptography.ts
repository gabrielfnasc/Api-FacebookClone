export interface Criptography {
  encrypt(value: string): Promise<string>;

  decrypt(value: string): Promise<string>;
}
