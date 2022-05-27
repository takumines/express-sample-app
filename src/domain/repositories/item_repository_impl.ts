import {Item} from "../item/item";
import {ItemName} from "../item/item_name";
import {ItemPrice} from "../item/item_price";
import {ItemDescription} from "../item/item_description";
import {ItemImage} from "../item/item_image";

const itemsFromDB = [
  {
    name: `miura`,
    price: 100,
    description: `テスト説明1`,
    image: `image_url1`,
  },
  {
    name: `tanaka`,
    price: 200,
    description: `テスト説明2`,
    image: `image_url2`,
  }
]

class ItemRepositoryImpl {
  async findAll(): Promise<Item[]> {
    const item = new Item(
      new ItemName('test'),
      new ItemPrice(2000),
      new ItemDescription('Tasty'),
      new ItemImage("https://cdn.auth0.com/blog/whatabyte/burger-sm.png")
    )
    return itemsFromDB.map(({name, price, description, image}) => (
      new Item(
        new ItemName(name),
        new ItemPrice(price),
        new ItemDescription(description),
        new ItemImage(image)
      )
    ));
  }

  async find(id: number): Promise<Item> {
    console.log(id);
    return new Item(
      new ItemName('test'),
      new ItemPrice(2000),
      new ItemDescription('Tasty'),
      new ItemImage("https://cdn.auth0.com/blog/whatabyte/burger-sm.png")
    );
  }
}

export default new ItemRepositoryImpl();