import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs(() => ({ type: "button" }))``;

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}
