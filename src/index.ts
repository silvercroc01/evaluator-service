import express, { Express } from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorker";
import sampleQueueProducer from "./producers/sampleQueueProducer";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);

  SampleWorker('SampleQueue');
  sampleQueueProducer('SampleJob', {
    name: 'killua',
    company: 'hxh',
    position: 'hunter',
    location: 'at zoldycks',
  }, 19);


  sampleQueueProducer('SampleJob', {
    name: 'gon',
    company: 'hxh',
    position: 'hunter',
    location: 'chimera',
  }, 9);
});
