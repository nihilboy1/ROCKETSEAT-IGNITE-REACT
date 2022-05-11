import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext
} from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

// interface TransactionInput{
//   title: string
//   amount: number
//   type: string
//   category: string
// }

// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export type TransactionInput = Pick<
  Transaction,
  'amount' | 'type' | 'category' | 'title'
>
interface TransactionsProviderProps {
  children: ReactNode
}
interface TransactionsContextData {
  transactions: Transaction[]
  createTransactions: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api
      .get('/transactions')

      .then(res => {
        setTransactions(res.data.transactions)
      })
  }, [])

  async function createTransactions(transactionsInput: TransactionInput) {
    const res = await api.post('/transactions', {
      ...transactionsInput,
      createdAt: new Date()
    })
    const { transaction } = res.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
