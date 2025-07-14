import { Job, Worker } from "bullmq";

import SampleJob from "../jobs/sampleJob";
import redisConnection from "../config/redisConfig";

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
      // console.log("worker started", job);
      if (job.name === "SampleJob") {
        const sampleJobInstance = new SampleJob(job.data);

        sampleJobInstance.handle(job);
        // return true;
      }
    },
    {
      connection: redisConnection,
    },
  );
}
