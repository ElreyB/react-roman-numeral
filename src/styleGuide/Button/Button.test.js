import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

const props = {
  text: "Convert"
};

describe("Button", () => {
  it("render Button without crashing", () => {
    expect(() => render(<Button {...props} />)).not.toThrow();
  });

  it("should render with title provided by prop", () => {
    const { queryByText } = render(<Button {...props} />);
    expect(queryByText("Convert")).not.toBeNull();
  });
});
