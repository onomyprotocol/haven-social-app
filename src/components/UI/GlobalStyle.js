import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    font-weight: 400;
    src: url(${require('assets/fonts/Gilroy-Regular.ttf')});
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 500;
    src: url(${require('assets/fonts/Gilroy-Medium.ttf')});
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 600;
    src: url(${require('assets/fonts/Gilroy-Bold.ttf')});
  }

  body {
    background-color: #fafafc;

    font-family: 'Gilroy', sans-serif;
    -webkit-font-smooth: antialiased;
  }
`