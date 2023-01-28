export class Thrower extends Error {
  constructor(message: Parameters<typeof Error>[0]) {
    super(message);
    this.name = "Thrown";
  }
}
