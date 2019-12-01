export enum TransactionType {
  Credited,
  Debited
}

export interface ITransactionBase {
  id: number
  title: string
  description: string
  amount: number
  type: TransactionType
  date: Date
  userId: number
}

export interface IDebit extends ITransactionBase {
  category: string
  type: TransactionType.Debited
}

export interface ICredit extends ITransactionBase {
  type: TransactionType.Credited
}

export type Trnsaction = IDebit | ICredit

export interface IRecurrentTransactionItem {
  id: number
  transactionId: number
  dateCreated: Date
  recurring: number
}
