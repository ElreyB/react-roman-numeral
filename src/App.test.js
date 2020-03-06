import React from "react";
import { render } from "./test-utils";
import App from "./App";

test("renders learn react link", () => {
  expect(() => render(<App />)).not.toThrow();
});
