import express, { json, Request, Response } from "express";

const port: number = 3000;

const app = express();

app.listen(port, () => {
  console.log(`API inicializada na porta ${port}.`);
});

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("API recebendo corretamente.");
});

app.post("/", (req: Request, res: Response) => {
  res.send("API postando corretamente.");
});

app.put("/", (req: Request, res: Response) => {
  res.send("API atualizando corretamente.");
});

app.patch("/", (req: Request, res: Response) => {
  res.send("API modificando corretamente.");
});

app.delete("/", (req: Request, res: Response) => {
  res.send("API excluindo corretamente.");
});