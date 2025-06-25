import express from "express";
import v1Router from "./v1";

const apiRouter = express.Router();

apiRouter.use("/v1", v1Router);

apiRouter.get("/", () => {});

export default apiRouter;
