import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #f0f2f5;
  --red: #E52E46;
  --green: #33cc95;
  --blue: #5429cc;
  --blue-light:#5e32d9;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffffff
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; // 14px
  }
}

body{
  background-color: var(--background);
  -webkit-font-smoothing: antialiased
}

body, input, textarea, button{
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  transition: .4s;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button{
  cursor: pointer;
}



[disabled]{
  opacity: 0.6;
  cursor: not-allowed
}


.react-modal-overlay{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color:rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

}
.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  position: relative;
  padding: 3rem;
  border-radius: 0.25rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background: transparent;

  &:hover{
    filter: brightness(0.7);
  }
}


`
