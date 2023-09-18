import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
    color: ${({ theme }) => theme.colors.BLACK};
    font-family: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;

export default GlobalStyle;
