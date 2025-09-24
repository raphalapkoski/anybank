import { Component, computed, signal } from '@angular/core';
import { Banner } from './components/banner/banner';
import { FormNewTransactionComponent } from "./components/form-new-transaction/form-new-transaction.component";
import { Transaction, TransactionType } from './models/transaction';
import { ExtractComponent } from './components/extract/extract.component';

@Component({
  selector: 'app-root',
  imports: [
    Banner,
    FormNewTransactionComponent,
    ExtractComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  transactions = signal<Transaction[]>([]);

  balance = computed(() => {
    return this.transactions().reduce((acc, transaction) => {
      if (transaction.type === TransactionType.DEPOSITO) {
        return acc + transaction.value;
      } else {
        return acc - transaction.value;
      }
    }, 0);
  });

  processTransaction(transaction: Transaction) {

    if (transaction.type === TransactionType.SAQUE && transaction.value > this.balance()) {
      return alert('Saldo insuficiente!');
    }

    this.transactions.update((currentTransactions) => [...currentTransactions, transaction]);
  }
}
