export class ItemPrice {
  private readonly _value: number;

  constructor(_value: number) {
    this._value = _value;
  }

  get() {
    return this._value;
  }
}