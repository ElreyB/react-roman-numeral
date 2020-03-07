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
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const FormSection = styled.section`
  flex-basis: 50%;
  padding: 0 12px;
  @media (max-width: 425px) {
    flex-basis: 100%;
  }
`;
const ResultWrapper = styled.div`
  padding-top: 20px;
`;

const Result = styled.p`
  padding: 10px 0;
  font-size: 31px;
  letter-spacing: 2px;
`;

export default function Form({ converter, ...props }) {
  const [result, setResult] = useState({ arabic: undefined, roman: "" });
  const [state, setState] = useState({ arabic: undefined, roman: "" });
  const [error, setError] = useState({ arabic: "", roman: "" });
  const { title, ...rest } = converterType[converter];

  const handleOnChange = e => {
    const { name, value } = e.target;

    if (value > 3999) {
      setError({ ...error, [name]: "Invalid input" });
      setState({ ...state, [name]: value });
    } else {
      setError({ ...error, [name]: "" });
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (converter === "roman") {
      setResult({
        ...result,
        roman: romanNumeralsConverter(state.roman)
      });
    } else {
      setResult({
        ...result,
        arabic: arabicNumberConverter(state.arabic.toUpperCase())
      });
    }
  };

  console.log(rest, result, state[converter], result[converter], error);

  return (
    <Section>
      <h1>{title}</h1>
      <FormWrapper>
        <FormSection>
          <form onSubmit={handleSubmit}>
            <TextInput
              {...rest}
              value={state[converter]}
              handleOnChange={handleOnChange}
              min={1}
              max={3999}
              step={1}
              error={error[converter]}
            />
            <Button
              label="Convert"
              onClick={handleSubmit}
              error={error[converter]}
            />
          </form>
        </FormSection>
        <FormSection>
          {result[converter] && (
            <ResultWrapper>
              <Result>{result[converter]}</Result>
              <Button
                label="Clear"
                onClick={() =>
                  setResult({
                    ...result,
                    [converter]: null
                  })
                }
              />
            </ResultWrapper>
          )}
        </FormSection>
      </FormWrapper>
    </Section>
  );
}
