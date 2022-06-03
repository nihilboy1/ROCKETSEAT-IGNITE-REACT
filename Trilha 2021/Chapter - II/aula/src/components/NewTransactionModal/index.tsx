import Modal from 'react-modal'
import closeImg from '../../assets/Fechar.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.svg'
import * as S from './style'
import { FormEvent, useContext, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

Modal.setAppElement('#root')
interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const { createTransactions } = useTransactions()

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()
    await createTransactions({
      title,
      category,
      amount,
      type
    })
    onRequestClose()
    setAmount(0)
    setCategory('')
    setType("deposit")
    setTitle('')
  }

  return (
    <Modal
      overlayClassName={'react-modal-overlay'}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={'react-modal-content'}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <S.TransactionTypeContainer>
          <S.RadioBox
            activeColor={'green'}
            isActive={type === 'deposit'}
            type="button"
            onClick={() => {
              setType('deposit')
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            activeColor={'red'}
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}
