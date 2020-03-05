import React from "react";
import styled from "styled-components/macro";
import { string, func } from "prop-types";

const StyledButton = styled.button.attrs(({ type }) => ({ type: type }))``;

export default function Button({ label, onClick, type, className }) {
  return (
    <StyledButton onClick={onClick} type={type} className={className}>
      {label}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: "button"
};

Button.propTypes = {
  className: string,
  label: string,
  onClick: func,
  type: string
};
