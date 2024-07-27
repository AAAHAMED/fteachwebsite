import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Eveline';
    src: url('../assets/fonts/Eveline.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Eveline', Arial, sans-serif;
    background-color: #0a0a0a;
    color: white;
  }
`;

export default GlobalStyle;
