import { AppSyncResolverEvent, Context } from "aws-lambda";

export type AppSyncArguments = {};

const getResource = async ({ id }: { id: string }) => ({
  id,
  name: `Resource ${id}`,
});

const getResources = async () => [
  {
    id: "1",
    name: "Resource 1",
  },
];

const createResource = async ({ name }: { name: string }) => ({
  id: "1",
  name,
});

export const graphqlHandler = async (
  event: AppSyncResolverEvent<AppSyncArguments>,
  context: Context
) => {
  const {
    arguments: eventArguments,
    info: { fieldName },
  } = event;

  const handlers = {
    getResource,
    getResources,
    createResource,
  };

  if (fieldName in handlers) {
    return await handlers[fieldName](eventArguments);
  }

  throw new Error(`Unsupported operation ${fieldName}`);
};
