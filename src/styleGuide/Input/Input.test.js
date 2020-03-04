import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

const props = {
  label: "Test Label",
  value: "Elrey",
  type: "text",
  name: "name",
  id: "name"
};

describe("Input", () => {
  it("render Input without crashing", () => {
    expect(() => render(<Input />)).not.toThrow();
  });

  it("renders Input with props being passed", () => {
    const { getByLabelText } = render(<Input {...props} />);
    expect(getByLabelText("Test Label").value).toBe("Elrey");
    expect(getByLabelText("Test Label").name).toBe("name");
    expect(getByLabelText("Test Label").type).toBe("text");
  });
});
