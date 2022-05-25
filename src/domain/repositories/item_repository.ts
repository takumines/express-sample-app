import {Item} from "../../types/item";

export interface ItemRepository {
  findAll(): Promise<Item[]>;
  find(id: number): Promise<Item>;
}