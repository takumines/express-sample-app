export class ItemImage {
  private readonly _value: string;

  constructor(_value: string) {
    this._value = _value;
  }

  get() {
    return this._value;
  }
}