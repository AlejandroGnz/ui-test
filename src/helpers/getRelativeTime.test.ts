import getRelativeTime from "./getRelativeTime";

describe("getRelativeTime function", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2021, 4, 17));
  });

  test("validate return relative time", () => {
    const date = new Date(2021, 3, 17).toISOString();
    expect(getRelativeTime(date)).toContain("1 month ago");
  });
});
