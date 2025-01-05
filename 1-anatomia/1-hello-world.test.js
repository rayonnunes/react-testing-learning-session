const { test, expect } = require("./test-utils");

const message = require("./1-hello-world");

test("expect message contains 'Hello world' value", () => {
  expect(message).toBe("Hello world");
  expect(message.length).toBeGreaterThan(10);
});
