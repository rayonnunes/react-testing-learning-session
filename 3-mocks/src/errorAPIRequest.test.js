import { makeAPIRequest } from "./makeAPIRequest";
import { getResource } from "./services/api";

jest.mock("./services/api");

afterEach(() => {
  jest.clearAllMocks();
});

describe("makeAPIRequest", () => {
  it("fails when getResource fails", async () => {
    getResource.mockRejectedValue(new Error("Request failed"));

    await expect(makeAPIRequest()).rejects.toThrow("Request failed");
  });

  it("calls the API service from makeAPIRequest", async () => {
    getResource.mockResolvedValue({ data: "Resource" });
    const result = await makeAPIRequest();

    expect(getResource).toHaveBeenCalled();
    expect(result).toStrictEqual({ data: "Resource" });
  });
});
