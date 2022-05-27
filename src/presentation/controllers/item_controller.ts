import {Request, RequestHandler, Response} from "express";
import ItemService from "../../application/services/item_service";
import { Item } from "../../domain/item/item";

export const index: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const itemList: Item[] = await ItemService.findAll();

    res.status(200).json({
      message: "Item一覧を取得しました。",
      item_list: itemList
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    }
  }
}

export const show: RequestHandler<{id: string}> = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const item: Item = await ItemService.find(id);

    res.status(200).json({
      message: "Itemを取得しました。",
      item
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    }
  }
}