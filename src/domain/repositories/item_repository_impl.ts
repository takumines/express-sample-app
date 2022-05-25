import {Item} from "../../types/item";
import {items} from "../item";
import { ItemRepository } from "./item_repository";

class ItemRepositoryImpl implements ItemRepository {
  async findAll(): Promise<Item[]> {
    return Object.values(items);
  }

  async find(id: number): Promise<Item> {
    return items[id];
  }
}

export default new ItemRepositoryImpl();