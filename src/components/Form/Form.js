import React, { useState } from "react";
import Button from "../../styleGuide/Button";
import TextInput from "../../styleGuide/TextInput";
import { romanNumeralsConverter, arabicNumberConverter } from "./utils";

const converterType = {
  roman: {
    title: "Roman Numeral Converter",
    label: "Arabic Number",
    name: "roman"
  },
  arabic: {
    title: "Arabic Number Converter",
    label: "Roman Number",
    name: "arabic"
  }
};

export default function Form({ converter, ...props }) {
  const [result, setResult] = useState("");
  const [state, setState] = useState({});
  const { title, ...rest } = converterType[converter];

  const handleOnChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const type = converterType[converter].name;

  return (
    <form>
      <h1>{title}</h1>
      <TextInput
        {...rest}
        value={state[type]}
        handleOnChange={handleOnChange}
      />
      <Button />
    </form>
  );
}
