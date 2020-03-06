import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
  }
  body, p, h1 {
    margin: 0;
  }

  h1 {
    font-size: 36px;
  }
`;
