import type { Email } from "../value-objects/Email.js";

export class Patient {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: Email,
  ) {}
}
