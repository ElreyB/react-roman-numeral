import React, { useState } from "react";
import styled from "styled-components/macro";
import Button from "../../styleGuide/Button";
import TextInput from "../../styleGuide/TextInput";
import {
  romanNumeralsConverter,
  arabicNumberConverter,
  converterType
} from "./utils";

const Section = styled.section`
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormSection = styled.section`
  flex-basis: 50%;
  padding: 0 12px;
`;

const Result = styled.div`
  padding-top: 20px;
`;

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
  return (
    <Section>
      <h1>{title}</h1>
      <FormWrapper>
        <FormSection>
          {" "}
          <form onSubmit={handleSubmit}>
            <TextInput
              {...rest}
              value={state[type]}
              handleOnChange={handleOnChange}
            />
            <Button label="Convert" onClick={handleSubmit} />
          </form>
        </FormSection>
        <FormSection>
          {" "}
          <Result>
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
          </Result>
        </FormSection>
      </FormWrapper>
    </Section>
  );
}
