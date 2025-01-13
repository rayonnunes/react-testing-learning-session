import { getResource, getResourceID } from "./services/api";

export const makeAPIRequest = async () => {
  const resource = await getResource();

  return resource;
};

export const makeTwoAPIRequestWithParams = async () => {
  const params1 = { id: 1 };
  const params2 = { id: 2 };

  const resource = [];

  try {
    const resource1 = await getResourceID(params1);
    const resource2 = await getResourceID(params2);
    resource.push(resource1, resource2);
  } catch (error) {
    console.log(error);
  }

  return resource;
};
