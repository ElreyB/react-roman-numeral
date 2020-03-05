import React, { useState } from "react";
import Button from "../../styleGuide/Button";
import TextInput from "../../styleGuide/TextInput";
import { romanNumeralsConverter, arabicNumberConverter } from "./utils";

const converterType = {
  roman: {
    title: "Roman Numeral Converter",
    label: "Arabic Number",
    name: "roman",
    type: "number"
  },
  arabic: {
    title: "Arabic Number Converter",
    label: "Roman Number",
    name: "arabic",
    type: "text"
  }
};

export default function Form({ converter, ...props }) {
  const [result, setResult] = useState({});
  const [state, setState] = useState({});
  const { title, ...rest } = converterType[converter];

  const handleOnChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (converter === "roman") {
      setResult(prevResult => ({
        ...prevResult,
        roman: romanNumeralsConverter(state.roman)
      }));
    } else {
      setResult(prevResult => ({
        ...prevResult,
        arabic: arabicNumberConverter(state.arabic.toUpperCase())
      }));
    }
  };

  const type = converterType[converter].name;
  console.log(result);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <TextInput
          {...rest}
          value={state[type]}
          handleOnChange={handleOnChange}
        />
        <Button label="Convert" onClick={handleSubmit} />
      </form>
      <section>
        {result[converter] && (
          <>
            <p>{result[converter]}</p>
            <Button
              label="Clear"
              onClick={() =>
                setResult(prevResult => ({
                  ...prevResult,
                  [converter]: null
                }))
              }
            />
          </>
        )}
      </section>
    </>
  );
}
