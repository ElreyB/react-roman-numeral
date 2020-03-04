import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Label = styled.label``;

const StyledInput = styled.input``;

export default function Input({
  label,
  id,
  type,
  value,
  name,
  className,
  onChange,
  ...props
}) {
  return (
    <Wrapper className={className}>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        {...props}
      />
    </Wrapper>
  );
}
