import { Request } from "express";
export const pingCheck = (req: Request, res: Response) => {
  console.log(req.body);

  return res.status(200).json({
    message: "pink check ok",
  });
};
