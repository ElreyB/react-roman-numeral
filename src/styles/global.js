import { createGlobalStyle } from "styled-components";
import image from "./images/roman-background.jpeg";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
    background-image: url(${image});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  body, p, h1 {
    margin: 0;
  }

  h1 {
    font-size: 36px;
  }
`;
