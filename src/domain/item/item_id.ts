import UUID from "uuid";

export class ItemId {
  private readonly _value: string;

  constructor(_value: string) {
    this._value = _value;
  }

  static generate() {
    return new ItemId( UUID.v4());
  }

  get() {
    return this._value;
  }
}