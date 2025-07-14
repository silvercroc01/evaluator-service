import { Request, Response } from "express";

export const pingCheck = (_req: Request, res: Response) => {
  res.status(200).json({ message: "ping check ok" });
};
