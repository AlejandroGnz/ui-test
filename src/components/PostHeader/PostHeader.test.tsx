import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostHeader from "./PostHeader";

describe("PostHeader Component", () => {
  test("should render correctly", async () => {
    const { getByTestId } = await render(<PostHeader />);

    const element = getByTestId("select");

    expect(element).toBeInTheDocument();
  });

  test("should call onChange function", async () => {
    const onChangeMock = jest.fn();

    const { getByTestId } = await render(
      <PostHeader onChange={onChangeMock} />
    );

    const element = getByTestId("select");

    userEvent.selectOptions(element, ["list"]);

    expect(onChangeMock).toBeCalledTimes(1);

    expect(onChangeMock).toBeCalledWith("list");
  });
});
