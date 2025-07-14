import { Queue } from "bullmq";
import SampleQueueProducers from "./producers/SampleQueueProducers";
import redisConnection from "../config/redisConfig";

export default new Queue("SampleQueue", { connection: redisConnection });
