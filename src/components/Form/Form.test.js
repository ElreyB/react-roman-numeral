import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

const props = {
  title: "Test title",
  label: "Test label"
};

describe("Form", () => {
  it("render Form without crashing", () => {
    expect(() => render(<Form />)).not.toThrow();
  });

  it("should render with title provided by prop", () => {
    const { queryByText } = render(<Form {...props} />);
    expect(queryByText("Test title")).not.toBeNull();
    // expect(queryByText("Test label")).not.toBeNull();
  });
});
