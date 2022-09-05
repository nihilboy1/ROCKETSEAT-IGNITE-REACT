import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonComponentProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100px;
  height: 40px;
  background-color: ${props => props.theme.primary};

  
  // background: ${props => buttonVariant[props.variant]};
`
