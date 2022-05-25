import { RequestHandler } from "express";
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, _next) => {
  // リクエストボディのtextの型をstring型にキャスト
  const text = (req.body as {text: string}).text;
  console.log(text);
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'TODOを作成しました。', createdTodo: newTodo});
}