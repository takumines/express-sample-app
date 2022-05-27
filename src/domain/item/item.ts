import { ItemId } from "./item_id";
import { ItemName } from "./item_name";
import { ItemPrice } from "./item_price";
import { ItemDescription } from "./item_description";
import { ItemImage } from "./item_image";

export class Item {
  private readonly _id: ItemId;
  private readonly _name: ItemName;
  private readonly _price: ItemPrice;
  private readonly _description: ItemDescription;
  private readonly _image: ItemImage;

  constructor(
    _name: ItemName,
    _price: ItemPrice,
    _description: ItemDescription,
    _image: ItemImage
  ) {
    this._id = ItemId.generate();
    this._name = _name;
    this._price = _price;
    this._description = _description;
    this._image = _image;
  }

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }

  price() {
    return this._price;
  }

  description() {
    return this._description;
  }

  image() {
    return this._image;
  }
}