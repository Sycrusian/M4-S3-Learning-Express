import express, { json, Request, Response } from "express";
import { booksRouter } from "./routes/books";

const port: number = 3000;

const app = express();

app.listen(port, () => {
  console.log(`API running on port ${port}.`);
});

app.use(json());

app.use("/books", booksRouter);