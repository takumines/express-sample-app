import { v4 } from 'uuid';

export class ItemId {
  private readonly _value: string;

  constructor(_value: string) {
    this._value = _value;
  }

  static generate() {
    const id = v4();
    console.log(id);
    return new ItemId(id);
  }

  get() {
    return this._value;
  }
}