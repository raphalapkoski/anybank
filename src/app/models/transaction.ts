export class Transaction {

  constructor(
    public readonly type: TransactionType, 
    public readonly value: number
  ) { }
}

export enum TransactionType {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
