import { Job } from "bullmq";
import { IJob } from "../types/bullMqJobDefinition";

export default class SampleJob implements IJob {
  name: string;
  payload?: Record<string, unknown>;

  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  handle = () => {
    console.log("hanlder of a job");
  };

  failed = (job?: Job): void => {
    console.log("job failed");
    if (job) {
      console.log(job.id);
    }
  };
}
