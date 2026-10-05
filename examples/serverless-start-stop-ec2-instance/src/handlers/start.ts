import { ScheduledHandler } from "aws-lambda";
import {
  DescribeInstanceStatusCommand,
  EC2Client,
  StartInstancesCommand,
} from "@aws-sdk/client-ec2";

export const handler: ScheduledHandler = async (event) => {
  const ec2 = new EC2Client({ region: event.region });

  const instanceId = process.env.EC2_INSTANCE_ID;

  if (!instanceId) {
    throw new Error("EC2_INSTANCE_ID is not defined");
  }

  // check if instance is running. If not, start it
  const instanceStatus = await ec2.send(
    new DescribeInstanceStatusCommand({
      InstanceIds: [instanceId],
    })
  );

  if (
    instanceStatus?.InstanceStatuses &&
    instanceStatus?.InstanceStatuses[0]?.InstanceState?.Name === "running"
  ) {
    console.log("Instance is already running");
    return;
  }

  await ec2.send(new StartInstancesCommand({ InstanceIds: [instanceId] }));
  console.log(`Started EC2 instance ${instanceId}`);
};
