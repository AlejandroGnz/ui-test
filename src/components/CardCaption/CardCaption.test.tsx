import React from "react";
import { render } from "@testing-library/react";
import CardCaption from "./CardCaption";

describe("CardCaption Component", () => {
  test("shoudl render correctry", async () => {
    const { getByText } = await render(
      <CardCaption
        name="Alejandro"
        description="some description"
        votes={{ positive: 10, negative: 11 }}
      />
    );
    expect(getByText("Alejandro")).toBeInTheDocument();
  });
});
