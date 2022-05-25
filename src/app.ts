import express, { NextFunction, Request, Response } from 'express';
import todoRoute from './routes/todos';
import { json } from 'body-parser';

const app = express();

// リクエストデータをjson形式にパースする
app.use(json());
app.use('/todos', todoRoute);
app.use((err: Error, req:Request, res:Response, next:NextFunction) => {
  res.status(500).json({message: err.message});
});

app.listen(3000);