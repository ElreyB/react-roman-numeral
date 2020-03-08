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
  @media (max-width: 525px) {
    flex-direction: column;
  }
`;

const FormSection = styled.section`
  flex-basis: 50%;
  padding: 0 12px;
  @media (max-width: 525px) {
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
  margin-bottom: 26px;
  @media (max-width: 525px) {
    margin-bottom: 10px;
  }
`;

const Heading = styled.h1`
    margin-bottom: 10px;
    border-bottom: 1px solid white;
}
  @media (max-width: 525px) {
    font-size: 23px;
  }
  @media (max-width: 320px) {
    font-size: 19px;
  }
`;

export default function Form({ converter, ...props }) {
  const [result, setResult] = useState({ arabic: undefined, roman: "" });
  const [state, setState] = useState({ arabic: undefined, roman: "" });
  const [error, setError] = useState({ arabic: "", roman: "" });
  const { title, ...rest } = converterType[converter];

  const handleOnChange = e => {
    const { name, value } = e.target;
    const invalidInput =
      value === "" ||
      (isNaN(value) && value.toUpperCase().match(/[^MDCLXVI]/)) ||
      value > 3999;

    if (invalidInput) {
      setError({ ...error, [name]: "Invalid input" });
      setState({
        ...state,
        [name]: isNaN(value) ? value.toUpperCase() : value
      });
    } else {
      setError({ ...error, [name]: "" });
      setState({
        ...state,
        [name]: isNaN(value) ? value.toUpperCase() : value
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { roman, arabic } = state;
    if (converter === "roman") {
      setResult({
        ...result,
        roman: romanNumeralsConverter(roman)
      });
    } else {
      setResult({
        ...result,
        arabic: arabicNumberConverter(arabic.toUpperCase())
      });
    }
  };

  return (
    <Section>
      <Heading>{title}</Heading>
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
                onClick={() => {
                  setResult({
                    ...result,
                    [converter]: !isNaN(state[converter]) ? "" : undefined
                  });

                  setState({
                    ...state,
                    [converter]: !isNaN(state[converter]) ? "" : undefined
                  });
                }}
              />
            </ResultWrapper>
          )}
        </FormSection>
      </FormWrapper>
    </Section>
  );
}
