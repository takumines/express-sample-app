import express from "express";
import * as ItemController from "./controllers/item_controller";

export const router = express.Router();

router.get('/', ItemController.index);
router.get('/:id', ItemController.show);