import { makeAPIRequest, makeTwoAPIRequestWithParams } from "./makeAPIRequest";
import * as api from "./services/api";

afterEach(() => {
  jest.resetAllMocks();
});

describe("makeAPIRequest and makeTwoAPIRequestWithParams with spyOn", () => {
  it("calls the API service from makeAPIRequest", async () => {
    const spy = jest
      .spyOn(api, "getResource")
      .mockResolvedValue({ data: "Resource" });

    const result = await makeAPIRequest();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual({ data: "Resource" });
  });

  it("calls the API service twice and returns corresponding resource when calling with parameters", async () => {
    const spy = jest.spyOn(api, "getResourceID");
    spy
      .mockResolvedValueOnce({ data: "Resource 1" })
      .mockResolvedValueOnce({ data: "Resource 2" });

    const result = await makeTwoAPIRequestWithParams();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, { id: 1 });
    expect(spy).toHaveBeenNthCalledWith(2, { id: 2 });
    expect(result).toStrictEqual([
      {
        data: "Resource 1",
      },
      {
        data: "Resource 2",
      },
    ]);
  });

  it("fails when getResource fails", async () => {
    const spy = jest
      .spyOn(api, "getResource")
      .mockRejectedValue(new Error("Request failed"));

    await expect(makeAPIRequest()).rejects.toThrow("Request failed");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
