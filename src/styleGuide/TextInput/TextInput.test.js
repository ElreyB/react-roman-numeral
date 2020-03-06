import React from "react";
import { render, fireEvent } from "../../test-utils";
import TextInput from "./TextInput";

const props = {
  label: "Test Label",
  value: "Elrey",
  type: "text",
  name: "name",
  id: "name",
  handleOnChange: jest.fn()
};

describe("TextInput", () => {
  it("render TextInput without crashing", () => {
    expect(() => render(<TextInput {...props} />)).not.toThrow();
  });

  it("renders TextInput with default props", () => {
    const { getByLabelText } = render(
      <TextInput
        label="Default Props"
        id="foo"
        handleOnChange={props.handleOnChange}
        name="text"
      />
    );
    expect(getByLabelText("Default Props").value).toBe("");
    expect(getByLabelText("Default Props").type).toBe("number");
  });

  it("renders TextInput with props being passed", () => {
    const { getByLabelText } = render(<TextInput {...props} />);
    expect(getByLabelText("Test Label").value).toBe("Elrey");
    expect(getByLabelText("Test Label").name).toBe("name");
    expect(getByLabelText("Test Label").type).toBe("text");
    fireEvent.change(getByLabelText("Test Label"), {
      target: { value: "Bob" }
    });
    expect(props.handleOnChange).toHaveBeenCalled();
  });
});
