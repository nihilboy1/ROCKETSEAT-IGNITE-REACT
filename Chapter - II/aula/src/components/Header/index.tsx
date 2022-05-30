import logoImg from '../../assets/Logo.svg'
import * as S from './style'

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {
  
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
 
      </S.Content>
    </S.Container>
  )
}
