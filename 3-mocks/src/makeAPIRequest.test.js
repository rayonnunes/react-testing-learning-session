import { makeAPIRequest, makeTwoAPIRequestWithParams } from "./makeAPIRequest";
import { getResource, getResourceID } from "./services/api";

jest.mock("./services/api", () => ({
  getResource: jest.fn().mockResolvedValue({ data: "Resource" }),
  getResourceID: jest.fn(),
}));

describe("makeAPIRequest", () => {
  it("calls the API service from makeAPIRequest", async () => {
    getResource.mockResolvedValue({ data: "Resource" });

    console.log("getResource", getResource);
    const result = await makeAPIRequest();

    // expect(result).toBe({ data: "Resource" }); ⛔

    expect(getResource).toHaveBeenCalled();
    expect(getResource).toHaveBeenCalledTimes(1);
    expect(getResource).toHaveBeenNthCalledWith(1);
    expect(getResource).toHaveReturned();
    expect(result).toStrictEqual({ data: "Resource" });
  });

  it("calls the API service twice and returns corresponding resource when calling with parameters", async () => {
    getResourceID
      .mockResolvedValueOnce({ data: "Resource 1" })
      .mockResolvedValueOnce({ data: "Resource 2" });

    const result = await makeTwoAPIRequestWithParams();

    console.log("getResource calls", getResource.mock.calls);
    getResourceID.mock.results.map((result) => console.log("result", result));

    expect(getResourceID).toHaveBeenCalled();
    expect(getResourceID).toHaveBeenCalledWith({ id: 1 });
    expect(getResourceID).toHaveBeenCalledTimes(2);
    expect(getResourceID).toHaveBeenNthCalledWith(1, { id: 1 });
    expect(getResourceID).toHaveBeenNthCalledWith(2, { id: 2 });
    expect(getResourceID).toHaveReturned();
    expect(result).toStrictEqual([
      { data: "Resource 1" },
      { data: "Resource 2" },
    ]);
  });

  it("fails when getResource fails", async () => {
    getResource.mockRejectedValueOnce(new Error("Request failed"));

    await expect(makeAPIRequest()).rejects.toThrow("Request failed");
  });
});
