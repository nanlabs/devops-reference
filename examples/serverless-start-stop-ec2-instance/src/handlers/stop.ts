import { ScheduledHandler } from "aws-lambda";
import {
  DescribeInstanceStatusCommand,
  EC2Client,
  StopInstancesCommand,
} from "@aws-sdk/client-ec2";

export const handler: ScheduledHandler = async (event) => {
  const ec2 = new EC2Client({ region: event.region });

  const instanceId = process.env.EC2_INSTANCE_ID;

  if (!instanceId) {
    throw new Error("EC2_INSTANCE_ID is not defined");
  }

  // check if instance is running. If yes, stop it
  const instanceStatus = await ec2.send(
    new DescribeInstanceStatusCommand({
      InstanceIds: [instanceId],
    })
  );

  const isRunning = instanceStatus.InstanceStatuses?.some(
    ({ InstanceState }) => InstanceState?.Name === "running"
  );
  if (!isRunning) {
    console.log("Instance is not running. Nothing to do");
    return;
  }

  await ec2.send(new StopInstancesCommand({ InstanceIds: [instanceId] }));
  console.log(`Stopped EC2 instance ${instanceId}`);
};
