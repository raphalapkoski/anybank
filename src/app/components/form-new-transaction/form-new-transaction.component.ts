import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../../models/transaction';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-new-transaction',
  imports: [
    FormsModule,
    KeyValuePipe
  ],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormNewTransactionComponent {
  type = '';
  valueTransaction = "";

  transactionCreate = output<Transaction>();

  typeTransactionEnum = TransactionType;

  onSubmit() {
    const transaction = new Transaction(
      this.type as TransactionType, 
      Number(this.valueTransaction)
    );

    this.transactionCreate.emit(transaction);

    this.type = "";
    this.valueTransaction = "";
  }

}
