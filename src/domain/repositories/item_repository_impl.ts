import {Item} from "../item/item";
import {ItemName} from "../item/item_name";
import {ItemPrice} from "../item/item_price";
import {ItemDescription} from "../item/item_description";
import {ItemImage} from "../item/item_image";
import {Items, Item as ItemType} from "../../types/item"

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

const itemData = itemsFromDB.map(({name, price, description, image}) => (
  new Item(
    new ItemName(name),
    new ItemPrice(price),
    new ItemDescription(description),
    new ItemImage(image)
  )
));

class ItemRepositoryImpl {
  async findAll(): Promise<ItemType[]> {

    return itemData.map((item: Item) => {
      return {
        id: item.id().get(),
        name: item.name().get(),
        price: item.price().get(),
        description: item.description().get(),
        image: item.image().get()
      }
    })
  }

  async find(id: string): Promise<ItemType> {
    const item = itemData.filter((item: Item) => {
      return item.id().get() === id
    })[0]

    return {
      id: item.id().get(),
      name: item.name().get(),
      price: item.price().get(),
      description: item.description().get(),
      image: item.image().get()
    }
  }
}

export default new ItemRepositoryImpl();