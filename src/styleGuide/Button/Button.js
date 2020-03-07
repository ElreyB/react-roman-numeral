import React from "react";
import styled from "styled-components/macro";
import { string, func } from "prop-types";

const StyledButton = styled.button.attrs(({ type }) => ({ type: type }))`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 5px 0;
  background-color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export default function Button({ label, onClick, type, className, error }) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      className={className}
      error={error}
      disabled={error ? true : false}
    >
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
