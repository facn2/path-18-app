import { injectGlobal } from 'styled-components';

injectGlobal`
  body, input, button {
    font-family: 'Heebo', sans-serif;
  }

  html, body {
    height: 100%
  }

  body {
   background-color: whitesmoke;
  }

  .fade-exit {
    height: 0;
  }
`;
