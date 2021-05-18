import React from "react";
import { render } from "@testing-library/react";
import CardUptadeTime from "./CardUptadeTime";

describe("CardUptadeTime", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2021, 4, 17));
  });

  test("should render correctly", async () => {
    const { getByText } = await render(
      <CardUptadeTime
        lastUpdated="2021-02-14T23:10:19.134Z"
        category="business"
      />
    );
    const element = getByText(/ ago /);

    expect(element.textContent).toContain("ago business");
  });
});
