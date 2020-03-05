import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const props = {
  label: "Convert",
  onClick: jest.fn()
};

describe("Button", () => {
  it("render Button without crashing", () => {
    expect(() => render(<Button {...props} />)).not.toThrow();
  });

  it("should render with provided by prop", () => {
    const { queryByText } = render(<Button {...props} />);
    expect(queryByText("Convert")).not.toBeNull();

    fireEvent.click(queryByText("Convert"));
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should render with type provided by prop", () => {
    const { queryByText } = render(<Button {...props} type="submit" />);
    expect(queryByText("Convert").type).toBe("submit");
  });
});
