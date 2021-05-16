import getPercentageDiff from "./getPercentageDiff";

describe("getPercentageDiff Helper", () => {
  test("calculate percentage difference", async () => {
    const result = getPercentageDiff(10, 10);

    expect(result).toHaveLength(2);
    expect(result[0]).toBe(50);
    expect(result[1]).toBe(50);
  });
});
