import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }
  
  .App {
    width: 100%;
    overflow-x: hidden;
    position: relative;
  }
  
  .main-content {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  img, svg, video {
    max-width: 100%;
    height: auto;
    display: block;
  }`;
