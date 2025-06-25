import express, { Express } from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes/v1";

const app: Express = express();

app.use("/api", apiRouter);
app.get("/", (_req, res) => {
  res.json({ msg: "ok" });
});
app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);
});
