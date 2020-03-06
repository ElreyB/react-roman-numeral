import { createGlobalStyle } from "styled-components";
import image from "./img/background.jpg";

export const GlobalStyles = createGlobalStyle`
  html {
    /* background-color: ${({ theme }) => theme.colors.black}; */
  }
  body {
    margin: 0;
    padding: 0;
    /* color: ${({ theme }) => theme.colors.white}; */
    background-image: url(${image});
    background-size: cover;
  }
  h1 {
    font-size: 30px;
  }
`;
