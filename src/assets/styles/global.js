import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
      font-size: 62.5%;
      --color-background: papayawhip;
      --color-primary: #29292c;
      --color-secondary: #ce2d2d;
      --color-tertiary: #ffffff;
      --gutter: 1.6rem;
      --font-sm: 1.2rem;
      --font-md: 1.5rem;
      --font-lg: 2rem;
    }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Jost';
    box-sizing: border-box;
  }
  body {
    background-color: var(--color-background);
    margin: 0;
    font-family: 'Jost';
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    min-height: 100%;

    font-size: var(--font-md);
    font-weight: normal;

  }

  h1, h2 {
    font-size: var(---font-lg);
    margin-top: 0;
    text-align: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
