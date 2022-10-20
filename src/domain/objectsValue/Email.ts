export class Email {
  constructor(private readonly email: string) {
    Object.freeze(this);
  }

  static create(email: string): boolean {
    return Email.validate(email);
  }

  private static validate(email: string): boolean {
    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) {
      return false;
    }
    if (email.length > 256) {
      return false;
    }
    if (!emailRegex.test(email)) {
      return false;
    }
    const [account, address] = email.split("@");
    if (account.length > 64) {
      return false;
    }
    const domainParts = address.split(".");
    if (
      domainParts.some(function (part) {
        return part.length > 63;
      })
    ) {
      return false;
    }
    return true;
  }

  get value(): string {
    return this.email;
  }
}
