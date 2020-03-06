import React from "react";
import styled from "styled-components/macro";
import { string, func, number, oneOfType } from "prop-types";

const Wrapper = styled.div`
  /* display: inline-block; */
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
`;

const StyledInput = styled.input`
  border: 2px solid grey;
  text-align: center;
  font-size: 20px;
  padding: 5px 0;
  width: 100%;
`;

export default function TextInput({
  label,
  id,
  type,
  value,
  name,
  className,
  handleOnChange,
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
        {...props}
      />
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
