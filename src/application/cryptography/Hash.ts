export interface Hash {
  create(value: string): Promise<string>;

  comparer(value: string, encrypted: string): Promise<boolean>;
}
