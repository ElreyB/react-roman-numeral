import React from "react";
import styled from "styled-components";
import { string, func, number, oneOfType } from "prop-types";

const Wrapper = styled.div``;

const Label = styled.label``;

const StyledInput = styled.input``;

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
