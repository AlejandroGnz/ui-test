import React from "react";
import { fireEvent, render } from "@testing-library/react";
import VotesInput from "./VotesInput";

describe("VotesInput Component", () => {
  const onSubmit = jest.fn();
  beforeEach(() => {
    onSubmit.mockClear();
  });

  test("prevent call onSubmit when vote its disabled", async () => {
    const { getByText } = await render(<VotesInput onSubmit={onSubmit} />);

    await fireEvent.click(getByText("Vote Now"));
    expect(onSubmit).toBeCalledTimes(0);
  });

  test("call onSubmit for VOTE_DOWN", async () => {
    const { getByText, getAllByRole } = await render(
      <VotesInput onSubmit={onSubmit} />
    );

    const [downVoteBtn] = getAllByRole("button");

    await fireEvent.click(downVoteBtn);
    await fireEvent.click(getByText("Vote Now"));

    expect(onSubmit).toBeCalledWith("VOTE_DOWN");
  });

  test("call onSubmit for VOTE_UP", async () => {
    const { getByText, getAllByRole } = await render(
      <VotesInput onSubmit={onSubmit} />
    );

    const [, upVoteBtn] = getAllByRole("button");

    await fireEvent.click(upVoteBtn);
    await fireEvent.click(getByText("Vote Now"));

    expect(onSubmit).toBeCalledWith("VOTE_UP");
  });
  test("hide buttons after onSubmit been called", async () => {
    const { getByText, getAllByRole } = await render(
      <VotesInput onSubmit={onSubmit} />
    );

    const [downVoteBtn] = getAllByRole("button");

    await fireEvent.click(downVoteBtn);
    await fireEvent.click(getByText("Vote Now"));

    expect(onSubmit).toBeCalledWith("VOTE_DOWN");

    await fireEvent.click(getByText("Vote Again"));

    expect(getAllByRole("button")).toHaveLength(3);
  });
});
