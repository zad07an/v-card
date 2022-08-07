import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;
    transition: all 0.5s;
  }

  width: 100%;
  background: #000;
  
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 412px) {
    width: 100%;
  }
`