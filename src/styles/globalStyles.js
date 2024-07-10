import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #000C12;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
