import React from "react";
import { render } from "@testing-library/react";
import ButtonIcon from "./ButtonIcon";

describe("ButtonIcon Component", () => {
  test("should render correctly", async () => {
    const { getByRole } = await render(<ButtonIcon type="up" />);

    expect(getByRole("button")).toBeInTheDocument();
  });
});
