import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  transition: 0.1s;
}

:root {
  --white: #ffffff;
  --black: #000000;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
}

body,
#root,
html {
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  transition: none;
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}


body, input, textarea, button {
  font-family: "Roboto", sans-serif;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`
