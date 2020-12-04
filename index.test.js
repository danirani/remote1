const {tvRemote} = require("./index.js");

describe("Remote 1 Test", () => {
    test('tvRemote Test', () => {
        expect(tvRemote("codewars")).toBe(36);
    });
});

test('Misc Remote 1 Tests', () => {
  expect(tvRemote("does")).toBe(16);
  expect(tvRemote("your")).toBe(23);
  expect(tvRemote("solution")).toBe(33);
  expect(tvRemote("work")).toBe(20);
  expect(tvRemote("for")).toBe(12);
  expect(tvRemote("these")).toBe(27);
  expect(tvRemote("words")).toBe(25);
});