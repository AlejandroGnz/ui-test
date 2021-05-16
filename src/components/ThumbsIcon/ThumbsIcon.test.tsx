import React from "react";
import { render } from "@testing-library/react";
import ThumbsIcon from "./ThumbsIcon";

describe("ThumbsIcon Component", () => {
  test("should render up", async () => {
    const { getByAltText } = await render(<ThumbsIcon type="up" />);
    const element = getByAltText("thumbs up") as HTMLImageElement;

    expect(element).toBeInTheDocument();
    expect(element.src).toContain("/assets/img/thumbs-up.svg");
  });

  test("should render down", async () => {
    const { getByAltText } = await render(<ThumbsIcon type="down" />);
    const element = getByAltText("thumbs down") as HTMLImageElement;

    expect(element).toBeInTheDocument();
    expect(element.src).toContain("/assets/img/thumbs-down.svg");
  });
});
