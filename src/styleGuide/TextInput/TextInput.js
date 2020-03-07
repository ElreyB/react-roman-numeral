import React from "react";
import styled from "styled-components/macro";
import { string, func, number, oneOfType } from "prop-types";

const Wrapper = styled.div`
  height: 100px;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
  @media (max-width: 525px) {
    font-size: 18px;
  }
`;

const StyledInput = styled.input`
  border: 2px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.black)};
  text-align: center;
  font-size: 20px;
  padding: 5px 0;
  width: 100%;
  margin-bottom: 10px;
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  letter-spacing: 2px;
`;

export default function TextInput({
  label,
  id,
  type,
  value,
  name,
  className,
  handleOnChange,
  error,
  ...props
}) {
  return (
    <Wrapper className={className}>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        type={type}
        onChange={handleOnChange}
        value={value}
        name={name}
        error={error}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}

TextInput.defaultProps = {
  type: "number",
  value: ""
};

TextInput.propTypes = {
  className: string,
  handleOnChange: func.isRequired,
  type: string,
  value: oneOfType([string, number]),
  id: string,
  label: string,
  name: string.isRequired
};
