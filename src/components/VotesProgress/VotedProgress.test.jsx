import React from "react";
import { render } from "@testing-library/react";
import VotedProgress from "./VotedProgress";

describe("VotedProgress Component", () => {
  test("should render correctly", async () => {
    const votesUp = 5;
    const votesDown = 10;

    const { findAllByText } = await render(
      <VotedProgress votesUp={votesUp} votesDown={votesDown} />
    );
    const elemets = await findAllByText(/\d{2}\.\d{1}%/);

    elemets.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
