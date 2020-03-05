import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button.attrs(() => ({ type: "button" }))``;

export default function Button({ label }) {
  return <StyledButton>{label}</StyledButton>;
}
