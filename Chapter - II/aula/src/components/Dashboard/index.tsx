import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import * as S from './style'

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable/>
    </S.Container>
  )
}
