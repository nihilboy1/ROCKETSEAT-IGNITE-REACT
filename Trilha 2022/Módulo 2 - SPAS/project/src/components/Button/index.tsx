import { ButtonComponent, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonComponent variant={variant}>Enviar</ButtonComponent>
}
