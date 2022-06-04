import {Item} from "../item/item";

export interface ItemRepository {
  findAll(): Promise<Item[]>;
  find(id: string): Promise<Item>;
}