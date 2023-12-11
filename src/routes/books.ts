import { Router, Request, Response } from "express";

export const booksRouter = Router();

booksRouter.get("/", (req: Request, res: Response) => {
  res.send("API getting correctly.");
});

booksRouter.post("/", (req: Request, res: Response) => {
  res.send("API posting correctly.");
});

booksRouter.put("/", (req: Request, res: Response) => {
  res.send("API putting correctly.");
});

booksRouter.patch("/", (req: Request, res: Response) => {
  res.send("API patching correctly.");
});

booksRouter.delete("/", (req: Request, res: Response) => {
  res.send("API deleting correctly.");
});