import React from "react";
import { render } from "../../test-utils";
import Form from "./Form";

describe("Form", () => {
  it("render Form without crashing", () => {
    expect(() => render(<Form converter="roman" />)).not.toThrow();
  });
  describe("converter prop is roman", () => {
    it("should render 'Roman Numeral Converter' as title", () => {
      const { queryByText } = render(<Form converter="roman" />);
      expect(queryByText("Roman Numeral Converter")).not.toBeNull();
    });
  });

  describe("converter prop is arabic", () => {
    it("should render 'Arabic Number Converter' as title", () => {
      const { queryByText } = render(<Form converter="arabic" />);
      expect(queryByText("Arabic Number Converter")).not.toBeNull();
    });
  });
});
