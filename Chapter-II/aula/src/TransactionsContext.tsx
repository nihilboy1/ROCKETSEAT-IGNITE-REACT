import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

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

type TransactionInput = Pick<
  Transaction,
  'amount' | 'type' | 'category' | 'title'
>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransactions: (transactions: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
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

  function createTransactions(transactions: TransactionInput) {
    api.post('/transactions', transactions)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
