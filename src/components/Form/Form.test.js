import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("render Form without crashing", () => {
    expect(() => render(<Form converter="roman" />)).not.toThrow();
  });

  it("should render 'Roman Numeral Converter' as title", () => {
    const { queryByText } = render(<Form converter="roman" />);
    expect(queryByText("Roman Numeral Converter")).not.toBeNull();
  });

  it("should render 'Arabic Number Converter' as title", () => {
    const { queryByText } = render(<Form converter="arabic" />);
    expect(queryByText("Arabic Number Converter")).not.toBeNull();
  });
});
