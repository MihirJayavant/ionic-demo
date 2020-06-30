export enum TransactionType {
  Credited,
  Debited
}

export interface ITransaction {
  id: number
  title: string
  description: string
  amount: number
  type: TransactionType
  date: Date
  userId: number
}

export interface IDebit extends ITransaction {
  category: string
  type: TransactionType.Debited
}

export interface ICredit extends ITransaction {
  type: TransactionType.Credited
}

export type Trnsaction = IDebit | ICredit

export interface IRecurrentTransactionItem {
  id: number
  transactionId: number
  dateCreated: Date
  recurring: number
}
